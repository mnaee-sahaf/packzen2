'use client';

import React from 'react';

export default function OrderForm() {
  return (
    <div className="container mx-auto p-6 flex flex-col lg:flex-row">
      {/* Left Section: Product Image and Carousel */}
      <div className="flex flex-col items-center lg:w-1/2">
        {/* Main Product Image */}
        <div className="relative w-full max-w-md h-96 bg-gray-100 rounded-lg overflow-hidden">
          <img src="/images/soap.jpg" alt="Product Image" className="object-contain w-full h-full" />
          {/* Carousel Controls */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            <button className="w-8 h-8 bg-orange-200 rounded-full flex items-center justify-center">‹</button>
            <button className="w-8 h-8 bg-orange-200 rounded-full flex items-center justify-center">›</button>
          </div>
        </div>
        {/* Thumbnail Images */}
        <div className="flex mt-4 space-x-2">
          <img src="/images/soap.jpg" alt="Custom Soap Box" className="w-16 h-16 rounded-lg cursor-pointer" />
          <img src="/images/soap2.jpg" alt="Custom Soap Box 2" className="w-16 h-16 rounded-lg cursor-pointer" />
          <img src="/images/thumbnail3.jpg" alt="Custom Soap Box 3" className="w-16 h-16 rounded-lg cursor-pointer" />
        </div>
           {/* Features List */}
           <div className="grid grid-cols-2 gap-4 mb-6 text-sm text-gray-600 rounded-lg shadow-md pd-10 mg-10 bg-gray-100 ">
          <div>✔️ Low Minimums of 100 Boxes</div>
          <div>✔️ Fast Turnaround Times</div>
          <div>✔️ Free Die and Plates</div>
          <div>✔️ High Quality Offset Printing</div>
          <div>✔️ Competitive Pricing</div>
          <div>✔️ Free Design Support</div>
          <div>✔️ Customized Sizes & Styles</div>
          <div>✔️ Free Shipping</div>
        </div>
      </div>

      {/* Right Section: Product Details and Form */}
      <div className="lg:w-1/2 lg:pl-8 mt-8 lg:mt-0">
        {/* Product Title */}
        <h1 className="text-3xl font-bold mb-2">Custom Soap Boxes</h1>
        <div className="flex items-center mb-4">
          {/* Star Rating */}
          <div className="text-red-500 text-lg flex space-x-1">
            ★★★★★
          </div>
          <a href="#" className="ml-2 text-blue-600 hover:underline">View All Reviews</a>
        </div>
        {/* Breadcrumb Navigation */}
        <div className="text-sm text-gray-500 mb-4">
          Home &gt; Industries &gt; Gift Boxes &gt; Custom Soap Boxes</div>
        {/* Description */}
        <p className="text-gray-700 mb-6">
          Transform your brand with custom cardboard boxes and packaging. Our lightweight, quality, highly customizable boxes are designed to stand out and make an impact.
        </p>
        {/* Quote Request Form */}
        <form className="bg-gray-100 p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="First Name" className="border p-2 rounded" required />
            <input type="text" placeholder="Last Name" className="border p-2 rounded" required />
            <input type="email" placeholder="Email" className="border p-2 rounded" required />
            <input type="tel" placeholder="Phone" className="border p-2 rounded" />
            <select className="border p-2 rounded" required>
              <option>Quantity Range</option>
              <option>100-500</option>
              <option>500-1000</option>
              <option>1000+</option>
            </select>
            <input type="text" placeholder="Product Type" className="border p-2 rounded" required />
          </div>
          <textarea
            placeholder="Tell us about your project! Box dimensions, industry, design, etc. – we can help."
            className="border p-2 rounded w-full mt-4"
            rows={4}
            required
          ></textarea>
          <button type="submit" className="bg-blue-600 text-white w-full py-2 rounded mt-4 hover:bg-blue-700">
            Get Free Quote
          </button>
          <p className="text-xs text-gray-500 mt-2">
            By submitting this form you agree to our <a href="#" className="underline">Terms of Service</a> and <a href="#" className="underline">Privacy Policy</a>.
          </p>
        </form>
      </div>
    </div>
  );
}
