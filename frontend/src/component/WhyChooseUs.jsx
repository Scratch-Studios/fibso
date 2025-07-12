import React from 'react';

const WhyChooseUs = () => {
  const reasons = [
    {
      title: 'QUALITY ASSURED PRODUCTS',
      description: 'We guarantee high-quality fiber optic solutions for all your needs.',
    },
    {
      title: 'FAST QUOTATION PROCESSING',
      description: 'Get your quotes quickly and efficiently to speed up your projects.',
    },
    {
      title: 'BULK ORDER SUPPORT',
      description: 'We offer dedicated support and pricing for large volume orders.',
    },
  ];

  return (
    <section className="py-16 px-4 bg-white text-center animate-fade-in">
      <h2 className="text-4xl font-bold text-gray-800 mb-12">WHY CHOOSE US?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out
                       transform hover:-translate-y-2 animate-fade-in"
            style={{ animationDelay: `${index * 150}ms` }} // Stagger animation correctly
          >
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">{reason.title}</h3>
            <p className="text-gray-700 leading-relaxed">{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
