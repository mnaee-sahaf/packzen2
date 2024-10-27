// components/FAQ.tsx

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
    answer: ""
  },
  {
    question: "Where is your packaging produced?",
    answer: ""
  },
  {
    question: "What is your minimum order quantity (MOQ)?",
    answer: ""
  },
  {
    question: "Can I purchase a sample before placing an order?",
    answer: ""
  },
  {
    question: "Can you help design custom inserts for my products?",
    answer: ""
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
                  <p>{faq.answer}</p>
                  {faq.linkText && (
                    <a href={faq.linkUrl} className="text-green-600 underline">
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
