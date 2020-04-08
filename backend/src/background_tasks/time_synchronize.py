from typing import List

from src.background_tasks import ContextTask
from src.settings import CELERY_TIME_SYNCHRONIZE


class TimeSynchronizeTask(ContextTask):
    name = CELERY_TIME_SYNCHRONIZE
    ignore_result = True
    max_retries = 2

    def run(self, time_actions_list: List) -> None:
        pass
