const {gql} = require('apollo-server');

const typeDefs = gql`
  type Query {
    products(filter: ProductsFilterInput): [Product!]!
    product(id: ID!): Product
    categories: [Category!]!
    category(id: ID!): Category
    helloStr: String
  }

  type Mutation {
    addCategory (input: AddCategoryInput!): Category!
    addProduct(input: AddProductInput!): Product!
    addReview(input: AddReviewInput!): Review!
    deleteCategory(id: ID!): Boolean!
    deleteProduct(id: ID!): Boolean!
    updateCategory(id: ID!, input: UpdateCategoryInput): Category!
    updateProduct(id: ID!, input: UpdateProductInput): Product!
    updateReview(id: ID!, input: UpdateReviewInput): Review!
  }

  type Product {
    id: ID!
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
    image: String!
    category: Category
    reviews: [Review]!
  }
  type Category {
    id: ID!
    name: String!
    products (filter: ProductsFilterInput): [Product!]!
  }
  type Review {
    id: ID!
    date: String!
    title: String!
    comment: String!
    rating: Int!
    prodId: ID!
  }

  input ProductsFilterInput {
    onSale: Boolean
    avgRating: Int
  }
  input AddCategoryInput {
    name: String!
  }
  input AddProductInput {
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
    image: String!
    categoryId: ID!
  }
  input AddReviewInput {
    date: String!
    title: String!
    comment: String!
    rating: Int!
    productId: ID!
  }

  input UpdateCategoryInput {
    name: String!
  }
  input UpdateProductInput {
    name: String
    description: String
    quantity: Int
    price: Float
    onSale: Boolean
    image: String
    categoryId: ID
  }
  input UpdateReviewInput {
    title: String
    comment: String
    rating: Int
  }
`;

module.exports = typeDefs;