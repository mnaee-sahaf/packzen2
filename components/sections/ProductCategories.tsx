import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { ChevronRight } from 'lucide-react'

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
 *    - Hover effects using group-hover:
 *    - Image scale animation on hover
 *    - Opacity transitions for smooth effects
 * 
 * 4. Performance:
 *    - Image optimization with Next.js Image
 *    - Conditional rendering for hover states
 *    - Efficient DOM updates with keys
 */


export function ProductCategories() {
  // Development logging for component lifecycle
  console.log('[ProductCategories] Component mounted')
  
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-blue-600">Our Product Categories</h2>
        {/* 
          Responsive Grid Layout:
          - Mobile: 1 column
          - Tablet: 2 columns (sm:grid-cols-2)
          - Desktop: 3 columns (lg:grid-cols-3)
        */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {['Boxes', 'Mailers', 'Bags', 'Food Packaging', 'Retail Packaging', 'Accessories'].map((category) => {
            console.log(`[ProductCategories] Rendering category: ${category}`)
            
            return (
              <Link href={`/products#${category.toLowerCase().replace(' ', '-')}`} key={category}>
                {/* 
                  Card Container:
                  - Uses group for hover targeting
                  - Maintains aspect ratio
                  - Handles overflow for animations
                */}
                <div className="group relative overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={`/placeholder.svg?height=300&width=400`}
                    alt={category}
                    width={400}
                    height={300}
                    className="object-cover w-full h-48 transition-transform group-hover:scale-105"
                  />
                  {/* Overlay with hover effect */}
                  <div className="absolute inset-0 bg-[#ADD8E6] transition-opacity group-hover:bg-opacity-40" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h3 className="text-2xl font-bold text-white mb-4">{category}</h3>
                    <div className="w-32 h-32">
                    </div>
                  </div>
                  {/* 
                    Call-to-action button:
                    - Appears on hover using opacity
                    - Positioned absolutely within card
                    - Includes icon for visual hierarchy
                  */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button variant="secondary" size="sm" className="bg-blue-600 text-white hover:bg-blue-700">
                      Explore <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
