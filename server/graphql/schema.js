// The GraphQL schema in string literal form
export default `
  type Product {
    _id: String!
    name: String!
    origin: String!
  }

  type Query {
    allProducts: [Product!]!
  }

  type Mutation {
    createProduct(name: String!): Product!
  }
`;
