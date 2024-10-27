'use client';

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Select, SelectItem, SelectContent, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";

export default function CustomPaperBag() {
  const [quantity, setQuantity] = useState('1000 units');
  const [style, setStyle] = useState('Paper Bag with Rope Handles');
  const [size, setSize] = useState('5.5 x 2.5 x 4.5 in');
  const [print, setPrint] = useState('Printed outside only');

  // State for estimated costs
  const [estimatedPackaging, setEstimatedPackaging] = useState(0);
  const [estimatedShipping, setEstimatedShipping] = useState(0);
  const [estimatedTotal, setEstimatedTotal] = useState(0);

  // Function to calculate costs based on selected quantity
  const calculateCosts = () => {
    const quantityValue = parseInt(quantity.split(' ')[0]); // Extract numeric value from quantity string
    const packagingCostPerUnit = 1; // Example cost per unit for packaging
    const shippingCostPerUnit = 0.1; // Example cost per unit for shipping

    // Calculate estimated costs
    const packaging = quantityValue * packagingCostPerUnit;
    const shipping = quantityValue * shippingCostPerUnit;
    const total = packaging + shipping;

    // Update state with calculated costs
    setEstimatedPackaging(packaging);
    setEstimatedShipping(shipping);
    setEstimatedTotal(total);
  };

  // Effect to recalculate costs whenever quantity changes
  useEffect(() => {
    calculateCosts();
  }, [quantity]);

  return (
    <div className="flex flex-col lg:flex-row justify-center items-start p-8 bg-gray-50 min-h-screen gap-8">
      
      {/* Left Side - Product Image */}
      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <Card className="bg-gray-800 rounded-lg w-4/5 h-4/5 p-6 flex flex-col items-center">
          <div className="text-center text-white text-xl font-bold mb-2">
            Packzen
          </div>
          <div className="text-center text-white mb-8">
            Custom Packaging Simplified
          </div>
          {/* Placeholder for Product Image */}
          <div className="w-full h-60 bg-gray-400 rounded-lg" />
        </Card>
      </div>

      {/* Right Side - Product Details */}
      <div className="w-full lg:w-1/2 space-y-6">
        <h1 className="text-3xl font-bold text-gray-900">Custom Paper Bags</h1>

        {/* Style Selection */}
        <div>
          <h3 className="font-medium text-gray-700">Style</h3>
          <Select onValueChange={setStyle}>
            <SelectTrigger>
              <SelectValue placeholder={style} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Paper Bag with Rope Handles">Paper Bag with Rope Handles</SelectItem>
              <SelectItem value="Paper Bag with Ribbon Handles">Paper Bag with Ribbon Handles</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-sm text-gray-600 mt-1">
            Paper bags made with paperboard materials and include rope handles for carrying.
          </p>
        </div>

        {/* Size Selection */}
        <div>
          <h3 className="font-medium text-gray-700">Size</h3>
          <Select onValueChange={setSize}>
            <SelectTrigger>
              <SelectValue placeholder={size} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5.5 x 2.5 x 4.5 in">5.5 x 2.5 x 4.5 in</SelectItem>
              <SelectItem value="7.5 x 2.5 x 5.5 in">7.5 x 2.5 x 5.5 in</SelectItem>
              <SelectItem value="7.5 x 3.5 x 5.5 in">7.5 x 3.5 x 5.5 in</SelectItem>
              <SelectItem value="7.5 x 4.5 x 5.5 in">7.5 x 4.5 x 5.5 in</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-xs text-gray-600">
            Sizes are for reference only. We support fully custom sizes.
          </p>
        </div>

        {/* Print Selection */}
        <div>
          <h3 className="font-medium text-gray-700">Print</h3>
          <Select onValueChange={setPrint}>
            <SelectTrigger>
              <SelectValue placeholder={print} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Printed outside only">Printed outside only</SelectItem>
              <SelectItem value="Printed inside only">Printed inside only</SelectItem>
              <SelectItem value="Printed outside and inside">Printed outside and inside</SelectItem>
              <SelectItem value="Blank - No print">Blank - No print</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-xs text-gray-600">
            Assuming full color print on high-end offset printers
          </p>
        </div>

        {/* Quantity Selection */}
        <div>
          <h3 className="font-medium text-gray-700">Quantity</h3>
          <Select onValueChange={setQuantity}>
            <SelectTrigger>
              <SelectValue placeholder={quantity} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="500 units">500 units</SelectItem>
              <SelectItem value="1000 units">1000 units</SelectItem>
              <SelectItem value="1500 units">1500 units</SelectItem>
              <SelectItem value="2000 units">2000 units</SelectItem>
              <SelectItem value="2500 units">2500 units</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-xs text-gray-600">
            Starting from 500 units
          </p>
        </div>

        {/* Summary Section */}
        <div className="space-y-2 bg-gray-100 p-4 rounded-lg">
          <div className="flex justify-between text-gray-700">
            <span>Estimated packaging</span>
            <span>US$ {estimatedPackaging.toFixed(2)}</span> {/* Display dynamic packaging cost */}
          </div>
          <div className="flex justify-between text-gray-700">
            <span>Estimated shipping</span>
            <span>US$ {estimatedShipping.toFixed(2)}</span> {/* Display dynamic shipping cost */}
          </div>
          <div className="flex justify-between font-bold text-gray-900">
            <span>Estimated total</span>
            <span>US$ {estimatedTotal.toFixed(2)}</span> {/* Display dynamic total cost */}
          </div>
          <p className="text-xs text-gray-600">Estimated total cost per unit US$ {(estimatedTotal / parseInt(quantity.split(' ')[0])).toFixed(2)}</p>
        </div>

        {/* Customize Now Button */}
        <Button className="w-full bg-green-600 hover:bg-green-700">
          Customize now
        </Button>
      </div>
    </div>
  );
}
