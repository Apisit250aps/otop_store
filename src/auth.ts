import NextAuth from "next-auth"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import client from "./libs/database/mongod"
import Google from "next-auth/providers/google"

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: MongoDBAdapter(client),
  session: { strategy: "jwt" },
  providers: [Google],
  callbacks:{
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      // Add user ID to the session object
      if (token.id) {
        session.user.id = token.id as string;
      }
      return session;
    },
  }
})
