import {GraphQLFieldConfig} from "graphql";
import {IncomingMessage} from 'http'
import {messageType} from "../qlTypes";
import * as graphql from "graphql";
import {Connection} from "typeorm";
import {Meta} from "../data/entity/meta";
import {Message} from "../data/entity/message";

const message = (db: Connection): GraphQLFieldConfig<unknown, IncomingMessage, { content?: string,name?:string, [argName: string]: any; }> => {
    return {
        type: messageType,
        args: {
            name: {type: graphql.GraphQLString},
            content: {type: graphql.GraphQLString},
        },
        resolve: (_, {content,name}, incommingMessage) => {
            let meta = new Meta();
            meta.ip = incommingMessage.connection.remoteAddress??"NA";
            meta.user_agent = incommingMessage.headers['user-agent']??"NA";

            let metaRepository = db.getRepository(Meta);

            if(!content || !name){
                throw 'I do need more data!!!!'
            }

            return  metaRepository.save(meta).then(meta=>{
                let message = new Message();
                message.meta_id = meta.id;
                message.content =content;
                message.name =name;
                message.created_at = new Date()
                let msgRepository = db.getRepository(Message);
                return msgRepository.save(message)
            });

        }
    }
}

export {
    message
}
