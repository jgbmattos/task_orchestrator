from alembic import command

from src.database.alembic.config import alembic_cfg


def upgrade():
    command.upgrade(alembic_cfg, "head")


if __name__ == "__main__":
    upgrade()
