import React from 'react';

const CallToActionSection = () => {
  return (
    <section className="py-16 px-4 bg-blue-50 text-center mt-12 animate-fade-in-up">
      <p className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 leading-tight">
        "NEED BULK PRICING OR HAVE QUESTIONS?"
      </p>
      <button className="px-10 py-4 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700
                       transition duration-300 ease-in-out transform hover:scale-105 animate-pulse-once">
        CONTACT US
      </button>
    </section>
  );
};

export default CallToActionSection;