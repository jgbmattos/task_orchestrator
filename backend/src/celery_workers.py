from celery import Celery
from celery.app.registry import TaskRegistry

from src.settings import CELERY, SERVICE_NAME
from src.tasks.bankslip_dead_queue import PartnerBankslipDeadQueueTask
from src.tasks.retry import RetryProcessor

task_registry = TaskRegistry()
task_registry.register(PartnerBankslipDeadQueueTask)
task_registry.register(RetryProcessor)

celery_workers = Celery(
    SERVICE_NAME,
    backend=CELERY['RESULT_BACKEND'],
    broker=CELERY['BROKER_URL'],
    tasks=task_registry
)

celery_workers.conf.update(CELERY)
