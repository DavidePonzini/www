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
