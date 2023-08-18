import { NextAuthOptions, getServerSession } from "next-auth"

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
    // NextAuth sets a default `maxAge` of 30 days (which is 60 * 60 * 24 * 30), but that is a very large
    // value, and hence, for now, setting the `maxAge` to 60 minutes (i.e. 60 * 60).
    maxAge: 60 * 60,
  },
  providers: [],
  callbacks: {},
}

export const getAuthSession = () => getServerSession(authOptions)
