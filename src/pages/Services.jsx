import React from 'react';

function Services() {
  const services = [
    {
      title: "Event Management",
      description: "Professional event planning and execution services for technical and cultural events.",
      icon: "🎯"
    },
    {
      title: "Club Support",
      description: "Resources and support for student clubs and organizations.",
      icon: "🤝"
    },
    {
      title: "Venue Booking",
      description: "Easy booking system for various venues and facilities on campus.",
      icon: "🏛️"
    },
    {
      title: "Technical Support",
      description: "Audio-visual and technical support for all campus events.",
      icon: "🔧"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Services</h1>
      
      <div className="grid md:grid-cols-2 gap-6">
        {services.map((service) => (
          <div key={service.title} className="bg-white rounded-lg shadow-md p-6">
            <div className="text-4xl mb-4">{service.icon}</div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-blue-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Custom Services?</h2>
        <p className="text-gray-600 mb-4">
          We can help you organize and manage custom events tailored to your specific requirements.
        </p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-500">
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default Services;