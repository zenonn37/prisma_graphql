import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {  ApolloProvider,gql } from '@apollo/client';
import { client } from "./api/client";


// client
//   .query({
//     query: gql`
//       query GetLocations {
//         locations {
//           id
//           name
//           description
//           photo
//         }
//       }
//     `,
//   })
//   .then((result) => console.log(result));


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
    <Component {...pageProps} />
    </ApolloProvider>
  )
  
 


}

export default MyApp
