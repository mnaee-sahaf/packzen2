import Link from 'next/link';

export default function About() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">About Us</h1>
      <p>Learn more about our company and values.</p>
      <Link href="/">Go back to Home</Link>
    </div>
  );
}
