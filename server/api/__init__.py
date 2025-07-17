from flask import Flask
from flask_cors import CORS
from flask_jwt_extended import JWTManager
import os

jwt = JWTManager()


def create_app() -> Flask:
    """Create and configure the Flask application."""
    
    app = Flask(__name__)
    app.config['JWT_SECRET_KEY'] = os.getenv('JWT_SECRET_KEY', 'key')
    app.config['MAX_CONTENT_LENGTH'] = int(os.getenv('MAX_CONTENT_LENGTH', 1024*1024*20))   # 20MB

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

