'use client';

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Select, SelectItem, SelectContent, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";

// Reusable component for selecting options with TypeScript types
interface SelectOptionProps {
  label: string; // Label for the select option
  value: string; // Current selected value
  options: string[]; // Array of options to select from
  onChange: (value: string) => void; // Function to call when the value changes
}

const SelectOption: React.FC<SelectOptionProps> = ({ label, value, options, onChange }) => (
  <div>
    <h3 className="font-medium text-gray-700">{label}</h3>
    <Select onValueChange={onChange}>
      <SelectTrigger>
        <SelectValue placeholder={value} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option} value={option}>
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
    <p className="text-xs text-gray-600">Assuming full color print on high-end offset printers</p>
  </div>
);

// Reusable component for displaying estimated costs
interface CostSummaryProps {
  estimatedPackaging: number;
  estimatedShipping: number;
  estimatedTotal: number;
  quantity: string;
}

const CostSummary: React.FC<CostSummaryProps> = ({ estimatedPackaging, estimatedShipping, estimatedTotal, quantity }) => (
  <div className="space-y-2 bg-gray-100 p-4 rounded-lg">
    <div className="flex justify-between text-gray-700">
      <span>Estimated packaging</span>
      <span>US$ {estimatedPackaging.toFixed(2)}</span>
    </div>
    <div className="flex justify-between text-gray-700">
      <span>Estimated shipping</span>
      <span>US$ {estimatedShipping.toFixed(2)}</span>
    </div>
    <div className="flex justify-between font-bold text-gray-900">
      <span>Estimated total</span>
      <span>US$ {estimatedTotal.toFixed(2)}</span>
    </div>
    <p className="text-xs text-gray-600">Estimated total cost per unit US$ {(estimatedTotal / parseInt(quantity.split(' ')[0])).toFixed(2)}</p>
  </div>
);

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
    const quantityValue = parseInt(quantity.split(' ')[0]);
    const packagingCostPerUnit = 1;
    const shippingCostPerUnit = 0.1;

    const packaging = quantityValue * packagingCostPerUnit;
    const shipping = quantityValue * shippingCostPerUnit;
    const total = packaging + shipping;

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
        <SelectOption 
          label="Style" 
          value={style} 
          options={["Paper Bag with Rope Handles", "Paper Bag with Ribbon Handles"]} 
          onChange={setStyle} 
        />

        {/* Size Selection */}
        <SelectOption 
          label="Size" 
          value={size} 
          options={["5.5 x 2.5 x 4.5 in", "7.5 x 2.5 x 5.5 in", "7.5 x 3.5 x 5.5 in", "7.5 x 4.5 x 5.5 in"]} 
          onChange={setSize} 
        />

        {/* Print Selection */}
        <SelectOption 
          label="Print" 
          value={print} 
          options={["Printed outside only", "Printed inside only", "Printed outside and inside", "Blank - No print"]} 
          onChange={setPrint} 
        />

        {/* Quantity Selection */}
        <SelectOption 
          label="Quantity" 
          value={quantity} 
          options={["500 units", "1000 units", "1500 units", "2000 units", "2500 units"]} 
          onChange={setQuantity} 
        />

        {/* Summary Section */}
        <CostSummary 
          estimatedPackaging={estimatedPackaging} 
          estimatedShipping={estimatedShipping} 
          estimatedTotal={estimatedTotal} 
          quantity={quantity} 
        />

        {/* Customize Now Button */}
        <Button className="w-full bg-blue-600 hover:bg-blue-700">
          Customize now
        </Button>
      </div>
    </div>
  );
}
