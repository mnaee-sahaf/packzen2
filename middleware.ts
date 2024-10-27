import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import type { NextRequest } from 'next/server';

/**
 * Authentication Middleware
 * 
 * Protects routes and handles authentication redirects
 * Must be placed in the root directory for Next.js to auto-load it
 */

// Define public routes that don't require authentication
const publicRoutes = [
  '/',
  '/about',
  '/products',
  '/sustainability',
  '/contact'
];

export default withAuth(
  function middleware(req: NextRequest) {
    const pathname = req.nextUrl.pathname;
    const isAuth = req.cookies.has('next-auth.session-token');
    const isAuthPage = pathname.startsWith('/auth/');
    const isApiAuthRoute = pathname.startsWith('/api/auth/');
    const isDashboard = pathname.startsWith('/dashboard');

    // Handle auth pages
    if (isAuthPage) {
      if (isAuth) {
        return NextResponse.redirect(new URL('/dashboard', req.url));
      }
      return null;
    }

    // Handle dashboard access
    if (isDashboard && !isAuth) {
      return NextResponse.redirect(new URL('/auth/signin', req.url));
    }

    return null;
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        if (req.nextUrl.pathname.startsWith('/dashboard')) {
          return !!token;
        }
        return true;
      },
    },
  }
);

// Update matcher to only include routes that need middleware processing
export const config = {
  matcher: ['/dashboard/:path*', '/auth/:path*']
};
