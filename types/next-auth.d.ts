import 'next-auth';
import { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface User {
    id: string;
    email: string;
    name: string;
    role: string;
    preferences: {
      theme: string;
      notifications: boolean;
    };
    subscription: {
      plan: string;
      status: string;
    };
  }

  interface Session extends DefaultSession {
    user: User & DefaultSession['user'];
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    role?: string;
    preferences?: {
      theme: string;
      notifications: boolean;
    };
    subscription?: {
      plan: string;
      status: string;
    };
  }
}
