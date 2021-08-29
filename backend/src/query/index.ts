import {GraphQLObjectType} from "graphql";
import {message} from './messsage'


// Define the Query type
const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
        message
    }
});

export default queryType

