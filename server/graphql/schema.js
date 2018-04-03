// The GraphQL schema in string literal form
export default `
  type Product {
    _id: String!
    name: String!
    style: String
    package: String
  }

  type Query {
    allProducts: [Product!]!
  }

  type Mutation {
    createProduct(name: String!): Product!
  }
`;
