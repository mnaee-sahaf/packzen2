'use client';

import React, { useState, FC } from 'react';

type Tab = 'details' | 'specification' | 'artwork' | 'order' | 'sizing' | 'material' | 'print';

const ProductSpecification: FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('details');

  const handleTabClick = (tab: Tab) => {
    setActiveTab(tab);
  };

  return (
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
            <h2 className="text-2xl font-semibold mb-4">Fully Customizable Cardboard Boxes</h2>
            <p className="mb-4">
              Get branded chocolate bar boxes designed for brands who love nothing but packaging perfection. You can choose the right material and pick any customization style you like. Ping us to get a free quote for your packaging needs.
            </p>
          </section>
        )}

        {activeTab === 'specification' && (
          <section>
            <h2 className="text-2xl font-semibold mb-4">Specification</h2>
            <p className="mb-4">
              You can get custom bar boxes in any shape or size. The best option is tuck packaging style as it looks stylish and provides a great unboxing experience. Got something else in mind? Just let us know and we’ll create the design 100% free for you!
            </p>
          </section>
        )}

        {activeTab === 'artwork' && (
          <section>
            <h2 className="text-2xl font-semibold mb-4">Artwork Guidelines</h2>
            <p className="mb-4">
              You can provide us with a logo or dieline to get started. Got a logo but don’t have packaging design ready? Avail our 100% free design services to get branded packaging for your brand at no additional costs.
            </p>
          </section>
        )}

        {activeTab === 'order' && (
          <section>
            <h2 className="text-2xl font-semibold mb-4">Order Process</h2>
            <p className="mb-4">
              Just send your packaging requirements or schedule a call with our packaging expert. We’ll share you 3D proof of boxes before you proceed with the payment. And you’ll get boxes shipped at your doorstep within 10-12 days at your doorstep. Shipping is on us and we’ll cover 100% of the shipping charges!
            </p>
          </section>
        )}

        {activeTab === 'sizing' && (
          <section>
            <h2 className="text-2xl font-semibold mb-4">Custom Sizing</h2>
            <p className="mb-4">
              Don’t like the stock box sizes? We neither. Just share your packaging size requirements with us and we’ll create free 3D mockups for you. Once you lock the dimensions, we will move ahead to materialize your packaging dreams into reality. 
            </p>
          </section>
        )}

        {activeTab === 'material' && (
          <section>
            <h2 className="text-2xl font-semibold mb-4">Material</h2>
            <p className="mb-4">
              You can use kraft, cardstock, or cardboard for custom chocolate bar boxes. All the materials are sturdy and good for printing. Or you can choose paperboard to get luxury rigid boxes for your amazing chocolate brand!
            </p>
          </section>
        )}

        {activeTab === 'print' && (
          <section>
            <h2 className="text-2xl font-semibold mb-4">Print</h2>
            <p className="mb-4">
              You can rely on offset printing to get high-quality chocolate bar boxes. This printing method ensures that ink pops on boxes and you can win the hearts of your customers. You can customize chocolate bar boxes with embossing/debossing, silver/gold foiling, or any customization style you like!
            </p>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductSpecification;
