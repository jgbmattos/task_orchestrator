from redis import ConnectionPool, StrictRedis

from src.settings import CACHE_HOST, CACHE_PORT


class Singleton(type):
    _instances = {}

    def __call__(cls, *args, **kwargs):
        if cls not in cls._instances:
            cls._instances[cls] = super(Singleton, cls).__call__(*args, **kwargs)
        return cls._instances[cls]


class RedisServer(StrictRedis, metaclass=Singleton):
    REDIS_HOST = CACHE_HOST
    REDIS_PORT = CACHE_PORT

    connection_poll = None
    redis = None

    def __init__(self) -> None:
        super(RedisServer, self).__init__(connection_pool=self.set_connection_pool())

    def set_connection_pool(self) -> 'ConnectionPool':
        return ConnectionPool(
            host=self.REDIS_HOST,
            port=self.REDIS_PORT,
            db=0,
        )


