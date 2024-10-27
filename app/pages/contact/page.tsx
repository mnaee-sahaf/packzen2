import Link from 'next/link';

export default function Contact() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <p>Get in touch with us!</p>
      <Link href="/">Go back to Home</Link>
    </div>
  );
}

