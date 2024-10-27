'use client'; // Marking the component as a client component

import Link from 'next/link';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { Toggle } from "@/components/ui/toggle"; // Import Toggle
import Image from 'next/image';
import { Button } from '@/components/ui/button'; // Corrected import statement for Button

export default function Products() {
  console.log("Rendering Products component");

  // State to manage the view type (grid or list)
  const [isGridView, setIsGridView] = useState(true);
  // State to manage the search query
  const [searchQuery, setSearchQuery] = useState('');

  // Function to toggle between grid and list view
  const toggleView = () => {
    setIsGridView(!isGridView);
  };

  // Array of product objects with unique content
  const products = [
    {
      title: "Mailer Boxes",
      alt_title: "Packaging Mailer Boxes",
      image: "/images/products/mailer-box.jpg", // Updated path
      description: "Corrugated mailer boxes are perfect for eCommerce packaging and shipping, giving your customers an exciting unboxing experience from the get-go.",
      subDescription: "MOQ 100 UNITS."
    },
    {
      title: "Folding Cartons",
      alt_title: "Packaging Folding Cartons",
      image: "/images/products/folding-carton.jpg", // Updated path
      description: "Custom printed folding carton boxes, also known as product boxes, are perfect for individual product packaging and lightweight items.",
      subDescription: "Sub description for Product 2."
    },
    {
      title: "Ridged Boxes",
      alt_title: "Packaging Ridged Boxes",
      image: "/images/products/folding-carton.jpg", // Updated path
      description: "Custom printed rigid boxes, also known as gift boxes, are perfect for high end or luxury products to create a premium unboxing experience.",
      subDescription: "Sub description for Product 3."
    },
    {
      title: "Drawer Boxes",
      alt_title: "Packaging Drawer Boxes",
      image: "/images/products/folding-carton.jpg", // Updated path
      description: "Showcase your products in an elegant way with rigid drawer boxes. Use a ribbon pull tab or a custom thumb notch for a seamless sliding drawer experience.",
      subDescription: "Sub description for Product 4."
    },
    {
      title: "Magnetic Rigid Boxes",
      alt_title: "Packaging Magnetic Rigid Boxes",
      image: "/images/products/folding-carton.jpg", // Updated path
      description: "The ultimate package for luxury. Use custom magnetic closure boxes to elevate the value of your products and provide a premium brand experience",
      subDescription: "Sub description for Product 5."
    },
    {
      title: "Custom Box Inserts",
      alt_title: "Packaging Custom Box Inserts",
      image: "/images/products/folding-carton.jpg", // Updated path
      description: "Present products beautifully in custom box inserts that are moulded to the shape of your products for a secure and snug fit.",
      subDescription: "Sub description for Product 6."
    },
    {
      title: "Custom Foam Inserts",
      alt_title: "Packaging Custom Foam Inserts",
      image: "/images/products/folding-carton.jpg", // Updated path
      description: "Showcase your products elegantly and protect fragile or delicate products with custom foam inserts.",
      subDescription: "Sub description for Product 7."
    },
    {
      title: "Custom Box Dividers",
      alt_title: "Packaging Custom Box Dividers",
      image: "/images/products/folding-carton.jpg", // Updated path
      description: "Use box dividers or partitions to easily organize and pack products inside your box. Create multiple compartments to separate different sized products from one another.",
      subDescription: "Sub description for Product 8."
    },
    {
      title: "Display Boxes",
      alt_title: "Packaging Display Boxes",
      image: "/images/products/folding-carton.jpg", // Updated path
      description: "Convert your custom boxes into counter display packaging that showcases your products. Perfect as retail display boxes in-store or displayed at events.",
      subDescription: "Sub description for Product 9."
    },
  ];

  // Filter products based on the search query
  const filteredProducts = products.filter(product => 
    product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen">      
      {/* Main Content Section */}
      <main className="container mx-auto p-4 flex-1">
        {/* Main title of the products page */}
        <h1 className="text-3xl font-bold mb-4">Our Products</h1>
        <p className="mb-4">Explore our range of products.</p>
        <Link href="/" className="text-blue-600 hover:underline">Go back to Home</Link>
        
        {/* Search Section */}
        <section>
          <h2 className="text-2xl font-semibold mt-8">Find the right products</h2>
          <div className="flex items-center mt-4">
            <input 
              type="text" 
              placeholder="Search packaging" 
              className="border rounded-l-md p-2 flex-grow max-w-xs" // Set a maximum width
              value={searchQuery} // Bind the input value to the searchQuery state
              onChange={(e) => setSearchQuery(e.target.value)} // Update the searchQuery state on input change
            />
            <button className="bg-blue-500 text-white rounded-r-md p-2">
              <MagnifyingGlassIcon className="h-5 w-5" />
            </button>
            <Toggle 
              className="ml-2 bg-blue-500 text-white p-2 rounded"
            >
              {isGridView ? 'List View' : 'Grid View'}
            </Toggle>
          </div>
        </section>
        
        {/* Product Cards Section */}
        <section>
          <div className={`grid ${isGridView ? 'grid-cols-3' : 'grid-cols-1'} gap-4 mt-6`}>
            {filteredProducts.map((product, index) => (
              <article key={index} className="border rounded-lg p-4 mx-2 bg-white shadow-md">
                <header>
                  <h3 className="font-bold">{product.title}</h3>
                </header>
                <figure>
                  <Image 
                    src={product.image}
                    alt={product.alt_title}
                    width={300}
                    height={200}
                    className="w-full h-32 object-cover mb-2"
                  />
                </figure>
                <div>
                  <p>{product.description}</p>
                  <p className="text-gray-500">{product.subDescription}</p>
                </div>
                <footer>
                  <Link href="/products/paperbag">
                    <Button className="w-full">View Product</Button>
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
