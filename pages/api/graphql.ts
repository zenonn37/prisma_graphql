
import { ApolloServer } from "@apollo/server";
// import { ApolloServerPluginLandingPageDisabled } from '@apollo/server/plugin/disabled';
import { startServerAndCreateNextHandler } from "@as-integrations/next";

import { typeDefs } from "./types/types";
import { resolvers } from "./resolvers/resolvers";



const server = new ApolloServer({
  resolvers,
  typeDefs,
  csrfPrevention: true,
  cache: "bounded",
//   plugins: [ApolloServerPluginLandingPageDisabled()],
});
const handler = startServerAndCreateNextHandler(server);
export default handler;