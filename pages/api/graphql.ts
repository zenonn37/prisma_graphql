import { ApolloServer} from "apollo-server-micro";
import Cors from 'micro-cors';
import { typeDefs } from "./types/types";
import { resolvers } from "./resolvers/resolvers";


const cors = Cors()


export const config = {
    api:{
      bodyParser: false
    }
  }
  
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers
  })
  
  const startServer = apolloServer.start()
  
  
  export default cors(async function handler(req,res) {
      if (req.method === 'OPTIONS') {
          res.end();
          return false;
      }
      await startServer;
  
      await apolloServer.createHandler({
          path:'/api/graphql'
      })(req,res)
      
  });