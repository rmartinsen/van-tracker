import graphene
from graphene_sqlalchemy import SQLAlchemyObjectType
from model import db_session, Marker as MarkerModel


class Marker(SQLAlchemyObjectType):
    class Meta:
        model = MarkerModel


class CreateMarker(graphene.Mutation):
    class Input:
        title = graphene.String(required=True)
        blurb = graphene.String()
        latitude = graphene.Float(required=True)
        longitude = graphene.Float(required=True)

    ok = graphene.Boolean()

    def mutate(self, args, context, info):
        marker_model = MarkerModel(title=args.get("title"), blurb=args.get("blurb"),
                                   latitude=args.get("latitude"), longitude=args.get("longitude"))

        db_session.add(marker_model)
        db_session.commit()

        return CreateMarker(ok=True)

class UpdateMarker(graphene.Mutation):
    class Input:
        marker_id = graphene.Int(required=True)
        title = graphene.String()
        blurb = graphene.String()
        latitude = graphene.Float()
        longitude = graphene.Float()

    ok = graphene.Boolean()

    def mutate(self, args, context, info):
        marker_id = args["marker_id"]
        marker_model = db_session.query(MarkerModel).get(marker_id) 

        for key in args.keys():
            setattr(marker_model, key, args[key])

        db_session.add(marker_model)
        db_session.commit()

        return UpdateMarker(ok=True)

class Mutations(graphene.ObjectType):
    create_marker = CreateMarker.Field()
    update_marker = UpdateMarker.Field()

class Query(graphene.ObjectType):
    marker = graphene.Field(Marker)
    markers = graphene.List(Marker)

    def resolve_markers(self, args, context, info):
        return db_session.query(MarkerModel).all()

    def resolve_marker(self, args, context, info):
        import pdb; pdb.set_trace()
        return db_session.query(MarkerModel).first()


schema = graphene.Schema(query=Query, mutation=Mutations)
