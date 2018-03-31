import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import mongoose from 'mongoose';
import cors from 'cors';

import typeDefs from './graphql/schema';
import resolvers from './graphql/resolvers';

const PORT = 4000;
const GRAPHQL_ENDPOINT = '/graphql';
const GRAPHIQL_ENDPOINT = '/graphiql';
const MONGODB = 'mongodb://localhost/products';

// Some fake data
const Products = [
  {
    "name": "Hopsta La Vista",
    "origin": "Canada, Ontario",
  },
  {
    "name": "Labatt Blue",
    "origin": "Canada, Ontario",
  },
];

// Put together a schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

mongoose.connect(MONGODB);

const Product = mongoose.model('Product', { name: String, origin: String });

// Initialize the app
const app = express();

app.use(cors('http://localhost:8080'));

// The GraphQL endpoint
// We pass the Product model to our resolvers using context
app.use(GRAPHQL_ENDPOINT, bodyParser.json(), graphqlExpress({ schema, context: { Product } }));

// GraphiQL, a visual editor for queries
app.use(GRAPHIQL_ENDPOINT, graphiqlExpress({ endpointURL: GRAPHQL_ENDPOINT }));

// Start the server
app.listen(PORT, () => {
  console.log(`Go to http://localhost:${PORT}${GRAPHIQL_ENDPOINT} to run queries!`);
});