"use client";

import { useState, useMemo } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ProductImageCarousel } from "@/components/sections/ProductImageCarousel";
import { ProductFeatures } from "@/components/sections/ProductFeatures";
import { productSizes, quantityOptions, calculatePrice } from "@/lib/product-data";
import { ProductSize, QuantityOption } from "@/lib/types";

export default function ProductPage() {
  if (!productSizes.length || !quantityOptions.length) {
    return <div>Loading...</div>;
  }

  const [selectedQuantity, setSelectedQuantity] = useState<QuantityOption>(quantityOptions[0]);
  const [selectedSize, setSelectedSize] = useState<ProductSize>(productSizes[0]);

  const price = useMemo(() => {
    const calculated = calculatePrice(selectedSize, selectedQuantity);
    return calculated || { total: 0, perBox: 0 }; // Fallback for unexpected results
  }, [selectedSize, selectedQuantity]);

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li>Home</li>
            <li>•</li>
            <li className="font-medium text-gray-900">Mailing Boxes</li>
          </ol>
        </nav>

        {/* Product Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8 mb-16">
          {/* Left Column - Product Images */}
          <div className="w-full">
            <div className="sticky top-8">
              <ProductImageCarousel />
            </div>
          </div>

          {/* Right Column - Product Details */}
          <div className="flex flex-col">
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Mailing Boxes
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
                <h2 className="text-lg font-semibold text-gray-900 mb-2">Price</h2>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-gray-900">
                    ${price.total}
                  </span>
                  <span className="text-gray-500">
                    (${price.perBox} per box)
                  </span>
                </div>
              </div>

              {/* Features */}
              <ProductFeatures />

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
                          {productSizes.map((size) => (
                            <SelectItem key={size.name} value={size.name}>
                              {size.name} ({size.dimensions})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button
                    className="w-full bg-black text-white hover:bg-gray-800 h-12 text-lg font-medium"
                    aria-label="Add to cart"
                  >
                    Add to cart
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Product Title */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Elegant shoulder neck boxes with zero effort
          </h2>
        </div>
      </main>
    </div>
  );
}
