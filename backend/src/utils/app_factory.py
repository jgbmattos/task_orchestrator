from flask import Flask
from flask.logging import default_handler
from flask_cors import CORS

from src.utils.urls import set_urls


def create_app():
    app = Flask(__name__)
    app.url_map.strict_slashes = False

    app.config['JSON_SORT_KEYS'] = False
    # TODO iniciar com cloud watch apenas
    # app.config['ELASTIC_APM'] = {
    #     'SERVICE_NAME': APM_SETTINGS['SERVICE_NAME'],
    #     'SERVICE_VERSION': __version__,
    #     'SERVER_URL': APM_SETTINGS['SERVER_URL'],
    #     'SECRET_TOKEN': APM_SETTINGS['SECRET_TOKEN'],
    #     'CAPTURE_BODY': 'all',
    #     'DEBUG': True,
    # }
    # app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE_URI
    # app.config['SQLALCHEMY_BINDS'] = {
    #     'readreplica': DATABASE_REPLICA_URI,
    #     'default': DATABASE_URI,
    # }
    # app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    # app.config["DEBUG"] = DEBUG

    set_urls(app)
    # db.init_app(app)
    CORS(app)

    app.logger.removeHandler(default_handler)
    app.logger.disabled = True

    return app

