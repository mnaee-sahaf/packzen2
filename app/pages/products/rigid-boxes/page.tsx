'use client';

import ProductSpecification from '@/components/sections/productSpecification';
import TawkToScript from '@/components/sections/tawkToScript';
import Image from 'next/image';


export default function RigidBoxes() {

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
            src="/Images/rigid-nobg.png"
            alt="Rigid Boxes"
            layout="fill"
            objectFit="contain"
            className="rounded-lg"
          />
        </div>
       
        {/* Features List */}
        <div className="grid grid-cols-2 gap-4 mb-6 text-sm text-gray-600 rounded-lg shadow-md bg-gray-100 p-6 mt-10">
          <div>✔️ Starting from Just 100 Boxes</div>
          <div>✔️ Turnaround in 10-12 Days</div>
          <div>✔️ No Die and Plates charges</div>
          <div>✔️ Unmatched Printing Services</div>
          <div>✔️ Best Prices Guaranteed</div>
          <div>✔️ 100% Free Design Support</div>
          <div>✔️ All Materials and Styles</div>
          <div>✔️ 100% Free Shipping</div>
        </div>
      </div>

      {/* Right Section: Product Details and Form */}
      <div className="lg:w-1/2 lg:pl-8 mt-8 lg:mt-0">
        {/* Product Title */}
        <h1 className="text-3xl font-bold mb-2">Rigid Boxes</h1>
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
          Home &gt; Industries &gt; Gift Boxes &gt; Rigid Boxes
        </div>
        {/* Description */}
        <p className="text-gray-700 mb-6">
        Get personalized Custom Rigid Boxes to sell anything. Sturdy packaging materials with unmatched customization to make your boxes stand out. Get a free quote now!
        </p>
        {/* Quote Request Form */}
        <form className="bg-gray-100 p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="border p-2 rounded"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border p-2 rounded"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="border p-2 rounded"
              required
            />
            <input
              type="tel"
              placeholder="Phone"
              className="border p-2 rounded"
            />
            <select className="border p-2 rounded" required>
              <option>Quantity Range</option>
              <option>100-500</option>
              <option>500-1000</option>
              <option>1000+</option>
            </select>
            <input
              type="text"
              placeholder="Product Type"
              className="border p-2 rounded"
              required
            />
          </div>
          <textarea
            placeholder="Tell us about your project! Box dimensions, industry, design, etc. – we can help."
            className="border p-2 rounded w-full mt-4"
            rows={4}
            required
          ></textarea>
          <button
            type="submit"
            className="bg-black text-white w-full py-2 rounded mt-4 hover:bg-blue-700"
          >
            Get Free Quote
          </button>
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
      <ProductSpecification/>
      </main>
    </div>
  );
}
