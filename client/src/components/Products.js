import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const Products = ({ data: { Products = [] } }) => Products.map(book => <h1 key={book.title}>{book.title}</h1>);

const allProductsQuery = gql`
  query {
    Products {
      title
      author
    }
  }
`;

export default graphql(allProductsQuery)(Products);