import { Calendar, DollarSign } from 'lucide-react';

function Specials() {
  const weeklySpecials = [
    {
      day: 'Monday',
      deal: '2 Drafts + Large Pizza',
      price: '$15',
      description: 'Start your week right with our unbeatable combo',
    },
    {
      day: 'Tuesday',
      deal: 'Tacos',
      price: '$1.99 each',
      description: 'Taco Tuesday is a Fort Thomas tradition',
    },
    {
      day: 'Wednesday',
      deal: 'Hot Wings',
      price: '$1 each',
      description: 'Our famous wings at an incredible price',
    },
    {
      day: 'Thursday',
      deal: 'Trivia Night',
      price: 'Free to Play',
      description: 'Test your knowledge and win prizes',
    },
  ];

  return (
    <section id="specials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Calendar className="w-12 h-12 text-red-700 mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">Weekly Specials</h2>
          <p className="text-xl text-neutral-700 max-w-2xl mx-auto">
            Great deals every day of the week. There's always a reason to visit!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {weeklySpecials.map((special, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-red-700 to-red-900 rounded-lg p-6 text-white hover:transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold">{special.day}</h3>
                <DollarSign className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-semibold mb-2">{special.deal}</h4>
              <p className="text-3xl font-bold mb-3">{special.price}</p>
              <p className="text-red-100 text-sm">{special.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-neutral-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-neutral-900 mb-3">Don't Miss Out!</h3>
          <p className="text-neutral-700 mb-6">
            Join our mailing list to get weekly specials and exclusive offers delivered to your inbox
          </p>
          <form className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full border-2 border-neutral-300 focus:border-red-700 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-red-700 text-white px-6 py-3 rounded-full hover:bg-red-800 transition-all duration-300 font-semibold"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Specials;
