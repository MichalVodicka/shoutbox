import {createConnection} from "typeorm";
import {Message} from "./entity/message";
const {
    DB_HOST = 'localhost',
    DB_PORT = 5432,
    DB_USERNAME="michal",
    DB_PASS='456321',
    DB_NAME="postgres"
}:{
    DB_HOST:string
    DB_PORT:number
    DB_USERNAME:string
    DB_PASS:string,
    DB_NAME:string
} = process.env as any

export const connect = ()=> createConnection({
    type: "postgres",
    host: DB_HOST,
    port: DB_PORT,
    username: DB_USERNAME,
    password: DB_PASS,
    database: DB_NAME,
    entities: [
        Message
    ],
    synchronize: true,
    logging: false
})
