from alembic import command

from src.database.alembic.config import alembic_cfg


def revision():
    command.revision(alembic_cfg, autogenerate=True)


if __name__ == "__main__":
    revision()
