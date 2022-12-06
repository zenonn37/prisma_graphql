import { PrismaClient } from "@prisma/client"


const prisma = new PrismaClient()


export const resolvers = {
    Query:{
        users:async () => {
            const users = await prisma.user.findMany()
            return users;
        }
    }
}