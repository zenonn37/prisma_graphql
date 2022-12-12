import { PrismaClient } from "@prisma/client"


const prisma = new PrismaClient()


export const resolvers = {
    Query:{
        users:async () => {
            const users = await prisma.user.findMany()
            return users;
        },
        countPosts:async() => {
            const posts = await prisma.post.count()
            console.log(posts);

            
            
            return posts
        },
        posts:async () => {
            const posts = await prisma.post.findMany()
            return posts
        }
    }
}