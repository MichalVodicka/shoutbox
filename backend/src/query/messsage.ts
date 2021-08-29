import * as graphql from "graphql";
import {GraphQLFieldConfig} from "graphql";
import {messageType} from '../qlTypes'


const message:GraphQLFieldConfig<any,any,any>=  {
    type: messageType,
    // `args` describes the arguments that the `user` query accepts
    args: {
        id: { type: graphql.GraphQLString }
    },
    resolve: (_, {id}) => {
        return id;
    }
}

export {
    message
}


