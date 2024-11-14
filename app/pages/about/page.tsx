import { VideoSection } from '@/components/sections/videoSection';
import Link from 'next/link';

export default function About() {
  return (
    <div className="container mx-auto p-6 bg-gray-50 rounded-lg shadow-md mt-16"> {/* Added margin-top to prevent being cut by the header */}
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">About Us</h1>
      <div className="space-y-4">
        <p className="text-lg">
          Welcome to our packaging business, where we specialize in providing high-quality, custom packaging solutions tailored to meet the unique needs of our clients. 
        </p>
        <p className="text-lg">
          Our mission is to deliver innovative packaging designs that not only protect your products but also enhance your brand's visibility and appeal. With a commitment to sustainability, we use eco-friendly materials and practices to ensure that our packaging solutions are both effective and environmentally responsible.
        </p>
        <p className="text-lg">
          At our core, we believe in building strong relationships with our clients. Our dedicated team works closely with you to understand your requirements and provide personalized service from concept to delivery. 
        </p>
        <p className="text-lg">
          Thank you for considering us for your packaging needs. We look forward to partnering with you to create packaging that stands out and makes a lasting impression.
        </p>
      </div>
      <Link href="/" className="text-blue-600 hover:underline mt-6 block text-center">Go back to Home</Link>
      {/* Including the VideoSection for additional engagement */}
      <VideoSection />
    </div>
  );
}
