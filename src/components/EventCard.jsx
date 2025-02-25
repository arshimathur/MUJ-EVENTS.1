import React from 'react';

function EventCard({ title, date, description, club }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-2">{date}</p>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-blue-600">{club}</span>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventCard;