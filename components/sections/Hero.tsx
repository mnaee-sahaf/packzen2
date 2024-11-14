'use client';

import Image from 'next/image'
import { Button } from "@/components/ui/button"

/**
 * Hero Section Component
 * 
 * Performance Optimizations:
 * 1. Image Loading:
 *    - Next.js Image component automatically:
 *      • Generates multiple sizes for different devices
 *      • Converts to modern formats (WebP/AVIF)
 *      • Lazy loads below the fold
 *      • Uses priority for LCP (Largest Contentful Paint)
 * 
 * 2. Component Optimization:
 *    - Static content reduces JavaScript
 *    - Minimal state management
 *    - CSS-based animations for better performance
 * 
 * Best Practices:
 * 1. Responsive Design:
 *    - Mobile-first approach
 *    - Breakpoint consistency
 *    - Fluid typography
 * 
 * 2. Accessibility:
 *    - Semantic HTML structure
 *    - ARIA labels on interactive elements
 *    - Sufficient color contrast
 * 
 * 3. Form Handling:
 *    - Proper input types
 *    - Clear error states
 *    - Validation feedback
 */

export function Hero() {
  // Log mount for development debugging
  console.log('[Hero] Component mounted')

  return (
    <section className="w-full py-4 md:py-8 lg:py-16 xl:py-24 bg-[#F9FAFB]">
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
            <div className="w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                {/* <Input 
                  className="max-w-lg flex-1 bg-white text-[#0F172A]" 
                  placeholder="Enter your email" 
                  type="email"
                  aria-label="Email address"
                /> */}
                <Button 
                  type="button"
                  className="bg-blue-600 text-white hover:bg-blue-700"
                  onClick={() => {
                    console.log('[Hero] Form submitted');
                    window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLScZssQngbYTcIozlKWjiys3LymnlYKwMc_Mmcc_ANpr5A9gjA/viewform?usp=pp_url';
                  }}
                >
                  Get a Quote
                </Button>
              </form>
            </div>
          </div>
          {/* Image Container */}
          <div className="mt-4 lg:mt-0">
            <Image
              src="/nbg.png"
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
  )
}
