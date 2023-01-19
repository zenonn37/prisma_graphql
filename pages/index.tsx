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
    
   
  }
}
`


const Home: NextPage = () => {

  const {loading, error, data} = useQuery(GET_POSTS)

  if (loading) return <p>Loading...</p>;
  console.log(data);
  if (error) {
    console.log(error);
  
    
    
  }

  return (
      <div>
      <Head>
        <title>Prisma</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
<div className="flex justify-center item h-screen">
    <div className="container mx-auto">

    
      {
        data.posts.map(({id,title,content,published}:any) => (
          <div
           key={id}>
              <h2>{title}</h2>
              <p>
                {content}
              </p>
              <div>
                {published === "true" ? "Active" : "Unpublished"}
              </div>
          </div>
        ))
      }
      </div>
    


    
      
    </div>
    </div>
  )
}

export default Home
