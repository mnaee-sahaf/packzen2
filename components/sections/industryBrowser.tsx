// components/IndustryBrowser.tsx

import React from 'react';

// List of industries
const industries = [
  'Accessories', 'Apparel', 'Art & Design', 'Automotive', 'Beauty',
  'Consumer Products', 'Cosmetics', 'Education', 'Events', 'Fitness',
  'Food & Beverage', 'Health & Wellness', 'Jewelry'
];

// IndustryBrowser component
const IndustryBrowser = () => {
  return (
    <div className="p-8 text-center">
      <h2 className="text-2xl font-semibold mb-6">Browse by industry</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {industries.map((industry) => (
          <button
            key={industry}
            className="px-4 py-2 border border-gray-400 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
          >
            {industry}
          </button>
        ))}
      </div>
    </div>
  );
};

export default IndustryBrowser;
