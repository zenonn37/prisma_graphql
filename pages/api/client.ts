import { ApolloClient, InMemoryCache} from '@apollo/client';
import { resolvers } from 'graphql-scalars';



export const client = new ApolloClient({
    // uri: 'https://flyby-gateway.herokuapp.com/',
    uri:'http://localhost:3001/api/graphql',
    cache: new InMemoryCache(),
    resolvers: resolvers as any
  });

  