from flask import Blueprint, request
from flask.views import MethodView
from flask_jwt_extended import get_jwt_identity, jwt_required

from server import db
from .util import responses

bp = Blueprint('travel_checklist', __name__)


class TravelChecklistAPI(MethodView):
    def get(self):
        return responses.response(True, data=db.travel_checklist.list_all())

    @jwt_required()
    def put(self):
        username = get_jwt_identity()
        if not db.users.is_admin(username):
            return responses.response(False, message='Unauthorized access')

        data = request.get_json()
        sections = data.get('sections', [])

        if not isinstance(sections, list):
            return responses.response(False, message='Invalid checklist payload')

        for section in sections:
            if not isinstance(section, dict):
                return responses.response(False, message='Invalid checklist section')

            category = section.get('category', '').strip()
            items = section.get('items', [])

            if not category:
                return responses.response(False, message='Category name cannot be empty')

            if not isinstance(items, list):
                return responses.response(False, message='Invalid category items')

            for item in items:
                if not isinstance(item, dict):
                    return responses.response(False, message='Invalid checklist item')

                label = item.get('label', '').strip()
                if not label:
                    return responses.response(False, message='Checklist item cannot be empty')

        result = db.travel_checklist.save_all(sections)
        return responses.response(True, data=result)


bp.add_url_rule('', view_func=TravelChecklistAPI.as_view('travel_checklist_api'))
