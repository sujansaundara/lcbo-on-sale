import React from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

import Router from './components/Router';

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h2>My first Apollo app</h2>
    </div>
    <Router />
  </ApolloProvider>
);

render(
  <App />,
  document.getElementById('app')
);
