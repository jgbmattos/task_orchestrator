from flask_restful import Api

from src.handler.tasks.list import TasksListHandler


def set_urls(app):
    api = Api()
    api.add_resource(TasksListHandler, f"/api/v1/tasks")
    api.init_app(app)
