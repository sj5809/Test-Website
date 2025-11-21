import { Clock, Users, Music } from 'lucide-react';

function About() {
  const features = [
    {
      icon: Clock,
      title: 'Since 1968',
      description: 'Over 55 years of serving Fort Thomas',
    },
    {
      icon: Users,
      title: 'Family Friendly',
      description: 'A welcoming atmosphere for all ages',
    },
    {
      icon: Music,
      title: 'Live Entertainment',
      description: 'Music, karaoke, and trivia nights',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900">
              A Fort Thomas Tradition
            </h2>
            <p className="text-lg text-neutral-700 leading-relaxed">
              Since 1968, Fort Thomas Pizza & Tavern has been the heart of our community. We're more than just a restaurant—we're your neighborhood gathering spot where families come together, friends catch the game, and memories are made over great food and cold drinks.
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed">
              From our signature pizzas and wings to live music and karaoke nights, we pride ourselves on creating a warm, inviting atmosphere where everyone feels at home. Whether you're here for our famous Monday special or Thursday trivia night, you're part of the family.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-neutral-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <feature.icon className="w-10 h-10 text-red-700 mb-4" />
                <h3 className="text-xl font-bold text-neutral-900 mb-2">{feature.title}</h3>
                <p className="text-neutral-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
