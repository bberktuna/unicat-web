import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloProvider,
} from "@apollo/client";

const link = createHttpLink({
  uri: "http://192.168.1.58:5000", // in production its gonna change
});

export const apolloClient = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});
