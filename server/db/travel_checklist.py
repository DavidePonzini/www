from dav_tools import database

from ._connection import SCHEMA, db


def _normalize_structure(rows: list[tuple]) -> list[dict]:
    sections: list[dict] = []
    category_index: dict[int, dict] = {}

    for category_id, category_name, item_id, item_label in rows:
        if category_id not in category_index:
            category = {
                'id': category_id,
                'category': category_name,
                'items': [],
            }
            sections.append(category)
            category_index[category_id] = category

        if item_id is not None:
            category_index[category_id]['items'].append({
                'id': item_id,
                'label': item_label,
            })

    return sections


def list_all() -> list[dict]:
    query = database.sql.SQL('''
        SELECT
            categories.id,
            categories.name,
            items.id,
            items.label
        FROM
            {schema}.travel_checklist_categories AS categories
        LEFT JOIN
            {schema}.travel_checklist_items AS items
            ON items.category_id = categories.id
        ORDER BY
            categories.sort_order,
            items.sort_order NULLS LAST,
            items.id
    ''').format(
        schema=database.sql.Identifier(SCHEMA),
    )

    return _normalize_structure(db.execute_and_fetch(query))


def _get_category_ids() -> set[int]:
    query = database.sql.SQL('''
        SELECT id
        FROM {schema}.travel_checklist_categories
    ''').format(
        schema=database.sql.Identifier(SCHEMA),
    )

    return {row[0] for row in db.execute_and_fetch(query)}


def _get_item_ids(category_id: int) -> set[int]:
    query = database.sql.SQL('''
        SELECT id
        FROM {schema}.travel_checklist_items
        WHERE category_id = {category_id}
    ''').format(
        schema=database.sql.Identifier(SCHEMA),
        category_id=database.sql.Placeholder('category_id'),
    )

    return {row[0] for row in db.execute_and_fetch(query, {'category_id': category_id})}


def _insert_category(name: str, sort_order: int) -> int:
    query = database.sql.SQL('''
        INSERT INTO {schema}.travel_checklist_categories (name, sort_order)
        VALUES ({name}, {sort_order})
        RETURNING id
    ''').format(
        schema=database.sql.Identifier(SCHEMA),
        name=database.sql.Placeholder('name'),
        sort_order=database.sql.Placeholder('sort_order'),
    )

    return db.execute_and_fetch(query, {
        'name': name,
        'sort_order': sort_order,
    })[0][0]


def _update_category(category_id: int, name: str, sort_order: int) -> None:
    query = database.sql.SQL('''
        UPDATE {schema}.travel_checklist_categories
        SET name = {name},
            sort_order = {sort_order}
        WHERE id = {category_id}
    ''').format(
        schema=database.sql.Identifier(SCHEMA),
        name=database.sql.Placeholder('name'),
        sort_order=database.sql.Placeholder('sort_order'),
        category_id=database.sql.Placeholder('category_id'),
    )

    db.execute(query, {
        'name': name,
        'sort_order': sort_order,
        'category_id': category_id,
    })


def _delete_categories(category_ids: set[int]) -> None:
    if not category_ids:
        return

    query = database.sql.SQL('''
        DELETE FROM {schema}.travel_checklist_categories
        WHERE id = ANY({category_ids})
    ''').format(
        schema=database.sql.Identifier(SCHEMA),
        category_ids=database.sql.Placeholder('category_ids'),
    )

    db.execute(query, {'category_ids': list(category_ids)})


def _insert_item(category_id: int, label: str, sort_order: int) -> int:
    query = database.sql.SQL('''
        INSERT INTO {schema}.travel_checklist_items (category_id, label, sort_order)
        VALUES ({category_id}, {label}, {sort_order})
        RETURNING id
    ''').format(
        schema=database.sql.Identifier(SCHEMA),
        category_id=database.sql.Placeholder('category_id'),
        label=database.sql.Placeholder('label'),
        sort_order=database.sql.Placeholder('sort_order'),
    )

    return db.execute_and_fetch(query, {
        'category_id': category_id,
        'label': label,
        'sort_order': sort_order,
    })[0][0]


def _update_item(item_id: int, label: str, sort_order: int) -> None:
    query = database.sql.SQL('''
        UPDATE {schema}.travel_checklist_items
        SET label = {label},
            sort_order = {sort_order}
        WHERE id = {item_id}
    ''').format(
        schema=database.sql.Identifier(SCHEMA),
        label=database.sql.Placeholder('label'),
        sort_order=database.sql.Placeholder('sort_order'),
        item_id=database.sql.Placeholder('item_id'),
    )

    db.execute(query, {
        'label': label,
        'sort_order': sort_order,
        'item_id': item_id,
    })


def _delete_items(item_ids: set[int]) -> None:
    if not item_ids:
        return

    query = database.sql.SQL('''
        DELETE FROM {schema}.travel_checklist_items
        WHERE id = ANY({item_ids})
    ''').format(
        schema=database.sql.Identifier(SCHEMA),
        item_ids=database.sql.Placeholder('item_ids'),
    )

    db.execute(query, {'item_ids': list(item_ids)})


def save_all(sections: list[dict]) -> list[dict]:
    existing_category_ids = _get_category_ids()
    kept_category_ids: set[int] = set()

    for category_order, section in enumerate(sections):
        category_name = section['category'].strip()
        category_id = section.get('id')

        if category_id in existing_category_ids:
            _update_category(category_id, category_name, category_order)
        else:
            category_id = _insert_category(category_name, category_order)

        kept_category_ids.add(category_id)

        existing_item_ids = _get_item_ids(category_id)
        kept_item_ids: set[int] = set()

        for item_order, item in enumerate(section.get('items', [])):
            label = item['label'].strip()
            item_id = item.get('id')

            if item_id in existing_item_ids:
                _update_item(item_id, label, item_order)
            else:
                item_id = _insert_item(category_id, label, item_order)

            kept_item_ids.add(item_id)

        _delete_items(existing_item_ids - kept_item_ids)

    _delete_categories(existing_category_ids - kept_category_ids)
    return list_all()
