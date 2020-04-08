from alembic.config import Config

from src.settings import BASE_DIR, DATABASE_URI

# For some reason make upgrade demands for PORT in connection url, but, SQL Alchemy crashes using PORT.

alembic_cfg = Config()
alembic_cfg.set_main_option("script_location", f"{BASE_DIR}/src/database/alembic")
alembic_cfg.set_main_option("sqlalchemy.url", DATABASE_URI)
