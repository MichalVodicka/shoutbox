import * as express from 'express';
import * as graphql from 'graphql'
import queryType from "./query";
import mutationType from "./mutation";
import {graphqlHTTP} from "express-graphql";
import {connect} from "./data";
import {join} from 'path'

const {PORT = 4000} = process.env
connect().then(db =>{
    var schema = new graphql.GraphQLSchema({query: queryType(db), mutation:mutationType(db)});

    var app = express();
    app.use('/graphql', graphqlHTTP({
        schema: schema,
        graphiql: true,
    }));
    app.use(express.static(join(__dirname,'public')))
    app.listen(PORT,()=>console.log(`Running a GraphQL API server at localhost:${PORT}/`));

}).catch(error => console.log(error));

