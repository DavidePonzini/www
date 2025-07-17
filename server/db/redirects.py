from dav_tools import database
from ._connection import db, SCHEMA

def get_target(source: str) -> str:
    '''Get the redirect URL for a given source path'''

    query = database.sql.SQL('''
        SELECT
            target
        FROM
            {schema}.redirects
        WHERE
            source = {source}
    ''').format(
        schema=database.sql.Identifier(SCHEMA),
        source=database.sql.Placeholder('source')
    )

    result = db.execute_and_fetch(query, {
        'source': source
    })

    if len(result) == 0:
        return None

    return result[0][0]

def add(src: str, target: str) -> None:
    '''Add a new redirect from source to target'''

    query = database.sql.SQL('''
        INSERT INTO
            {schema}.redirects (source, target)
        VALUES
            ({source}, {target})
    ''').format(
        schema=database.sql.Identifier(SCHEMA),
        source=database.sql.Placeholder('source'),
        target=database.sql.Placeholder('target')
    )

    db.execute(query, {
        'source': src,
        'target': target
    })

def remove(src: str) -> None:
    '''Remove a redirect for a given source path'''

    query = database.sql.SQL('''
        DELETE FROM
            {schema}.redirects
        WHERE
            source = {source}
    ''').format(
        schema=database.sql.Identifier(SCHEMA),
        source=database.sql.Placeholder('source')
    )

    db.execute(query, {
        'source': src
    })

def update(src: str, target: str) -> None:
    '''Update the target of an existing redirect'''

    query = database.sql.SQL('''
        UPDATE
            {schema}.redirects
        SET
            target = {target}
        WHERE
            source = {source}
    ''').format(
        schema=database.sql.Identifier(SCHEMA),
        source=database.sql.Placeholder('source'),
        target=database.sql.Placeholder('target')
    )

    db.execute(query, {
        'source': src,
        'target': target
    })

def list_all() -> list:
    '''List all redirects'''

    query = database.sql.SQL('''
        SELECT
            source, target
        FROM
            {schema}.redirects
        ORDER BY
            source
    ''').format(
        schema=database.sql.Identifier(SCHEMA)
    )

    result = db.execute_and_fetch(query)

    return [{
        'source': row[0],
        'target': row[1]
    } for row in result]