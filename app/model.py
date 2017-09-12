import sqlalchemy as db
from sqlalchemy.orm import (scoped_session, sessionmaker)
from sqlalchemy.ext.declarative import declarative_base

from instance.config import settings

engine = db.create_engine(settings["SQLALCHEMY_DATABASE_URI"])
sm = sessionmaker(bind=engine, autocommit=True)
db_session = scoped_session(sm)

Base = declarative_base()

Base.query = db_session.query_property()


class Marker(Base):
    __tablename__ = "marker"
    marker_id = db.Column(db.Integer, primary_key=True)
    latitude = db.Column(db.Float)
    longitude = db.Column(db.Float)
    title = db.Column(db.String(100))
    blurb = db.Column(db.String(65535))

    def __repr__(self):
        return "<Marker %d>".format(self.marker_id)
