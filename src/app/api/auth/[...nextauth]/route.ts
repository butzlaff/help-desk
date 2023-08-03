import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import NextAuth from 'next-auth';
import type { NextAuthOptions } from 'next-auth';

const URL = 'http://localhost:3000/api/login';

const secret = process.env.NEXTAUTH_SECRET as string;

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { type: 'email', placeholder: 'E-mail', label: 'E-mail' },
        password: {
          type: 'password',
          placeholder: 'Password',
          label: 'Password',
        },
      },
      async authorize(credentials, req) {
        const res = await fetch(URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
        });
        const user = await res.json();

        if (res.ok && user) {
          return user;
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signin',
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
