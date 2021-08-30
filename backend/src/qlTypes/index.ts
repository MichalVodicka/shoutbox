import * as graphql from "graphql";

const messageType = new graphql.GraphQLObjectType({
    name: 'message',
    fields: {
        content: { type: graphql.GraphQLString },
        id: { type: graphql.GraphQLString },
        name: { type: graphql.GraphQLString },
        created_at: { type: graphql.GraphQLString },
    }
});

export {messageType}
