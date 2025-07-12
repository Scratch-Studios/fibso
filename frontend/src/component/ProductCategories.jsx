import React from 'react';

const ProductCategories = () => {
  const categories = [
    'SPLICERS',
    'CONNECTORS',
    'FIBER OPTIC CABLES',
    'TOOLS',
    'ACCESSORIES',
  ];

  return (
    <section className="py-16 px-4 bg-gray-100 text-center animate-fade-in-up">
      <h2 className="text-4xl font-bold text-gray-800 mb-12">CATEGORIES</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-lg shadow-lg flex items-center justify-center text-xl font-semibold text-gray-700
                       hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out cursor-pointer
                       animate-slide-up"
            style={{ animationDelay: `${index * 100}ms` }} // Stagger animation
          >
            {category}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCategories;
