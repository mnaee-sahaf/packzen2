import FAQ from '@/components/sections/faq'
import { LowerHero } from '@/components/sections/lowerHero'
import { Features } from '@/components/sections/features'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { ArrowRight, Link, Phone } from 'lucide-react';

const productCategories = [
  { name: 'Tuck Boxes', image: '/images/tuck.png' },
  { name: 'Rigid Boxes', image: '/images/rigid.jpg' },
  { name: 'Kraft Boxes', image: '/images/kraft.png' },
  { name: 'Gable Boxes', image: '/images/gable.png' },
  { name: 'Soap Boxes', image: '/images/soap.jpg' },
  { name: 'Candle Boxes', image: '/images/candle.jpg' },
];



export default function HomePage() {
  //has to work
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-1">
      <section className="w-full py-4 md:py-8 lg:py-16 xl:py-24 bg-[#F9FAFB] mt-16"> {/* Added margin-top to prevent header obstruction */}
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 text-left">
          {/* Content Column */}
          <div className="flex-1 space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-gray-800">
              Custom Packaging Solutions for Your Business
            </h1>
            <p className="text-[#64748B] md:text-xl">
              Elevate your brand with eco-friendly, customizable packaging. Fast, easy, and affordable.
            </p>
            {/* Lead Capture Form */}
            <div className="w-full max-w-md">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScZssQngbYTcIozlKWjiys3LymnlYKwMc_Mmcc_ANpr5A9gjA/viewform?usp=pp_url">
              <Button className="bg-blue-600 text-white hover:bg-blue-700 flex items-center justify-center w-full space-x-2 py-3 text-lg font-semibold transition">
                <span>Get A Quote</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
          </div>
          </div>
          {/* Image Container */}
          <div className="mt-4 lg:mt-0">
            <Image
              src="/images/homepage3_nobg.png"
              alt="Sustainable Packaging"
              width={400}
              height={250}
              className="rounded-lg object-cover"
              priority // Loads immediately as hero image
            />
          </div>
        </div>
      </div>
    </section>
        <Features/>
        <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-blue-600">Popular Products</h2>
        {/* 
          Responsive Grid Layout:
          - Mobile: 1 column
          - Tablet: 2 columns (sm:grid-cols-2)
          - Desktop: 3 columns (lg:grid-cols-3)
        */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {productCategories.map(({ name, image }) => {
            console.log(`[ProductCategories] Rendering category: ${name}`)
            
            const handleClick = () => {
              // Trigger haptic feedback
              if (navigator.vibrate) {
                navigator.vibrate(50); // Vibrate for 50 milliseconds
              }
            };

            return (
              <Link href={`/pages/products/${name.toLowerCase().replace(' ', '-')}`} key={name}>
                {/* 
                  Card Container:
                  - Maintains aspect ratio
                  - Handles overflow for animations
                */}
                <div className="relative overflow-hidden rounded-lg shadow-lg" onClick={handleClick}>
                  <Image
                    src={image} // Use custom image for each category
                    alt={name}
                    width={400}
                    height={300}
                    className="object-cover w-full h-48" // Ensure the image is always visible
                  />
                  {/* Overlay with reduced opacity effect */}
                  <div className="absolute inset-0 bg-[#ADD8E6] transition-opacity bg-opacity-10" /> {/* Reduced opacity from 40 to 20 */}
                  <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-center mb-4"> {/* Adjusted to position at the bottom */}
                    <h3 className="text-2xl font-bold text-white mb-2">{name}</h3> {/* Adjusted margin for better spacing */}
                    <div className="w-32 h-32">
                    </div>
                  </div>
                  {/* 
                    Call-to-action button:
                    - Positioned absolutely within card
                    - Includes icon for visual hierarchy
                  */}
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#F8FAFC]">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          
          {/* Left column with text content */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-600">Get to know Packeeze</h2>
            <p className="text-[#64748B]">
              Our mission is to put the ease in packaging and help you build a powerful brand through custom packaging that makes sure your customers remember your business.
            </p>
            <div className="mb-4">
              <Link href="https://calendly.com/meatdaraz/30min">
                <Button 
                  className="bg-blue-600 text-white hover:bg-blue-700 flex items-center space-x-2"
                >
                  <Phone className="h-4 w-4" />
                  <span>Book A Free Consultation</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          {/* Right column with video player */}
          <div className="mt-4 lg:mt-0 flex justify-center items-center">
              <div className="relative w-full h-0" style={{ paddingBottom: '56.25%' }}> {/* 16:9 Aspect Ratio */}
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg transition-transform transform hover:scale-105"
                    src="https://www.youtube.com/embed/uwpDcQEYEs0"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
              </div>
          </div>
        </div>
      </div>
    </section>
        <FAQ/>
        <LowerHero/>
      </main>
    </div>
  )
}
