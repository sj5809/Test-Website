import { PartyPopper, Users, Cake } from 'lucide-react';

function Events() {
  const eventTypes = [
    {
      icon: Cake,
      title: 'Birthday Parties',
      description: 'Celebrate another year at your favorite neighborhood spot',
    },
    {
      icon: PartyPopper,
      title: 'Engagement Parties',
      description: 'Toast to your future in our warm, inviting atmosphere',
    },
    {
      icon: Users,
      title: 'Corporate Events',
      description: 'Team building, retirements, and company celebrations',
    },
  ];

  return (
    <section id="events" className="py-20 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Host Your Event With Us
            </h2>
            <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
              Looking for the perfect venue for your celebration? Fort Thomas Pizza & Tavern is available for private events. Whether it's a birthday, engagement, retirement party, or any special occasion, we'll help make it memorable.
            </p>
            <p className="text-lg text-neutral-400 mb-8">
              Our friendly staff will work with you to create a custom menu, arrange seating, and ensure your guests have an amazing time. From intimate gatherings to larger celebrations, we've got you covered.
            </p>
            <a
              href="#contact"
              className="inline-block bg-red-700 text-white px-8 py-3 rounded-full hover:bg-red-800 transition-all duration-300 font-semibold text-lg"
            >
              Plan Your Event
            </a>
          </div>

          <div className="space-y-6">
            {eventTypes.map((event, index) => (
              <div
                key={index}
                className="bg-neutral-800 p-6 rounded-lg hover:bg-neutral-700 transition-all duration-300 flex items-start space-x-4"
              >
                <div className="bg-red-700 p-3 rounded-lg">
                  <event.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                  <p className="text-neutral-300">{event.description}</p>
                </div>
              </div>
            ))}

            <div className="bg-gradient-to-r from-red-700 to-red-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-2">Regular Entertainment</h3>
              <ul className="text-neutral-100 space-y-2">
                <li>• Live Music & Karaoke Nights</li>
                <li>• Thursday Trivia (Free to Play!)</li>
                <li>• Sports on Big Screens</li>
                <li>• Community Events</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Events;
