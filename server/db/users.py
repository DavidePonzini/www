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

