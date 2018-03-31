// The resolvers are going to call a mongo database
export default {
  Query: {
    allProducts: async (parent, args, { Product }) => {
      const products = await Product.find();

      return products.map(product => {
        product._id = product._id.toString();
        return product;
      })
    }
  },
  Mutation: {
    createProduct: async (parent, args, { Product }) => {
      // Product model is available from context object set from graphqlExpress
      const product = await new Product(args).save();

      product._id = product._id.toString();
      return product;
    }
  }
}
