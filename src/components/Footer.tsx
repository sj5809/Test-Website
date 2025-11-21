import { Facebook, Pizza } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Pizza className="w-8 h-8 text-red-600" />
              <span className="text-white font-bold text-xl">Fort Thomas Pizza & Tavern</span>
            </div>
            <p className="text-neutral-400">
              Your neighborhood gathering spot since 1968. Great food, cold drinks, and good times.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#menu" className="hover:text-red-500 transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#specials" className="hover:text-red-500 transition-colors">
                  Weekly Specials
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-red-500 transition-colors">
                  Private Events
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-red-500 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Connect With Us</h3>
            <p className="text-neutral-400 mb-4">
              Follow us on Facebook for daily specials, events, and updates!
            </p>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-red-700 text-white px-4 py-2 rounded-full hover:bg-red-800 transition-all duration-300"
            >
              <Facebook className="w-5 h-5" />
              <span>Follow Us</span>
            </a>
            <p className="text-neutral-500 text-sm mt-4">
              Don't forget: Thursday Trivia Night starts at 7pm!
            </p>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 text-center text-neutral-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Fort Thomas Pizza & Tavern. All rights reserved. | 1109 S Ft Thomas Ave, Fort Thomas, KY 41075 | (859) 441-5030
          </p>
          <p className="mt-2">Your home away from home since 1968</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
