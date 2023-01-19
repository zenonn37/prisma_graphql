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
      <>
      <Head>
        <title>Prisma</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
<div className="flex justify-center item h-screen">
    <div className="container mx-auto">

    
      {
        data?.posts.map(({id,title,content,published}:any) => (
          <div className='w-[500px] bg-cyan-100 mx-auto p-3'
           key={id}>
            <div className='flex justify-start items-center'>
            <div className='flex justify-center items-center text-white
            bg-sky-400 h-[40px] w-[40px] rounded-full mr-3'>
              LB
              </div>
            <div>
              <h2 className=''>{title}</h2>
              <p>{content}</p>
              </div>
              <div className='flex-1 text-right'>
                {published === "true" ? "Active" : "Unpublished"}
                <div>
                  20th
                </div>
              </div>
              </div>
          
           
              </div>
       
        ))
      }
      </div>
    


    
      
    </div>
    </>
  )
}

export default Home
