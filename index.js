const {ApolloServer, gql} = require('apollo-server');
const typeDefs = require('./schema');
const {Query} = require('./resovers/Query');
const {Category} = require('./resovers/Category');
const {Product} = require('./resovers/Product');
const {Mutation} = require('./resovers/Mutation');

const {categories, products, reviews} = require('./db');
// String, Int, Float, Boolean

const resolvers = {

}

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
    Category,
    Product,
  },
  context: {
    products,
    categories,
    reviews
  }
});


server.listen().then(({url}) => {
  console.log('Server is ready at ' + url)
})