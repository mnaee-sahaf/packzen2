'use client';

import ProductSpecification from '@/components/sections/productSpecification';
import TawkToScript from '@/components/sections/tawkToScript';
import Image from 'next/image';



export default function KraftBoxes() {


  return (
    <div className="flex flex-col min-h-screen bg-white mt-20">
      <TawkToScript/>
      <main className="flex-1">
        <div className="container mx-auto p-6 flex flex-col lg:flex-row">
          {/* Left Section: Product Image and Carousel */}
          <div className="flex flex-col items-center lg:w-1/2">
            {/* Main Product Image */}
            <div className="relative w-full max-w-md h-96 rounded-lg overflow-hidden">
              <Image
                src="/Images/kraft-nobg.png"
                alt="Kraft Boxes"
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>

            {/* Features List */}
            {/* <div className="grid grid-cols-2 gap-4 mb-6 text-sm text-gray-600 rounded-lg shadow-md bg-gray-100 p-6 mt-10">
              <div>✔️ Starting from Just 100 Boxes</div>
              <div>✔️ Turnaround in 10-12 Days</div>
              <div>✔️ No Die and Plates charges</div>
              <div>✔️ Unmatched Printing Services</div>
              <div>✔️ Best Prices Guaranteed</div>
              <div>✔️ 100% Free Design Support</div>
              <div>✔️ All Materials and Styles</div>
              <div>✔️ 100% Free Shipping</div>
            </div> */}
          </div>

          {/* Right Section: Product Details and Form */}
          <div className="lg:w-1/2 lg:pl-8 mt-8 lg:mt-0">
            {/* Product Title */}
            <h1 className="text-3xl font-bold mb-2">Kraft Boxes</h1>
            <div className="flex items-center mb-4">
              {/* Star Rating */}
              <div className="text-red-500 text-lg flex space-x-1">
                ★★★★★
              </div>
              <a href="#" className="ml-2 text-blue-600 hover:underline">
                View All Reviews
              </a>
            </div>
            {/* Breadcrumb Navigation */}
            <div className="text-sm text-gray-500 mb-4">
              Home &gt; Industries &gt; Gift Boxes &gt; Kraft Boxes
            </div>
            {/* Description */}
            <p className="text-gray-700 mb-6">
              Get personalized Kraft Boxes to sell anything. Sturdy packaging materials with unmatched customization to make your boxes stand out. Get a free quote now!
            </p>

            {/* Quote Request Form */}
            <form className="bg-gray-100 p-6 rounded-lg shadow-md">
              <div className="grid grid-cols-2 gap-4">
                {/* Typeform Embed */}
                <div data-tf-live="01JCRMKFZR2RJ8R745S6JCC77M"></div>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                By submitting this form you agree to our{' '}
                <a href="#" className="underline">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="underline">
                  Privacy Policy
                </a>.
              </p>
            </form>
          </div>
        </div>
        <ProductSpecification />
      </main>
    </div>
  );
}
