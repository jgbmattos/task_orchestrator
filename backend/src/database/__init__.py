from contextlib import contextmanager

import flask
from sqlalchemy.orm import scoped_session
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()



@contextmanager
def async_session() -> scoped_session:
    session = db.create_scoped_session(options=dict(bind=db.get_engine(flask.current_app, 'default'), binds={}))

    try:
        yield session
        session.commit()

    except Exception:
        session.rollback()
        raise

    finally:
        session.close()


@contextmanager
def read_replica_async_session() -> scoped_session:
    session = db.create_scoped_session(options=dict(bind=db.get_engine(flask.current_app, 'readreplica'), binds={}))

    try:
        yield session

    finally:
        session.close()
