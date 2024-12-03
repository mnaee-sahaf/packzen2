'use client'; // Marking the component as a client component

import Link from 'next/link';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button'; // Corrected import statement for Button
import { Switch } from '@radix-ui/react-switch';
import { Label } from '@radix-ui/react-label';
import FloatingCallButton from '@/components/sections/floatingCallButton';



export default function Products() {
  console.log("Rendering Products component");

  // State to manage the view type (grid or list)
  const [isListView, setIsListView] = useState(false); // Default value (won't depend on `window`)
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Only run this code in the client (browser environment)
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setIsListView(window.innerWidth <= 768);
      };
      
      // Set the initial view based on window size
      handleResize();

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const toggleView = () => {
    // Only toggle view if on larger screens
    if (typeof window !== 'undefined' && window.innerWidth > 768) {
      setIsListView(!isListView);
    }
  };

  // Array of product objects with unique content
  const products = [
    {
      title: "Mylar Bags",
      alt_title: "Custom Mylar Bags",
      image: "/Images/mylar-nobg/mylar1.webp", // Updated path
      description: "Use box dividers or partitions to easily organize and pack products inside your box. Create multiple compartments to separate different sized products from one another.",
      subDescription: "MOQ 100 UNITS",
      link: "/pages/products/mylar-bags"

    },
    {
      title: "Chocolate Bar Boxes",
      alt_title: "Packaging Mailer Boxes",
      image: "/Images/choco-nobg.png", // Updated path
      description: "Corrugated mailer boxes are perfect for eCommerce packaging and shipping, giving your customers an exciting unboxing experience from the get-go.",
      subDescription: "MOQ 100 UNITS.",
      link: "/pages/products/chocolate-bar-boxes"
    },
    {
      title: "Gable Boxes",
      alt_title: "Packaging Display Boxes",
      image: "/Images/gable-nobg.png", // Updated path
      description: "Convert your custom boxes into counter display packaging that showcases your products. Perfect as retail display boxes in-store or displayed at events.",
      subDescription: "MOQ 100 UNITS",
      link: "/pages/products/gable-boxes"
    },
    {
      title: "Soap Boxes",
      alt_title: "Packaging Display Boxes",
      image: "/Images/soap-nobg.png", // Updated path
      description: "Convert your custom boxes into counter display packaging that showcases your products. Perfect as retail display boxes in-store or displayed at events.",
      subDescription: "MOQ 100 UNITS",
      link: "/pages/products/soap-boxes"
    },
    {
      title: "Snowman Gift Boxes",
      alt_title: "Packaging Ridged Boxes",
      image: "/Images/snowman-nobg.png", // Updated path
      description: "Custom printed rigid boxes, also known as gift boxes, are perfect for high end or luxury products to create a premium unboxing experience.",
      subDescription: "MOQ 100 UNITS",
      link: "/pages/products/snowman-gift-boxes"
    },
    {
      title: "Custom Pouch Bags",
      alt_title: "Packaging Magnetic Rigid Boxes",
      image: "/Images/pouch-nobg.png", // Updated path
      description: "The ultimate package for luxury. Use custom magnetic closure boxes to elevate the value of your products and provide a premium brand experience",
      subDescription: "MOQ 100 UNITS",
      link: "/pages/products/custom-pouch-bags"
    },
    {
      title: "Small Cosmetic Boxes",
      alt_title: "Packaging Custom Box Inserts",
      image: "/Images/cosmetic-nobg.png", // Updated path
      description: "Present products beautifully in custom box inserts that are moulded to the shape of your products for a secure and snug fit.",
      subDescription: "MOQ 100 UNITS",
      link: "/pages/products/small-cosmetic-boxes"
    },
    {
      title: "Tuck Boxes",
      alt_title: "Packaging Custom Foam Inserts",
      image: "/Images/tuck-nobg.png", // Updated path
      description: "Showcase your products elegantly and protect fragile or delicate products with custom foam inserts.",
      subDescription: "MOQ 100 UNITS",
      link: "/pages/products/truck-boxes"
    },
    {
      title: "Magnetic Closure Boxes",
      alt_title: "Packaging Folding Cartons",
      image: "/Images/magnetic-nobg.png", // Updated path
      description: "Custom printed folding carton boxes, also known as product boxes, are perfect for individual product packaging and lightweight items.",
      subDescription: "MOQ 100 UNITS",
      link: "/pages/products/magnetic-box"
    },
    // {
    //   title: "6 by 9 Poly Mailers",
    //   alt_title: "Packaging Drawer Boxes",
    //   image: "/Images/polimailer-nobg.png", // Updated path
    //   description: "Showcase your products in an elegant way with rigid drawer boxes. Use a ribbon pull tab or a custom thumb notch for a seamless sliding drawer experience.",
    //   subDescription: "MOQ 100 UNITS",
    //   link: "/pages/products/six-by-nine-poly-mailers"
    // },
    {
      title: "Kraft Boxes",
      alt_title: "Packaging Display Boxes",
      image: "/Images/kraft-nobg4.png", // Updated path
      description: "Convert your custom boxes into counter display packaging that showcases your products. Perfect as retail display boxes in-store or displayed at events.",
      subDescription: "MOQ 100 UNITS",
      link: "/pages/products/kraft-boxes"
    },
    {
      title: "Candle Boxes",
      alt_title: "Packaging Display Boxes",
      image: "/Images/candle-nobg.png", // Updated path
      description: "Convert your custom boxes into counter display packaging that showcases your products. Perfect as retail display boxes in-store or displayed at events.",
      subDescription: "MOQ 100 UNITS",
      link: "/pages/products/candle-boxes"
    },
    {
      title: "Rigid Boxes",
      alt_title: "Packaging Custom Box Dividers",
      image: "/Images/rigid-nobg.png", // Updated path
      description: "Use box dividers or partitions to easily organize and pack products inside your box. Create multiple compartments to separate different sized products from one another.",
      subDescription: "MOQ 100 UNITS",
      link: "/pages/products/rigid-boxes"
    },
    
  ];

  // Filter products based on the search query
  const filteredProducts = products.filter(product => 
    product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );


  return (
    <div className="flex flex-col min-h-screen"> 
    <title>Packeeze - Cusotm Packaging Simplified</title>     
     <FloatingCallButton/>  
      <main className="container mx-auto p-4 flex-1 mt-16">
        <h1 className="text-3xl font-bold mb-4">Our Products</h1>
        <p className="mb-4">Explore our range of products.</p>
        <Link href="/" className="text-blue-600 hover:underline">Go back to Home</Link>
        
        <section>
          <h2 className="text-2xl font-semibold mt-8">Find the right products</h2>
          <div className="flex items-center mt-4">
            <input 
              type="text" 
              placeholder="Search packaging" 
              className="border rounded-l-md p-2 flex-grow max-w-xs" 
              value={searchQuery} 
              onChange={(e) => setSearchQuery(e.target.value)} 
            />
            <div className="ml-2">
              <button className="bg-blue-500 text-white rounded-r-md p-2">
                <MagnifyingGlassIcon className="h-5 w-5" />
              </button>
            </div>

            <div className="flex items-center space-x-2">
              {typeof window !== 'undefined' && window.innerWidth > 768 && (
                <>
                  <Switch
                    id="view-toggle"
                    checked={isListView}
                    onCheckedChange={toggleView}
                  />
                  <Label htmlFor="view-toggle">
                    {isListView ? "List View" : "Grid View"}
                  </Label>
                </>
              )}
            </div>
          </div>
        </section>
        
        <section>
          <div className={`grid ${isListView ? 'grid-cols-1' : 'grid-cols-3'} gap-4 mt-6`}>
            {filteredProducts.map((product, index) => (
              <article key={index} className="border rounded-lg p-4 mx-2 bg-white shadow-md">
                <header className="flex justify-center mb-3">
                  <h3 className="font-bold">{product.title}</h3>
                </header>
                <figure className="relative w-full h-61 overflow-hidden flex items-center justify-center">
                  <Image 
                    src={product.image}
                    alt={product.alt_title}
                    width={300}
                    height={500}
                    className="w-full h-full object-cover mb-2"
                  />
                </figure>
                <div className="h-32 overflow-hidden mt-20">
                  <p className="overflow-hidden" style={{ maxHeight: '3em', display: '-webkit-box', WebkitBoxOrient: 'vertical', overflow: 'hidden', WebkitLineClamp: 2 }}>
                    {product.description}
                  </p>
                  <p className="text-gray-500 mt-30">{product.subDescription}</p>
                </div>
                <footer>
                  <Link href={product.link}>
                    <Button className="w-full bg-blue-500 hover:bg-blue-600">View Product</Button>
                  </Link>
                </footer>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}