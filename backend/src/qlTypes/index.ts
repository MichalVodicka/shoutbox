import * as graphql from "graphql";

var messageType = new graphql.GraphQLObjectType({
    name: 'messages',
    fields: {
        id: { type: graphql.GraphQLString },
        name: { type: graphql.GraphQLString },
    }
});

export {messageType}
