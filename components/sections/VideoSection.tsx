'use client';

import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from 'lucide-react';

// Video section component
// Displays company video alongside call-to-action content
// Used on homepage to provide visual engagement and direct contact option
export function VideoSection() {
  return (
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
              <Link href="https://calendly.com/meatdaraz/30min" passHref>
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
  );
}
