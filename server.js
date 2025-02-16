const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const app = express();
app.use(cors());
app.use(express.json());

const server = new ApolloServer({ typeDefs, resolvers, context: ({ req }) => {
    const token = req.headers.authorization || '';
    if (token) {
        try {
            const user = jwt.verify(token, process.env.JWT_SECRET);
            return { user };
        } catch (err) {
            console.error(err);
        }
    }
    return {};
}});

async function startServer() {
    await server.start();
    server.applyMiddleware({ app });
    
    mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('MongoDB Connected'))
        .catch(err => console.log(err));
    
    app.listen(5000, () => {
        console.log('Server running on http://localhost:5000');
    });
}

startServer();
