import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const Products = ({
  data: { allProducts = [] }
}) => allProducts.map(product => (
  <div key={product.name}> 
    <h3>{product.name}</h3>
    <p>
      <b>Name: </b>{product.name}
    </p>
    <p>
      <b>Style: </b>{product.style}
    </p>
    <p>
      <b>package: </b>{product.package}
    </p>
  </div>
));

const allProductsQuery = gql`
  query {
    allProducts {
      name
      style
      package
    }
  }
`;

export default graphql(allProductsQuery)(Products);