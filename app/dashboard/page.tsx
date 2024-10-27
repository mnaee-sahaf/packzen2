'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  console.log('[Dashboard] Status:', status);
  console.log('[Dashboard] Session:', session);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin');
    }
  }, [status, router]);

  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div>Loading...</div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">
        Welcome, {session.user?.name || 'User'}
      </h1>
      <div className="bg-white shadow rounded-lg p-6">
        <pre className="bg-gray-100 p-4 rounded">
          {JSON.stringify(session, null, 2)}
        </pre>
      </div>
    </div>
  );
}
