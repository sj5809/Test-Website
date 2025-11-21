import { MapPin, Phone, Clock, Mail } from 'lucide-react';

function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      detail: '1109 S Ft Thomas Ave',
      detail2: 'Fort Thomas, KY 41075',
    },
    {
      icon: Phone,
      title: 'Phone',
      detail: '(859) 441-5030',
      detail2: 'Call for takeout & reservations',
    },
    {
      icon: Clock,
      title: 'Hours',
      detail: 'Mon-Thu: 11am-11pm',
      detail2: 'Fri-Sat: 11am-12am, Sun: 12pm-10pm',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Visit Us Today</h2>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
            Stop by for lunch, dinner, or drinks. We're always happy to see you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-neutral-800 p-6 rounded-lg hover:bg-neutral-700 transition-all duration-300 flex items-start space-x-4"
              >
                <div className="bg-red-700 p-3 rounded-lg">
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{info.title}</h3>
                  <p className="text-neutral-300">{info.detail}</p>
                  {info.detail2 && <p className="text-neutral-400 text-sm mt-1">{info.detail2}</p>}
                </div>
              </div>
            ))}

            <div className="bg-gradient-to-r from-red-700 to-red-900 p-8 rounded-lg text-white">
              <Mail className="w-8 h-8 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Get In Touch</h3>
              <p className="mb-4">Questions about catering, events, or our menu? We'd love to hear from you!</p>
              <a
                href="tel:859-441-5030"
                className="inline-block bg-white text-red-900 px-6 py-3 rounded-full hover:bg-neutral-100 transition-all duration-300 font-semibold"
              >
                Call Us Now
              </a>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-2xl h-96 lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3091.8896824437!2d-84.45089!3d39.07556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8841b3e5e5e5e5e5%3A0x0!2s1109%20S%20Ft%20Thomas%20Ave%2C%20Fort%20Thomas%2C%20KY%2041075!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Fort Thomas Pizza & Tavern Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
