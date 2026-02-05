import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";


const handler = NextAuth({
  providers:[
    CredentialsProvider({
        name: "login with email",
        credentials: {
          username: { label: "Username", type: "text", placeholder: "pj" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials, req) {
          // Add logic here to look up the user from the credentials supplied
          const user = credentials?.username;
          const password = credentials?.password;
          const cred ={
            name : "punya",
            age : "20"
          }

          if(cred ){
            return cred
          }else{
            return null
          }
        }
      })
  ]
})

export { handler as GET, handler as POST }