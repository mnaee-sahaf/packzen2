import { ReactNode } from 'react'
import { Package } from 'lucide-react'
import { Hero } from '@/components/sections/Hero'
import { ProductCategories } from '@/components/sections/ProductCategories'
import { VideoSection } from '@/components/sections/VideoSection'
import { Testimonials } from '@/components/sections/Testimonials'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-1">
        <Hero />
        <ProductCategories />
        <VideoSection />
        <Testimonials />
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#F9FAFB] text-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to elevate your packaging?</h2>
                <p className="max-w-[600px] text-[#64748B] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of businesses that trust Packzen for their custom branded packaging needs.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                  <Input className="max-w-lg flex-1 bg-white text-[#0F172A]" placeholder="Enter your email" type="email" />
                  <Button type="submit" className="bg-blue-600 text-white hover:bg-blue-700">Get Started</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
