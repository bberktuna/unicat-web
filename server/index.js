const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");

const { MONGODB } = require("./config");
const resolvers = require("./graphql/resolvers");
const typeDefs = require("./graphql/typeDefs");

// ! means required

const server = new ApolloServer({ typeDefs, resolvers });

mongoose
  .connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MONGODB CONNECTED");
    return server.listen({ port: 5000 });
  })
  .then((res) => {
    console.log(`SERVER RUNNING AT ${res.url}`);
  });
