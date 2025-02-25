import React from 'react';

function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">About Manipal University Jaipur</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
          <p className="text-gray-600 mb-6">
            To be a global leader in higher education and create a collaborative ecosystem of academic excellence, 
            innovation, and entrepreneurship.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-6">
            To provide world-class education, foster research and development, and create future leaders 
            who contribute to the advancement of society and humanity.
          </p>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Facts</h2>
          <ul className="space-y-4">
            <li className="flex items-center">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3">1</span>
              <span className="text-gray-700">Established in 2011</span>
            </li>
            <li className="flex items-center">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3">2</span>
              <span className="text-gray-700">300+ Acre Campus</span>
            </li>
            <li className="flex items-center">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3">3</span>
              <span className="text-gray-700">20+ Technical Clubs</span>
            </li>
            <li className="flex items-center">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3">4</span>
              <span className="text-gray-700">100+ Events Annually</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;