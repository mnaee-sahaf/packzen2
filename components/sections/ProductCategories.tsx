'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { ChevronRight } from 'lucide-react'

// Product categories with corresponding images
const productCategories = [
  { name: 'Tuck Boxes', image: '/images/tuck.png' },
  { name: 'Rigid Boxes', image: '/images/rigid.jpg' },
  { name: 'Kraft Boxes', image: '/images/kraft.png' },
  { name: 'Gable Boxes', image: '/images/gable.png' },
  { name: 'Soap Boxes', image: '/images/soap.jpg' },
  { name: 'Candle Boxes', image: '/images/candle.jpg' },
];

/**
 * Product Categories Grid Component
 * 
 * Key React Patterns:
 * 
 * 1. List Rendering:
 *    - Maps over array to generate repeated elements
 *    - Uses unique 'key' prop for React reconciliation
 *    - Demonstrates array transformation pattern
 * 
 * 2. Grid Layout:
 *    - Responsive grid using Tailwind's grid-cols-*
 *    - Auto-adjusts columns based on screen size
 *    - Maintains consistent gap spacing
 * 
 * 3. Interactive UI:
 *    - Images are always visible
 *    - Opacity transitions for smooth effects
 * 
 * 4. Performance:
 *    - Image optimization with Next.js Image
 *    - Efficient DOM updates with keys
 */

export function ProductCategories() {
  // Development logging for component lifecycle
  console.log('[ProductCategories] Component mounted')
  
  return (
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
  )
}
