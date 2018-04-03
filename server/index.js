import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import mongoose from 'mongoose';
import cors from 'cors';

import typeDefs from './graphql/schema';
import resolvers from './graphql/resolvers';
import fetch from 'node-fetch';

import { LCBO_API_ACCESS_KEY } from '../config';

const LCBO_API_ENDPOINT = 'https://lcboapi.com/';

const PORT = 4000;
const GRAPHQL_ENDPOINT = '/graphql';
const GRAPHIQL_ENDPOINT = '/graphiql';
const MONGODB = {
  connection: 'mongodb://localhost/products',
  schema: {
    Product: mongoose.Schema({
      name: String,
      style: String,
      package: String,
    })
  }
}

// TODO:  Resolve issue with type checking
// NOTE: mongodb and server have to restart with there is a schema change

// Put together a schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

mongoose.connect(MONGODB.connection);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection Error'));
db.once('open', () => console.log('Connection Made!'));

const Product = mongoose.model('Product', MONGODB.schema.Product);

async function fetchAsync () {
  const response = await fetch(`${LCBO_API_ENDPOINT}/products?where=has_value_added_promotion`, {
    headers: {
      Authorization: `Token ${LCBO_API_ACCESS_KEY}`
    }
  });

  return await response.json();
}

const getProducts = () => {
  let promise = fetchAsync();

  promise
    .then(({ result }) => result)
    .then(products => products.map(product => ({
      _id: product.id,
      name: product.name,
      style: product.style,
      package: product.package,
    })));

  return promise;
}

// Get the total number of products
Product.count({}, (err, count) => {
  // If there is a count then remove
  if (count > 0) {
    Product.remove({}, (error, writeOpResult) => console.log(error, writeOpResult));
  }

  getProducts().then(response =>
    Product.insertMany(response.result, (error, docs) => console.log(error, docs)));
});

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