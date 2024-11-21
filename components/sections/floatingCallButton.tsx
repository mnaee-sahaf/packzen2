import React from "react";

export default function FloatingButtons() {
  return (
    <>
      {/* Floating Call Button */}
      <div className="fixed bottom-4 right-4 z-50">
        <a
          href="tel:+12146996147"
          className="flex items-center justify-center bg-green-500 text-white text-lg font-semibold py-3 px-6 rounded-full shadow-xl hover:bg-green-600 hover:shadow-2xl focus:ring-4 focus:ring-green-300 focus:outline-none transition-transform transform hover:scale-105 duration-300"
          aria-label="Call us"
        >
          Call Now
        </a>
      </div>

      {/* Floating Email Button */}
      <div className="fixed bottom-4 left-4 z-50">
        <a
          href="mailto:muneeb@packeeze.com"
          className="flex items-center justify-center bg-blue-500 text-white text-lg font-semibold py-3 px-6 rounded-full shadow-xl hover:bg-blue-600 hover:shadow-2xl focus:ring-4 focus:ring-blue-300 focus:outline-none transition-transform transform hover:scale-105 duration-300"
          aria-label="Email us"
        >
          Email Us
        </a>
      </div>
    </>
  );
}
