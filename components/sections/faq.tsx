// components/FAQ.tsx

'use client'

import React, { useState } from 'react';

// FAQ data
const faqData = [
  {
    question: "What are your lead times?",
    answer: "Production typically takes 12–16 days, and 16–21 days for larger volume orders. Shipping times will depend on the shipping channel you choose. Read more about the full process here.",
    linkText: "Read more about the full process here.",
    linkUrl: "#"
  },
  {
    question: "How long does shipping take?",
    answer: "Air freight options range from 7-21 days, while ocean freight options range from 26-71 days. If you need some packaging expedited earlier, consider splitting your shipment between air and ocean!"
  },
  {
    question: "Where is your packaging produced?",
    answer: "Our packaging is produced with our vetted network of suppliers in the USA, UK, and China and shipped directly to your destination."
  },
  {
    question: "What is your minimum order quantity (MOQ)?",
    answer: "100 units. The MOQ is based on every unique box (e.g., size, design)."
  },
  {
    question: "Can I purchase a sample before placing an order?",
    answer: "Absolutely! We have a range of sample types for different purposes. Whether you're looking to test the size of your box or want to verify colors and artwork, we've got you covered. Explore all sample options here."
  },
  {
    question: "Can you provide me with a dieline template?",
    answer: "Dielines are provided after you've placed your order for a sample or production."
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Toggle active index for accordion effect
  const toggleFAQ = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="w-full py-8 md:py-12 lg:py-16 xl:py-24 bg-[#F9FAFB]">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">Frequently Asked Questions</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {faqData.map((faq, index) => (
            <div key={index} className="border-b pb-6">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex items-center justify-between w-full text-left font-semibold text-gray-900 hover:text-gray-700 focus:outline-none"
              >
                <span>{faq.question}</span>
                <span className="text-lg">{activeIndex === index ? "▾" : "▸"}</span>
              </button>
              {activeIndex === index && faq.answer && (
                <div className="mt-4 text-gray-600">
                  <p className="mb-2">{faq.answer}</p>
                  {faq.linkText && (
                    <a href={faq.linkUrl} className="text-blue-600 underline hover:text-blue-700">
                      {faq.linkText}
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
