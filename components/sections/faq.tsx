// components/FAQ.tsx

'use client'

import React, { useState } from 'react';

// FAQ data
const faqData = [
  {
    question: "What are your lead times?",
    answer: "Production typically takes 10–14 days, and 16–21 days for larger volume orders. Shipping times will depend on the shipping channel you choose. Read more about the full process here.",
    linkText: "Read more about the full process here.",
    linkUrl: "#"
  },
  {
    question: "Do you provide free samples",
    answer: "We only give free 3D mockups so you can check the design and dimensions of the boxes before you place an order"
  },
  {
    question: "Do you provide free dieline templates?",
    answer: "Yes. You can get free dielines and free design support from us. We can create customized designs for your packaging so it stands out from other brands"
  },
  {
    question: "What is your minimum order quantity (MOQ)?",
    answer: "You can order as low as 100 boxes. Before you place your order, we'll give you free design support to get 3D proof of the boxes we will create for you. 100 boxes minimum but no maximums!"
  },
  {
    question: "Is shipping free? What are the turnaround times?",
    answer: "We offer 100% free shipping all over US. From order placement to delivery, the entire process takes 10-12 business days"
  },
  {
    question: "How soon do you respond?",
    answer: "We ensure to respond ASAP but we never take more than 24 hours to reply"
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Toggle active index for accordion effect
  const toggleFAQ = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="w-full py-8 md:py-12 lg:py-16 xl:py-24">
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
