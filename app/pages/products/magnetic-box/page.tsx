'use client';

import FeaturesSection from '@/components/sections/featuresSection';
import { useState, useMemo } from "react";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { productSizes, quantityOptions, calculatePrice } from "@/lib/product-data";
import { ProductSize, QuantityOption } from "@/lib/types";
import FloatingCallButton from '@/components/sections/floatingCallButton';
import FAQ from '@/components/sections/faq';
import Image from 'next/image'; // Import Image from next/image
import { Features } from '@/components/sections/features';
import ProductSpecification from '@/components/sections/productSpecification';

 
const productImages = [
  "/Images/choco-nobg.png",
  "/Images/choco1.png",
  "/Images/choco2.png",
  "/Images/choco3.png",
];


export default function CustomPouchBags() {
  type Tab = 'details' | 'specification' | 'artwork' | 'order' | 'sizing' | 'material' | 'print';

  const [activeTab, setActiveTab] = useState<Tab>('details');
    const handleTabClick = (tab: Tab) => {
      setActiveTab(tab);
    };
  
    const [activeIndex, setActiveIndex] = useState(0);
    const handleNext = () => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % productImages.length);
    };
    
    const handlePrevious = () => {
      setActiveIndex((prevIndex) =>
        (prevIndex - 1 + productImages.length) % productImages.length
      );
    };

  const [selectedQuantity, setSelectedQuantity] = useState<QuantityOption>(quantityOptions[0]);
  const [selectedSize, setSelectedSize] = useState<ProductSize>(productSizes[0]);

  const price = useMemo(() => {
    const calculated = calculatePrice(selectedSize, selectedQuantity);
    return calculated || { total: 0, perBox: 0 }; // Fallback for unexpected results
  }, [selectedSize, selectedQuantity]);

  if (!productSizes.length || !quantityOptions.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-white mt-20">
        <title>Packeeze - Cusotm Packaging Simplified</title>     
        <FloatingCallButton/>
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li>Home</li>
            <li>•</li>
            <li className="font-medium text-gray-900">Magnetic Boxes</li>
          </ol>
        </nav>

        {/* Product Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8 mb-16">
          {/* Left Column - Product Images */}
          <div className="w-full">
            <div className="sticky top-8">
            <div className="w-full space-y-4">


            <div className="relative aspect-square bg-white rounded-lg overflow-hidden">
  {/* Carousel Content */}
  <div className="w-full h-full relative">
    {productImages.map((image, index) => (
      <div
        key={index}
        className={`absolute inset-0 transition-opacity duration-300 ${
          activeIndex === index ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image
                            src={image}
                            alt={`Product image ${index + 1}`}
                            className="w-full h-full object-contain"
                            layout="responsive"
                            width={500}
                            height={500}
                          />
      </div>
    ))}
  </div>

  {/* Navigation Buttons */}
  <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4">
    <button
      onClick={handlePrevious}
      className="p-2 bg-white/90 rounded-full shadow hover:bg-gray-100"
    >
      &lt; {/* You can use an icon here */}
    </button>
    <button
      onClick={handleNext}
      className="p-2 bg-white/90 rounded-full shadow hover:bg-gray-100"
    >
      &gt; {/* You can use an icon here */}
    </button>
  </div>

  {/* Thumbnails */}
  <div className="grid grid-cols-4 xs:grid-cols-2 sm:grid-cols-4 gap-2 mt-4">
    {productImages.map((image, index) => (
      <button
        key={index}
        onClick={() => setActiveIndex(index)}
        className={`aspect-square rounded-md overflow-hidden border-2 transition-colors bg-white ${
          activeIndex === index
            ? "border-black"
            : "border-gray-200 hover:border-gray-400"
        }`}
      >
         <Image
                            src={image}
                            alt={`Thumbnail ${index + 1}`}
                            className="w-full h-full object-contain"
                            layout="intrinsic"
                            width={100}
                            height={100}
                          />
      </button>
    ))}
  </div>
</div>

</div>

            </div>
          </div>

          {/* Right Column - Product Details */}
          <div className="flex flex-col">
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Magnetic Boxes
                </h1>

                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={`star-${i}`}
                        className="w-5 h-5 fill-current text-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="text-gray-600">142 Reviews</span>
                </div>
              </div>

              {/* Price Section */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
               <Features/>
              </div>

              {/* Features */}
              {/* <ProductFeatures /> */}

              {/* Product Form */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        className="text-sm font-medium text-gray-700"
                        htmlFor="quantity"
                      >
                        Quantity
                      </label>
                      <Select
                        value={selectedQuantity.value}
                        onValueChange={(value) => {
                          const quantity = quantityOptions.find(
                            (q) => q.value === value
                          );
                          if (quantity) setSelectedQuantity(quantity);
                        }}
                      >
                        <SelectTrigger id="quantity" aria-label="Quantity">
                          <SelectValue placeholder="Select quantity" />
                        </SelectTrigger>
                        <SelectContent>
                          {quantityOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700" htmlFor="size">
                        Size
                      </label>
                      <Select
                        value={selectedSize.name}
                        onValueChange={(value) => {
                          const size = productSizes.find((s) => s.name === value);
                          if (size) setSelectedSize(size);
                        }}
                      >
                        <SelectTrigger id="size" aria-label="Size">
                          <SelectValue placeholder="Select size" />
                        </SelectTrigger>
                        <SelectContent>
                          {productSizes.map((size ) => (
                            <SelectItem key={size.name} value={size.name}>
                              {size.name} ({size.dimensions})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="w-full max-w-md">
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLScZssQngbYTcIozlKWjiys3LymnlYKwMc_Mmcc_ANpr5A9gjA/viewform?usp=pp_url">
                    <Button className="bg-blue-600 text-white hover:bg-blue-700 flex items-center justify-center w-full space-x-2 py-3 text-lg font-semibold transition">
                      <span>Get A Custom Quote</span>
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </a>
                </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Product Title */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
          Magnetic Boxes: Elegant, reusable boxes with magnetic closures for a premium unboxing experience
          </h2>
        </div>
      </main>
    </div>
    <FeaturesSection/>
    <div className="p-6 font-sans overflow-hidden">
      {/* Tab Navigation */}
      <div className="flex space-x-4 border-b border-gray-200 mb-6 overflow-x-auto">
        <button
          className={`py-2 px-4 font-medium ${activeTab === 'details' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'}`}
          onClick={() => handleTabClick('details')}
        >
          Details
        </button>
        <button
          className={`py-2 px-4 font-medium ${activeTab === 'specification' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'}`}
          onClick={() => handleTabClick('specification')}
        >
          Specification
        </button>
        <button
          className={`py-2 px-4 font-medium ${activeTab === 'artwork' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'}`}
          onClick={() => handleTabClick('artwork')}
        >
          Artwork Guidelines
        </button>
        <button
          className={`py-2 px-4 font-medium ${activeTab === 'order' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'}`}
          onClick={() => handleTabClick('order')}
        >
          Order Process
        </button>
        <button
          className={`py-2 px-4 font-medium ${activeTab === 'sizing' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'}`}
          onClick={() => handleTabClick('sizing')}
        >
          Custom Sizing
        </button>
        <button
          className={`py-2 px-4 font-medium ${activeTab === 'material' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'}`}
          onClick={() => handleTabClick('material')}
        >
          Material
        </button>
        <button
          className={`py-2 px-4 font-medium ${activeTab === 'print' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'}`}
          onClick={() => handleTabClick('print')}
        >
          Print
        </button>
      </div>

      {/* Tab Content */}
      <div className="text-gray-700">
        {activeTab === 'details' && (
          <section>
            <h2 className="text-2xl font-semibold mb-4">Custom Candle Boxes</h2>
            <p className="mb-4">
            Get custom candle boxes designed for brands who love nothing but packaging perfection. You can choose the right material and pick any customization style you like. Ping us to get a free quote for your packaging needs            </p>
          </section>
        )}

        {activeTab === 'specification' && (
          <section>
            <h2 className="text-2xl font-semibold mb-4">Specification</h2>
            <p className="mb-4">
            You can get candle boxes created in any shape or size. The best option is tuck packaging style as it looks stylish and provides a great unboxing experience. Got something else in mind? Just let us know and we’ll create the design 100% free for you!            </p>
          </section>
        )}

        {activeTab === 'artwork' && (
          <section>
            <h2 className="text-2xl font-semibold mb-4">Artwork Guidelines</h2>
            <p className="mb-4">
            You can provide us with a logo or dieline to get started. Got a logo but don’t have packaging design ready? Avail our 100% free design services to get branded packaging for your brand at no additional costs.            </p>
          </section>
        )}

        {activeTab === 'order' && (
          <section>
            <h2 className="text-2xl font-semibold mb-4">Order Process</h2>
            <p className="mb-4">
            Just send your packaging requirements or schedule a call with our packaging expert. We’ll share you 3D proof of boxes before you proceed with the payment. And you’ll get boxes shipped at your doorstep within 10-12 days at your doorstep. Shipping is on us and we’ll cover 100% of the shipping charges!            </p>
          </section>
        )}

        {activeTab === 'sizing' && (
          <section>
            <h2 className="text-2xl font-semibold mb-4">Custom Sizing</h2>
            <p className="mb-4">
            Don’t like the stock box sizes? We neither. Just share your packaging size requirements with us and we’ll create free 3D mockups for you. Once you lock the dimensions, we will move ahead to materialize your packaging dreams into reality.             </p>
          </section>
        )}

        {activeTab === 'material' && (
          <section>
            <h2 className="text-2xl font-semibold mb-4">Material</h2>
            <p className="mb-4">
            You can use kraft, cardstock, or cardboard for personalized candle boxes. All the materials are sturdy and good for printing. Or you can choose paperboard to get luxury rigid boxes for your amazing candle brand!            </p>
          </section>
        )}

        {activeTab === 'print' && (
          <section>
            <h2 className="text-2xl font-semibold mb-4">Print</h2>
            <p className="mb-4">
            You can rely on offset printing to get high-quality candle packaging boxes. This printing method ensures that ink pops on boxes and you can win the hearts of your customers. You can customize boxes with embossing/debossing, silver/gold foiling, or any customization style you like!            </p>
          </section>
        )}
      </div>
    </div>
    <FAQ/>
    </div>
  );
}