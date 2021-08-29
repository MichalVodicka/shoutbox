import * as graphql from "graphql";

var messageType = new graphql.GraphQLObjectType({
    name: 'message',
    fields: {
        content: { type: graphql.GraphQLString },
        id: { type: graphql.GraphQLString },
        name: { type: graphql.GraphQLString },
    }
});


export {messageType}
