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
      <h2>LCBO On Sale </h2>
      <h3>Products with Value Added Promotion</h3>
    </div>
    <Router />
  </ApolloProvider>
);

render(
  <App />,
  document.getElementById('app')
);
