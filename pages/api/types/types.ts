import { gql } from "apollo-server-micro";
import GraphQLJSON, { GraphQLJSONObject } from 'graphql-type-json';

export const typeDefs = gql`
 scalar JSON
 scalar JSONObject

type user{
    id:Int!
    name:String!
    email:String
    createdat:String
    updatedat:String
  
}

type post{
    id:Int!
    title:String!
    content:String!
    published:String!
    author: user
    authorId: Int
}

type Query{
    users:[user]
    posts:[post]
    countPosts:JSONObject
}
`