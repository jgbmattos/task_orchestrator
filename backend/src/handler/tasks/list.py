from flask import jsonify
from flask_restful import Resource
from src.helper.queries import get_task_list


class TasksListHandler(Resource):
    def get(self):
        tasks_list = get_task_list()
        if not tasks_list:
            return {"message": "Nenhuma task encontrada"}, 404

        return jsonify(tasks_list)
