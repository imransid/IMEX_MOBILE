import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://18.220.136.226:4001/graphql', // Replace with your GraphQL server URL
    // You can add additional options here if needed
  }),
  cache: new InMemoryCache(),
});

export default client;
