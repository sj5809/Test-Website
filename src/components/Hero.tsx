import { ChevronDown } from 'lucide-react';

function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
        }}
      />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Your Neighborhood Pizza & Tavern Since 1968
        </h1>
        <p className="text-xl md:text-2xl text-neutral-200 mb-8 max-w-2xl mx-auto">
          Family-friendly dining, sports on big screens, live music, and the best pizza in Fort Thomas
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-red-700 text-white px-8 py-4 rounded-full hover:bg-red-800 transition-all duration-300 font-semibold text-lg shadow-xl hover:scale-105 transform"
          >
            Order Online
          </a>
          <a
            href="#menu"
            className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-300 font-semibold text-lg border-2 border-white"
          >
            View Menu
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
}

export default Hero;
