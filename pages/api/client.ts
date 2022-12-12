import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';



export const client = new ApolloClient({
    // uri: 'https://flyby-gateway.herokuapp.com/',
    uri:'http://localhost:3004/api/graphql',
    cache: new InMemoryCache(),
  });