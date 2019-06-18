import express from 'express';
import { ApolloServer } from 'apollo-server-express'
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import schemas from './src/schemas'

require('dotenv').config()
const playground = {
    settings: {
      'editor.cursorShape': 'line',
    },
  };

const app = express();
const server = new ApolloServer({
    schema: schemas,
    playground: playground,
    context: ({ req }) => {   
      return { req: req }
    },
    introspection: true
  })
app.mongoose = mongoose
mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`);
mongoose.connection.on('error', () => {
    throw new Error(`unable to connect to database`)
})
mongoose.connection.on('connected', () => {
    console.log(`Connected to database`);
})
server.applyMiddleware({ app, path: '/v1/graphql' })
const port = 8000;
app.listen({ port: port }, () =>
console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`),
);
