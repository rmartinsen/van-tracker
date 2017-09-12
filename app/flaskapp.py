
from flask import Flask
from flask_graphql import GraphQLView

from graph import schema
from model import db_session

from instance.config import settings

app = Flask(__name__)
app.config.from_object(settings)

app.add_url_rule(
    "/graphql",
    view_func=GraphQLView.as_view(
        "graphql",
        schema=schema,
        graphiql=True
        )
    )

if __name__ == "__main__":
    app.run()
