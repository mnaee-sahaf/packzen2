'use client';

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Phone, ArrowRight } from 'lucide-react'
import Image from 'next/image' // Importing the Image component from Next.js

// Video section component
// Displays company video alongside call-to-action content
// Used on homepage to provide visual engagement and direct contact option
export function Sample() {
  // Log component mount
  console.log('[SampleSection] Component mounted')

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#F8FAFC]">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left column with text content */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-600">Looking to try a sample first?</h2>
            <p className="text-[#64748B]">
            Get your hands on a selection of our most popular boxes and packaging with a reimbursable sample kit.</p>
            <div className="mb-4">
              <Link href="/order-sample">
                <Button 
                  className="bg-blue-600 text-white hover:bg-blue-700 flex items-center space-x-2"
                  onClick={() => console.log('[VideoSection] CTA button clicked')}
                >
                  <Phone className="h-4 w-4" />
                  <span>Request a callback</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          {/* Right column with video player */}
          <div className="mt-4 lg:mt-0">
            <Image 
              src="/path/to/your/image.jpg" // Specify the image source
              alt="Description of the image" // Provide an alt text for accessibility
              width={500} // Set the desired width
              height={300} // Set the desired height
            />
          </div>
        </div>
      </div>
    </section>
  )
}
