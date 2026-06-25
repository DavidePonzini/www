from flask import Blueprint, request
from flask_jwt_extended import jwt_required, get_jwt_identity

from server import db
from .util import responses

bp = Blueprint('user', __name__)

@bp.route('/info', methods=['GET'])
@jwt_required()
def get_user_info():
    username = get_jwt_identity()

    result = db.users.get_info(username)
    if result is None:
        return responses.response(False)
    
    return responses.response(True, **result)


@bp.route('', methods=['GET'])
@jwt_required()
def list_users():
    current_user = get_jwt_identity()

    if not db.users.is_admin(current_user):
        return responses.response(False, message='Only admins can view users.')

    return responses.response(True, data=db.users.list_users())


@bp.route('/admin-status', methods=['POST'])
@jwt_required()
def update_admin_status():
    current_user = get_jwt_identity()

    if not db.users.is_admin(current_user):
        return responses.response(False, message='Only admins can update admin status.')

    data = request.get_json()
    username = data['username']
    is_admin = bool(data['is_admin'])

    if username == current_user:
        return responses.response(False, message='Admins cannot change their own admin status.')

    if not db.users.set_admin_status(username, is_admin):
        return responses.response(False, message='User not found.')

    return responses.response(True)
