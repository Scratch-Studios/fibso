import React from 'react';

const FirstPage = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center py-10 px-4 bg-gray-50 overflow-hidden min-h-[calc(650px)]">
      {/* Background/floating images - adjust positioning as needed */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-lg opacity-30 animate-fade-in-down delay-100"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-purple-200 rounded-full opacity-30 animate-fade-in-up delay-200"></div>

      <div className="relative w-64 h-64 md:mr-12 mb-8 md:mb-0 animate-fade-in-left">
        {/* Placeholder images - replace with actual image paths */}
        <img src="https://picsum.photos/200/300" alt="Fiber Optic Equipment 1" className="absolute top-0 left-0 w-32 h-32 object-cover rounded-lg shadow-lg border border-gray-200 animate-zoom-in" />
        <img src="https://picsum.photos/200/300" alt="Fiber Optic Equipment 2" className="absolute bottom-0 left-10 w-20 h-20 object-cover rounded-lg shadow-lg border border-gray-200 animate-zoom-in delay-100" />
        <img src="https://picsum.photos/200/300" alt="Fiber Optic Equipment 3" className="absolute top-5 right-0 w-28 h-28 object-cover rounded-lg shadow-lg border border-gray-200 animate-zoom-in delay-200" />
      </div>

      <div className="text-center max-w-xl animate-fade-in-right">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
          "Your one-stop shop for fiber optic solutions"
        </h1>
        <p className="text-lg text-gray-700 mb-2">Browse splicers, connectors, cables & more.</p>
        <p className="text-lg text-gray-700 mb-6">Request a quote in minutes.</p>
        <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 animate-bounce-once">
          EXPLORE PRODUCTS
        </button>
      </div>
    </div>
  );
};

export default FirstPage;