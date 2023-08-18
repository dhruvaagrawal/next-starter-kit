import { withAuth } from "next-auth/middleware"

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    console.log("middleware auth token:", req.nextauth.token)
  },
  {
    callbacks: {
      authorized: ({ token }) => token?.role === "admin",
    },
    pages: {
      signIn: "/signin",
    },
  }
)

export const config = { matcher: ["/admin/:path*"] }
