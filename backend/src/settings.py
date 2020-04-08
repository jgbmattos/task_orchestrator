import os
from decouple import config

ROOT = os.path.dirname(os.path.abspath(__file__))
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

DEBUG = config('DEBUG', default=False)
HOST = config('APP_DEFAULT_HOST', "0.0.0.0")
PORT = config('APP_DEFAULT_PORT', cast=int, default=80)
SERVICE_NAME = "task-orchestrator"
CELERY_QUEUE = f"{SERVICE_NAME}-queue"
CELERY_TIME_SYNCHRONIZE = f"{SERVICE_NAME}-time-synchronize"

CELERY = {
    "BROKER_URL": config('CELERY_BROKER_URL'),
    "RESULT_BACKEND": config('CELERY_RESULT_BACKEND'),
    "CELERY_ALWAYS_EAGER": DEBUG,
    "task_always_eager": False,
    "CELERY_EAGER_PROPAGATES_EXCEPTIONS": DEBUG,
    "CELERY_TIMEZONE": "America/Sao_Paulo",
    "CELERY_ENABLE_UTC": True,
    "CELERY_SEND_TASK_SENT_EVENT": True
}
