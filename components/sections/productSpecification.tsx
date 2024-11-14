"use client"

import React, { useState, FC } from 'react';

type Tab = 'details' | 'specification' | 'artwork' | 'order' | 'sizing' | 'material' | 'print';

const ProductSpecification: FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('details');

  const handleTabClick = (tab: Tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="p-6 font-sans">
      {/* Tab Navigation */}
      <div className="flex space-x-4 border-b border-gray-200 mb-6">
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
              As a retail brand, you must know that <strong>cardboard packaging</strong> keeps your products safe. But
              have you ever considered the potential of <strong>cardboard boxes</strong> to boost brand affinity and win
              new sales? Research shows that attractive packaging stimulates reward-seeking parts of the brain. These
              parts are associated with impulse purchasing!
            </p>
            <p className="mb-4">
              Here at Refine Packaging, we're passionate about empowering brands to supercharge their marketing and sales
              strategies through the power of packaging. Our personalized boxes are a great, cost-effective way to do it.
            </p>
          </section>
        )}

        {activeTab === 'specification' && (
          <section>
            <h2 className="text-2xl font-semibold mb-4">Specification</h2>
            <p className="mb-4">
              Our lightweight, highly customizable cardboard boxes are designed to make your products stand out. With rich digital
              printing options and various sizes and styles available, anything is possible.
            </p>
            <p className="mb-4">
              Our experts are here to help you through every step of the order process to ensure that your custom packaging needs
              are met efficiently and effectively.
            </p>
          </section>
        )}

        {activeTab === 'artwork' && (
          <section>
            <h2 className="text-2xl font-semibold mb-4">Artwork Guidelines</h2>
            <p className="mb-4">
              We offer a range of options for digital printing, including CMYK and RGB color models, as well as Pantone color matching.
              Our team will guide you in preparing your artwork to fit our packaging templates.
            </p>
          </section>
        )}

        {activeTab === 'order' && (
          <section>
            <h2 className="text-2xl font-semibold mb-4">Order Process</h2>
            <p className="mb-4">
              Place your order with ease! Our team will work with you to confirm all design details, sizes, and specifications. Once
              you approve, we move into production and keep you updated every step of the way.
            </p>
          </section>
        )}

        {activeTab === 'sizing' && (
          <section>
            <h2 className="text-2xl font-semibold mb-4">Custom Sizing</h2>
            <p className="mb-4">
              We offer a variety of sizes to fit your product needs. From small to large, our boxes are fully customizable to give your
              products the perfect fit and finish.
            </p>
          </section>
        )}

        {activeTab === 'material' && (
          <section>
            <h2 className="text-2xl font-semibold mb-4">Material</h2>
            <p className="mb-4">
              Our corrugated fiberboard provides the ideal balance of strength and lightweight design. It protects your products while
              minimizing shipping costs.
            </p>
          </section>
        )}

        {activeTab === 'print' && (
          <section>
            <h2 className="text-2xl font-semibold mb-4">Print</h2>
            <p className="mb-4">
              With advanced digital printing options, we offer fast and affordable printing solutions that can meet any design needs.
              Our boxes ship flat for easy handling and quick assembly.
            </p>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductSpecification;
