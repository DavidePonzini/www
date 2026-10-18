import os
import unittest
from unittest.mock import patch

from flask_jwt_extended import create_access_token

from server import create_app


class SelectionTests(unittest.TestCase):
    def setUp(self):
        with patch.dict(os.environ, {'JWT_SECRET_KEY': 'x' * 32}):
            self.app = create_app()
        self.app.config.update(TESTING=True)
        self.client = self.app.test_client()

    def login(self):
        with self.app.app_context():
            token = create_access_token(identity='alice')
        self.client.set_cookie('access_token_cookie', token)

    def test_requires_login(self):
        self.assertEqual(self.client.get('/travel-checklist/selections').status_code, 401)
        self.assertEqual(self.client.put('/travel-checklist/selections', json={'labels': []}).status_code, 401)

    def test_load_uses_authenticated_user(self):
        self.login()
        with patch('server.db.travel_checklist.get_selections', return_value=['Acqua']) as load:
            response = self.client.get('/travel-checklist/selections')
        load.assert_called_once_with('alice')
        self.assertEqual(response.get_json(), {'success': True, 'data': ['Acqua']})

    def test_save_and_reset(self):
        self.login()
        for labels in [['Acqua', 'Acqua'], []]:
            with self.subTest(labels=labels), patch('server.db.travel_checklist.save_selections') as save:
                response = self.client.put('/travel-checklist/selections', json={
                    'username': 'bob', 'labels': labels,
                })
                save.assert_called_once_with('alice', list(dict.fromkeys(labels)))
                self.assertEqual(response.get_json(), {'success': True})

    def test_invalid_payloads(self):
        self.login()
        for payload in [None, [], {}, {'labels': 'Acqua'}, {'labels': [123]},
                        {'labels': ['']}, {'labels': ['x' * 256]}]:
            with self.subTest(payload=payload), patch('server.db.travel_checklist.save_selections') as save:
                response = self.client.put('/travel-checklist/selections', json=payload)
                save.assert_not_called()
                self.assertFalse(response.get_json()['success'])
