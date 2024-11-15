import Link from 'next/link';

export default function Sitemap() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="container mx-auto p-4 flex-1">
        <h1 className="text-3xl font-bold">Sitemap</h1>
        <p>Sitemap here</p>
        <Link href="/" className="text-blue-600 hover:underline">Go back to Home</Link>
      </main>
    </div>
  );
}
