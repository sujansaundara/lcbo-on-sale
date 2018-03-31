import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const Products = ({ data: { Products = [] } }) => Products.map(product => <h1 key={product.name}>{product.name}</h1>);

const allProductsQuery = gql`
  query {
    Products {
      name
      origin
    }
  }
`;

export default graphql(allProductsQuery)(Products);