import { Hero } from '@/components/sections/hero'
import { ProductCategories } from '@/components/sections/productCategories'
import { VideoSection } from '@/components/sections/videoSection'
import FAQ from '@/components/sections/faq'
import { LowerHero } from '@/components/sections/lowerHero'

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-1">
        <Hero />
        <ProductCategories />
        <VideoSection />
        <FAQ/>
        <LowerHero/>
      </main>
    </div>
  )
}
