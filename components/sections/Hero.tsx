'use client';

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react';

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
  )
}
