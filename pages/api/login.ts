import NextAuth from 'next-auth';
import Providers from 'next-auth/providers/credentials';
import { PrismaClient } from '@prisma/client';
import { PrismaAdapter } from '@next-auth/prisma-adapter';


const prisma = new PrismaClient();

export default NextAuth({
  providers: [
    Providers({
      name: 'Credentials',
      credentials: {
        username: {label: "name", type: "name"},
        userrole: {label: "role", type: "role"}
      },
      async authorize(credentials)  {
        const user = await prisma.user.findUnique({
          where: { name: credentials?.username },
        });

        if (!user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  adapter: PrismaAdapter(prisma),
  secret: process.env.SECRET,
  session: {
    strategy: 'jwt'
  },
  callbacks: {
    async jwt({token, user}) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({session, token}) {
      session.user = token;
      return session;
    },
  },
  
});
