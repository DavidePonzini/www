from flask import Blueprint, request
from flask.views import MethodView
from flask_jwt_extended import jwt_required, get_jwt_identity

from server import db
from .util import responses

bp = Blueprint('redirects', __name__)

class RedirectsAPI(MethodView):
    decorators = [jwt_required()]

    def get(self):
        '''List all redirects.'''

        username = get_jwt_identity()
        if not db.users.is_admin(username):
            return responses.response(False, message='Unauthorized access')

        result = db.redirects.list_all()
        return responses.response(True, data=result)

    def post(self):
        '''Create a new redirect.'''

        username = get_jwt_identity()

        if not db.users.is_admin(username):
            return responses.response(False, message='Unauthorized access')

        data = request.get_json()
        source = data['source']
        target = data['target']

        db.redirects.add(source, target)

        return responses.response(True)

    def put(self):
        '''Update a redirect.'''

        username = get_jwt_identity()

        if not db.users.is_admin(username):
            return responses.response(False, message='Unauthorized access')
        
        data = request.get_json()
        source = data['source']
        target = data['target']

        db.redirects.update(source, target)

        return responses.response(True)

    def delete(self):
        '''Delete a redirect.'''

        username = get_jwt_identity()

        if not db.users.is_admin(username):
            return responses.response(False, message='Unauthorized access')

        data = request.get_json()
        source = data['source']

        db.redirects.remove(source)

        return responses.response(True)

# Register all methods (GET, POST, PUT, DELETE) on /
#   Note: trailing slash causes nginx to redirect, leading to CORS error
bp.add_url_rule('', view_func=RedirectsAPI.as_view('redirects_api'))

@bp.route('/<path:source>', methods=['GET'])
def get_redirect(source):
    '''Get a redirect by source path.'''

    result = db.redirects.get_target(source)
    if result is None:
        return responses.response(False, message='Redirect not found')

    return responses.response(True, target=result)

