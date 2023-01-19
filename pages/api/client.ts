import { ApolloClient, InMemoryCache} from '@apollo/client';



export const client = new ApolloClient({
    // uri: 'https://flyby-gateway.herokuapp.com/',
    uri:'http://localhost:3000/api/graphql',
    cache: new InMemoryCache(),
  });