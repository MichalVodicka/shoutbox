import * as graphql from "graphql";
import {message} from './message'

var mutationType = new graphql.GraphQLObjectType({
    name: 'Mutation',
    fields: {
        message
    }
});

export default mutationType
