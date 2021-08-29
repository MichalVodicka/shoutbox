import {GraphQLFieldConfig} from "graphql";
import {messageType} from "../qlTypes";
import * as graphql from "graphql";

const message:GraphQLFieldConfig<any,any,any>=  {
    type: messageType,
    args: {
        id: { type: graphql.GraphQLString }
    },
    resolve: (_, {id}) => {
        return id
    }
}

export {
    message
}
