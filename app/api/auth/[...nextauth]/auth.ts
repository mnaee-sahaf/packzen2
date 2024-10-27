import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import type { User } from 'next-auth';

// Add this at the top of the file
declare module "next-auth" {
  interface User {
    id: string
    email: string
    name: string
    role: string
    // Removed the optional modifiers for preferences and subscription to fix the linting error
    preferences: Record<string, unknown>  // Corrected to use a specific type for preferences
    subscription: Record<string, unknown> // Corrected to use a specific type for subscription
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials): Promise<User | null> {
        console.log('[Auth] Authorizing:', credentials?.email);
        
        // Test user credentials
        if (credentials?.email === "test@example.com" && credentials?.password === "password") {
          console.log('[Auth] Test user authorized');
          return {
            id: "1",
            email: "test@example.com",
            name: "Test User",
            role: "user",
            preferences: {}, // Added empty preferences object to match the User type
            subscription: {}, // Added empty subscription object to match the User type
          };
        }
        return null;
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      console.log('[Auth] JWT Callback:', { token, user });
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      console.log('[Auth] Session Callback:', { session, token });
      if (session.user) {
        session.user.id = token.id as string;
        session.user.email = token.email as string;
        session.user.name = token.name as string;
        session.user.role = token.role as string;
      }
      return session;
    }
  },
  pages: {
    signIn: '/auth/signin',
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  cookies: {
    sessionToken: {
      name: `__Secure-next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: process.env.NODE_ENV === 'production',
        maxAge: 24 * 60 * 60 // 24 hours
      }
    }
  },
  debug: process.env.NODE_ENV === 'development',
};
