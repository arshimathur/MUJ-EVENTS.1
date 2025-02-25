import React from 'react';
import EventCard from '../components/EventCard';

const clubs = [
  {
    name: 'IEEE',
    description: 'Professional association for electronic and electrical engineering',
    logo: '/club-logos/ieee.png',
    events: ['Technical Workshops', 'Paper Presentations', 'Industry Talks']
  },
  {
    name: 'ACM',
    description: 'The largest educational and scientific computing society',
    logo: '/club-logos/acm.png',
    events: ['Coding Competitions', 'Hackathons', 'Tech Seminars']
  },
  {
    name: 'IAESTE',
    description: 'International internship exchange program for technical students',
    logo: '/club-logos/iaeste.png',
    events: ['International Internship Fair', 'Cultural Exchange Programs']
  },
  {
    name: 'CyberSpace',
    description: 'Cybersecurity and ethical hacking club',
    logo: '/club-logos/cyberspace.png',
    events: ['CTF Competitions', 'Security Workshops', 'Bug Bounty Programs']
  },
  {
    name: 'Google Developers Club',
    description: 'Official Google technologies and development practices',
    logo: '/club-logos/gdc.png',
    events: ['Android Development', 'Cloud Computing Workshops', 'Google Technologies Training']
  }
];

function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Manipal University Jaipur Events
        </h1>
        <p className="text-xl text-gray-600">
          Discover exciting events, clubs, and activities on campus
        </p>
      </div>

      {/* Featured Event - Oniros */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg shadow-xl p-8 mb-16 text-white">
        <h2 className="text-3xl font-bold mb-4">ONIROS 2024</h2>
        <p className="text-lg mb-6">
          The Annual Cultural Festival of Manipal University Jaipur
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/10 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Music Night</h3>
            <p>Featuring top artists and bands</p>
          </div>
          <div className="bg-white/10 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Dance Competition</h3>
            <p>Solo and group performances</p>
          </div>
          <div className="bg-white/10 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Cultural Showcase</h3>
            <p>Art, fashion, and theatrical events</p>
          </div>
        </div>
      </div>

      {/* Technical Clubs Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Technical Clubs</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clubs.map((club) => (
            <div key={club.name} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-2">{club.name}</h3>
              <p className="text-gray-600 mb-4">{club.description}</p>
              <h4 className="font-semibold mb-2">Upcoming Events:</h4>
              <ul className="list-disc list-inside text-gray-700">
                {club.events.map((event) => (
                  <li key={event}>{event}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Events Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Recent Events</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <EventCard
            title="Tech Summit 2024"
            date="March 15-16, 2024"
            description="Annual technology conference featuring industry experts and workshops"
            club="IEEE & ACM"
          />
          <EventCard
            title="Cyber Security Workshop"
            date="March 20, 2024"
            description="Hands-on workshop on ethical hacking and network security"
            club="CyberSpace"
          />
          <EventCard
            title="App Development Bootcamp"
            date="March 25-27, 2024"
            description="Three-day intensive mobile app development training"
            club="Google Developers Club"
          />
        </div>
      </section>
    </div>
  );
}

export default Home;