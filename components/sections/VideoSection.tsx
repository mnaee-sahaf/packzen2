'use client';

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Phone, ArrowRight } from 'lucide-react'

// Video section component
// Displays company video alongside call-to-action content
// Used on homepage to provide visual engagement and direct contact option
export function VideoSection() {
  // Log component mount
  console.log('[VideoSection] Component mounted')

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#F8FAFC]">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left column with text content */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-600">Get to know Packzen</h2>
            <p className="text-[#64748B]">
              Our mission is to help you build a powerful brand through custom packaging that makes sure your customers remember your business
            </p>
            <div className="mb-4">
              <Link href="/sustainability">
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
            <video
              controls
              width="600"
              height="400"
              className="rounded-lg object-cover"
              preload="none"
              poster="/video-thumbnail.jpg"
            >
              <source src="/path/to/your/video.mp4" type="video/mp4" />
              <track 
                kind="captions"
                src="/path/to/captions.vtt"
                srcLang="en"
                label="English"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  )
}
