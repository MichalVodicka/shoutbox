import {GraphQLObjectType} from "graphql";
import {message} from './messsage'
import {Connection} from "typeorm";


// Define the Query type
const queryType = (db:Connection)=>new GraphQLObjectType({
    name: 'Query',
    fields: {
        message:message(db)
    }
});

export default queryType

