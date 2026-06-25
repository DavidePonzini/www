from flask import Flask
from flask_cors import CORS
from flask_jwt_extended import JWTManager
import os
import dav_tools

jwt = JWTManager()


def create_app() -> Flask:
    """Create and configure the Flask application."""
    
    app = Flask(__name__)
    jwt_secret_key = os.getenv('JWT_SECRET_KEY', 'key')
    if len(jwt_secret_key.encode('utf-8')) < 32:
        dav_tools.messages.warning('JWT_SECRET_KEY is less than 32 bytes long. Set a longer value in production.')

    app.config['JWT_SECRET_KEY'] = jwt_secret_key
    app.config['MAX_CONTENT_LENGTH'] = int(os.getenv('MAX_CONTENT_LENGTH', 1024*1024*20))   # 20MB
    app.config['JWT_TOKEN_LOCATION'] = ['cookies']
    app.config['JWT_COOKIE_SECURE'] = os.getenv('JWT_COOKIE_SECURE', 'False').lower() == 'true'
    app.config['JWT_COOKIE_SAMESITE'] = os.getenv('JWT_COOKIE_SAMESITE', 'Lax')
    app.config['JWT_ACCESS_COOKIE_PATH'] = '/api'
    app.config['JWT_REFRESH_COOKIE_PATH'] = '/api/auth/refresh'
    app.config['JWT_COOKIE_CSRF_PROTECT'] = False

    # CORS(app)
    CORS(app, resources={r"/*": {"origins": "*"}}, supports_credentials=True,
     methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
     allow_headers=["Content-Type", "Authorization"])

    jwt.init_app(app)

    # Register blueprints
    from . import auth, redirects, users

    app.register_blueprint(auth.bp, url_prefix='/auth')
    app.register_blueprint(redirects.bp, url_prefix='/redirects')
    app.register_blueprint(users.bp, url_prefix='/users')

    return app
