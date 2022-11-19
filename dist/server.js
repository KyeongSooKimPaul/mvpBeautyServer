"use strict";
exports.__esModule = true;
var graphql_yoga_1 = require("graphql-yoga");
var context_1 = require("./context");
var schema_1 = require("./schema");
var options = {
    // port: 80,
    port: 4001
};
var server = new graphql_yoga_1.GraphQLServer({
    schema: schema_1.schema,
    context: context_1.createContext
});
// const server = new GraphQLServer({
//   schema,
//   context: createContext,
//   middlewares: [permissions],
// })
server.start(options, function (options) {
    return console.log("\uD83D\uDE80 Server ready at: http://localhost:4000");
});
