const { gql } = require ('apollo-server-express');


const typeDefs = gql`


  type Product {
    _id: ID
    name: String
    image: String
    department: [Department]
    category: [Category]
    color: String
    price: Float
    description: String
    quantity: Int
  }

  type Category {
    _id: ID
    name: String
  }

  type Department {
    _id: ID
    name: String
  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  type User {
    _id: ID
    email: String
    password: String
    orders: [Order]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    products: [Product]
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
  }

  type Mutation {
    addUser(
      email: String!
      password: String!
    ): Auth
    addOrder(products: [ID]!): Order
    updateUser(
      email: String
      password: String
    ): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;