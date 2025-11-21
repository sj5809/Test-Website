function MenuHighlights() {
  const menuItems = [
    {
      name: 'Signature Pizza',
      description: 'Hand-tossed dough, house-made sauce, premium toppings. A Fort Thomas favorite for over 50 years.',
      image: 'https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Pizza',
    },
    {
      name: 'Hot Wings',
      description: 'Crispy, juicy wings tossed in your choice of sauce. Wednesday special: just $1 each!',
      image: 'https://images.pexels.com/photos/1703272/pexels-photo-1703272.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Appetizers',
    },
    {
      name: 'Tavern Burger',
      description: 'Half-pound Angus beef, topped your way, served with crispy fries. Juicy perfection.',
      image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Burgers',
    },
    {
      name: 'Breakfast All Day',
      description: 'Start any time with our hearty breakfast menu. Eggs, pancakes, and more served daily.',
      image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Breakfast',
    },
  ];

  return (
    <section id="menu" className="py-20 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Menu Highlights</h2>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
            From classic pizzas to hearty burgers, we've got something for everyone
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="bg-neutral-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-red-500 text-sm font-semibold uppercase tracking-wide">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold text-white mt-2 mb-3">{item.name}</h3>
                <p className="text-neutral-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block bg-red-700 text-white px-8 py-3 rounded-full hover:bg-red-800 transition-all duration-300 font-semibold text-lg"
          >
            View Full Menu
          </a>
        </div>
      </div>
    </section>
  );
}

export default MenuHighlights;
