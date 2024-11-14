import { VideoSection } from '@/components/sections/videoSection';
import Link from 'next/link';

export default function About() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">About Us</h1>
      <p className="mt-4">
        Welcome to our packaging business, where we specialize in providing high-quality, custom packaging solutions tailored to meet the unique needs of our clients. 
      </p>
      <p className="mt-2">
        Our mission is to deliver innovative packaging designs that not only protect your products but also enhance your brand's visibility and appeal. With a commitment to sustainability, we use eco-friendly materials and practices to ensure that our packaging solutions are both effective and environmentally responsible.
      </p>
      <p className="mt-2">
        At our core, we believe in building strong relationships with our clients. Our dedicated team works closely with you to understand your requirements and provide personalized service from concept to delivery. 
      </p>
      <p className="mt-2">
        Thank you for considering us for your packaging needs. We look forward to partnering with you to create packaging that stands out and makes a lasting impression.
      </p>
      <Link href="/" className="text-blue-600 hover:underline mt-4 block">Go back to Home</Link>
      {/* Including the VideoSection for additional engagement */}
      <VideoSection />
    </div>
  );
}
