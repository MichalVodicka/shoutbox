import {GraphQLFieldConfig} from "graphql";
import {IncomingMessage} from 'http'
import {messageType} from "../qlTypes";
import * as graphql from "graphql";
import {Connection} from "typeorm";
import {Message} from "../data/entity/message";

const {MAX_MESSAGE = 30 } = process.env

const message = (db: Connection): GraphQLFieldConfig<unknown, IncomingMessage, { content?: string,name?:string, [argName: string]: any; }> => {
    return {
        type: messageType,
        args: {
            name: {type: graphql.GraphQLString},
            content: {type: graphql.GraphQLString},
        },
        resolve: (_, {content,name}, incommingMessage) => {
            if(!content || !name){
                throw 'I do need more data!!!!'
            }
            let message = new Message();
            message.content =content;
            message.name =name;
            message.created_at = new Date()
            message.ip = incommingMessage.socket.remoteAddress??"NA";
            message.user_agent = incommingMessage.headers['user-agent']??"NA";

            let msgRepository = db.getRepository(Message);
            return msgRepository.save(message)


        }
    }
}

export {
    message
}
