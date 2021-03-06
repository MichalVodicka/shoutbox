import {GraphQLFieldConfig,GraphQLList} from "graphql";
import {messageType} from '../qlTypes'
import {Connection} from "typeorm";
import {IncomingMessage} from "http";
import {Message} from "../data/entity/message";

const message = (db: Connection):GraphQLFieldConfig<unknown,IncomingMessage> =>  {
    return  {
        type: new GraphQLList(messageType),
        resolve: (_, __) => {
            return db.getRepository(Message).find()
        }
    }
}

export {
    message
}


