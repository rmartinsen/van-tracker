from graphene_sqlalchemy import SQLAlchemyObjectType
import graphene
from graphene_sqlalchemy import SQLAlchemyConnectionField

from model import db_session, Marker


class gqlMarker(SQLAlchemyObjectType):
    class Meta:
        model = Marker
        interfaces = (graphene.relay.Node, )

class Query(graphene.ObjectType):
    marker = graphene.Field(gqlMarker)

schema = graphene.Schema(query=Query, types=[gqlMarker])

