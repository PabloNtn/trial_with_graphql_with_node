const {GraphQLServer} = require('graphql-yoga');
const path = require('path')
const resolvers = require('./resolvers')
const mongoose= require('mongoose');

const {DB_DATABASE, DB_HOSTNAME, DB_PORT} = process.env



mongoose.connect(`mongodb://db:27017/noMoreBug`,{
    useNewUrlParser: true
})

const server = new GraphQLServer({
    typeDefs: path.resolve(__dirname, 'schema.graphql'),
    resolvers
});

server.start();