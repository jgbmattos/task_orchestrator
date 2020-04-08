from flask import jsonify, request
from flask_restful import Resource
from src.helper.queries import get_task_list


class TasksListHandler(Resource):
    def post(self):
        payload = request.json

        tasks_list = get_task_list()
        if not tasks_list:
            return {"message": "Nenhuma task encontrada"}, 404

        return jsonify(tasks_list)
