from unittest.mock import patch


def test_get_user_list_requires_admin(authenticated_client):
    with patch('server.api.users.db.users.is_admin', return_value=False):
        response = authenticated_client.get('/users')

    assert response.status_code == 200
    assert response.get_json() == {
        'success': False,
        'message': 'Only admins can view users.',
    }


def test_get_user_list_returns_users_for_admin(authenticated_client):
    with patch('server.api.users.db.users.is_admin', return_value=True), \
         patch('server.api.users.db.users.list_users', return_value=[
             {'username': 'alice', 'is_admin': True},
             {'username': 'bob', 'is_admin': False},
         ]):
        response = authenticated_client.get('/users')

    assert response.status_code == 200
    assert response.get_json() == {
        'success': True,
        'data': [
            {'username': 'alice', 'is_admin': True},
            {'username': 'bob', 'is_admin': False},
        ],
    }


def test_update_admin_status_rejects_self_edit(authenticated_client):
    with patch('server.api.users.db.users.is_admin', return_value=True):
        response = authenticated_client.post('/users/admin-status', json={
            'username': 'alice',
            'is_admin': False,
        })

    assert response.status_code == 200
    assert response.get_json() == {
        'success': False,
        'message': 'Admins cannot change their own admin status.',
    }


def test_update_admin_status_updates_other_user(authenticated_client):
    with patch('server.api.users.db.users.is_admin', return_value=True), \
         patch('server.api.users.db.users.set_admin_status', return_value=True) as set_admin_status:
        response = authenticated_client.post('/users/admin-status', json={
            'username': 'bob',
            'is_admin': True,
        })

    set_admin_status.assert_called_once_with('bob', True)
    assert response.status_code == 200
    assert response.get_json() == {
        'success': True,
    }
