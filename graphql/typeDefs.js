const { gql } = require('apollo-server-express');

module.exports = gql`
    type User {
        id: ID!
        username: String!
        email: String!
        token: String
    }

    type Query {
        getUsers: [User]
    }

    type Mutation {
        register(username: String!, email: String!, password: String!): User
        login(email: String!, password: String!): User
    }
`;
