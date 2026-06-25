from dav_tools import database
from ._connection import db, SCHEMA

def is_admin(username: str) -> bool:
    '''Check if a user is an admin'''

    query = database.sql.SQL('''
        SELECT
            is_admin
        FROM
            {schema}.users
        WHERE
            username = {username}
    ''').format(
        schema=database.sql.Identifier(SCHEMA),
        username=database.sql.Placeholder('username')
    )

    result = db.execute_and_fetch(query, {
        'username': username
    })

    if len(result) == 0:
        return False
    
    return result[0][0]

def get_info(username: str) -> dict:
    '''Get general information about a user'''

    query = database.sql.SQL(
        '''
        SELECT
            u.is_admin
        FROM
            {schema}.users u
        WHERE
            u.username = {username}
        '''
    ).format(
        schema=database.sql.Identifier(SCHEMA),
        username=database.sql.Placeholder('username')
    )

    result = db.execute_and_fetch(query, {
        'username': username
    })

    if len(result) == 0:
        return {}

    result = result[0]
    is_admin = result[0]

    return {
        'username': username,
        'is_admin': is_admin,
    }


def list_users() -> list[dict]:
    '''List all users with their admin status.'''

    query = database.sql.SQL(
        '''
        SELECT
            u.username,
            u.is_admin
        FROM
            {schema}.users u
        ORDER BY
            u.username ASC
        '''
    ).format(
        schema=database.sql.Identifier(SCHEMA)
    )

    result = db.execute_and_fetch(query)

    return [{
        'username': row[0],
        'is_admin': row[1],
    } for row in result]


def set_admin_status(username: str, is_admin: bool) -> bool:
    '''Set the admin status for a user.'''

    if not user_exists(username):
        return False

    query = database.sql.SQL(
        '''
        UPDATE
            {schema}.users
        SET
            is_admin = {is_admin}
        WHERE
            username = {username}
        '''
    ).format(
        schema=database.sql.Identifier(SCHEMA),
        is_admin=database.sql.Placeholder('is_admin'),
        username=database.sql.Placeholder('username')
    )

    db.execute(query, {
        'username': username,
        'is_admin': is_admin,
    })

    return True


def user_exists(username: str) -> bool:
    '''Check if a user exists in the database.'''

    query = database.sql.SQL(
        '''
        SELECT
            1
        FROM
            {schema}.users
        WHERE
            username = {username}
        '''
    ).format(
        schema=database.sql.Identifier(SCHEMA),
        username=database.sql.Placeholder('username')
    )

    result = db.execute_and_fetch(query, {
        'username': username,
    })

    return len(result) > 0
