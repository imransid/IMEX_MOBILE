import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://18.220.136.226:4001/graphql', // Replace with your endpoint
  cache: new InMemoryCache(),
});

export default client;
