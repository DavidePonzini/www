from typing import Iterable as _Iterable
from flask import jsonify as _jsonify, Response as _Response

def response(success: bool = True, **kwargs) -> _Response:
    return _jsonify({
        'success': success,
        **kwargs
    })

def streaming_response(data: _Iterable[str]) -> _Response:
    return _Response(data, content_type='application/x-ndjson')

NOT_IMPLEMENTED = 'This feature is not implemented yet. Please check back later.'
