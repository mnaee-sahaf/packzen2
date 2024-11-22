import FAQ from '@/components/sections/faq'
import { LowerHero } from '@/components/sections/lowerHero'
import { Features } from '@/components/sections/features'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { ArrowRight, Link as Phone, X } from 'lucide-react' // Rename Link from lucide-react
import Link from 'next/link' // Import Next.js Link
import FloatingCallButton from '@/components/sections/floatingCallButton'
import Script from 'next/script'

const productCategories = [
  { name: 'Tuck Boxes', image: '/Images/tuck.png' },
  { name: 'Rigid Boxes', image: '/Images/rigid.jpg' },
  { name: 'Kraft Boxes', image: '/Images/kraft.png' },
  { name: 'Gable Boxes', image: '/Images/gable.png' },
  { name: 'Soap Boxes', image: '/Images/soap.jpg' },
  { name: 'Candle Boxes', image: '/Images/candle.jpg' },
];

export default function HomePage() {
  return (

    <>
     <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WCGL4342');`,
        }}
      />
    <div className="flex flex-col min-h-screen g-white">
      <FloatingCallButton/>   
      <main className="flex-1">
        <section className="w-full py-4 md:py-8 lg:py-16 xl:py-24 bg-[#F9FAFB] mt-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 text-left">
              <div className="flex-1 space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-gray-800">
                Your Brand Deserves the Best Custom Packaging!
                </h1>
                <p className="text-[#64748B] md:text-xl">
                Get quality packaging that sets your brand apart. Easy, fast, and reliable packaging. 
                </p>
                <div className="w-full max-w-md">
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLScZssQngbYTcIozlKWjiys3LymnlYKwMc_Mmcc_ANpr5A9gjA/viewform?usp=pp_url">
                    <Button className="bg-blue-600 text-white hover:bg-blue-700 flex items-center justify-center w-full space-x-2 py-3 text-lg font-semibold transition">
                      <span>Get A Quote</span>
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </a>
                </div>
              </div>
              <div className="mt-4 lg:mt-0">
                <Image
                  src="/Images/homepage3_nobg.png"
                  alt="Sustainable Packaging"
                  width={400}
                  height={250}
                  className="rounded-lg object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
        <Features/>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12"><Link href='/pages/products'>Popular Products</Link></h2>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {productCategories.map(({ name, image }) => (
                <Link href={`/pages/products/${name.toLowerCase().replace(' ', '-')}`} key={name}>
                  <div className="relative overflow-hidden rounded-lg shadow-lg">
                    <Image
                      src={image}
                      alt={name}
                      width={400}
                      height={300}
                      className="object-cover w-full h-48"
                    />
                    <div className="absolute inset-0 bg-[#ADD8E6] transition-opacity bg-opacity-10" />
                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-center mb-4">
                      <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#F8FAFC]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-600">Get to know Packeeze</h2>
                <p className="text-[#64748B]">
                  Our mission is to put the ease in packaging and help you build a powerful brand through custom packaging that makes sure your customers remember your business.
                </p>
                <div className="mb-4">
                  <Link href="https://calendly.com/meatdaraz/30min">
                    <Button className="bg-blue-600 text-white hover:bg-blue-700 flex items-center space-x-2">
                      <Phone className="h-4 w-4"/>
                      <span>Book A Free Consultation</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="mt-4 lg:mt-0 flex justify-center items-center">
                <div className="relative w-full h-0" style={{ paddingBottom: '56.25%' }}>
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

    </>
  )
}

