import React from 'react';

function JaipurEvents() {
  const events = [
    {
      title: "Jaipur Literature Festival",
      date: "February 1-5, 2024",
      venue: "Diggi Palace",
      description: "World's largest free literary festival featuring renowned authors and speakers."
    },
    {
      title: "Jaipur Art Summit",
      date: "March 10-15, 2024",
      venue: "Jawahar Kala Kendra",
      description: "Annual art exhibition showcasing works from artists across India."
    },
    {
      title: "World Music Festival",
      date: "March 20-22, 2024",
      venue: "Albert Hall Museum",
      description: "Three-day music festival featuring international and local artists."
    },
    {
      title: "TEDx Jaipur",
      date: "April 5, 2024",
      venue: "Hotel Clarks Amer",
      description: "Ideas worth spreading from local and international speakers."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Events in Jaipur</h1>
      
      <div className="grid md:grid-cols-2 gap-6">
        {events.map((event) => (
          <div key={event.title} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h2>
            <div className="text-gray-600 mb-2">
              <p>Date: {event.date}</p>
              <p>Venue: {event.venue}</p>
            </div>
            <p className="text-gray-700">{event.description}</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500">
              Get Tickets
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JaipurEvents;