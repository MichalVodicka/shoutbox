import * as express from 'express';
import * as graphql from 'graphql'
import queryType from "./query";
import mutationType from "./mutation";
import {graphqlHTTP} from "express-graphql";

var schema = new graphql.GraphQLSchema({query: queryType, mutation:mutationType});

var app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');
