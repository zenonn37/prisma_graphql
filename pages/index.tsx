import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { client } from "./api/client";
import { useQuery, gql } from '@apollo/client';
import { use } from 'react';

// client
//   .query({
//     query: gql`
//       query Posts {
//         posts {
//         id
//         title
//   }
//       }
//     `,
//   })
//   .then((result) => console.log(result));

const GET_POSTS = gql`
  query Posts {
  posts {
    id
    title
    content
    published
    authorId
  }
}
`


const Home: NextPage = () => {

  const {loading, error, data} = useQuery(GET_POSTS)

  return (
      <div>
      <Head>
        <title>Prisma</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {
        data.posts.map(({id,title}) => (
          <div key={id}>
              <h2>{title}</h2>
          </div>
        ))
      }

    


    
      
    </div>
  )
}

export default Home
