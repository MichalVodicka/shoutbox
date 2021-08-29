import * as graphql from "graphql";
import {message} from './message'
import {Connection} from "typeorm";

var mutationType = (db:Connection)=> new graphql.GraphQLObjectType({
    name: 'Mutation',
    fields: {
        message:message(db)
    }
});

export default mutationType
