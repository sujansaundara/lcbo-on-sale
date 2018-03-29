import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import cors from 'cors';

const PORT = 4000;
const GRAPHQL_ENDPOINT = '/graphql';
const GRAPHIQL_ENDPOINT = '/graphiql';

// Some fake data
const books = [
  {
    title: "Harry Potter and the Sorcerer's stone",
    author: 'J.K. Rowling',
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];

// The GraphQL schema in string form
const typeDefs = `
  type Query { books: [Book] }
  type Book { title: String, author: String }
`;

// The resolvers
const resolvers = {
  Query: { books: () => books },
};

// Put together a schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

// Initialize the app
const app = express();

app.use(cors('http://localhost:8080'));

// The GraphQL endpoint
app.use(GRAPHQL_ENDPOINT, bodyParser.json(), graphqlExpress({ schema }));

// GraphiQL, a visual editor for queries
app.use(GRAPHIQL_ENDPOINT, graphiqlExpress({ endpointURL: '/graphql' }));

// Start the server
app.listen(PORT, () => {
  console.log(`Go to http://localhost:${PORT}${GRAPHIQL_ENDPOINT} to run queries!`);
});