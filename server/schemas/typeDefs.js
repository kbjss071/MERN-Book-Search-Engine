const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Book  {
        _id: ID!
        authors: [String]
        description: String!
        bookId: String!
        image: String
        link: String
        title: String!
    }

    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
        savedBooks: [Book]
    }

    type Query {
        user: [User]
        book: [Book]
    }

    type Mutation {
        createUser(username: String!, email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;