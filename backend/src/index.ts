import * as express from 'express';
import * as graphql from 'graphql'
import queryType from "./query";
import mutationType from "./mutation";
import {graphqlHTTP} from "express-graphql";
const {PORT = 4000} = process.env
import {connect} from "./data";
connect().then(db =>{
    var schema = new graphql.GraphQLSchema({query: queryType(db), mutation:mutationType(db)});

    var app = express();
    app.use('/graphql', graphqlHTTP({
        schema: schema,
        graphiql: true,
    }));

    app.use(express.static(__dirname +'public'))
    app.listen(PORT);
    console.log(`Running a GraphQL API server at localhost:${PORT}/graphql`);
})
    .catch(error => console.log(error));

