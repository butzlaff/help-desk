import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id?: number;
      name: string;
      email: string;
      isAdmin: string;
      accessToken: string;
      avatar: string;
    };
  }
}
