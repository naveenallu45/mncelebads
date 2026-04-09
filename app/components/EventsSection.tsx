const events = [
  {
    location: "Warangal",
    brand: "December Delights Cafe",
    celebrity: "Actress Faria Abdulla",
    description: "Grand opening of the premium cafe with massive crowd gathering and media coverage.",
  },
  {
    location: "Hyderabad",
    brand: "Sweet Tone Sweet Shop",
    celebrity: "Actress Ananya Nagalla",
    description: "Launch event driving heavy footfall and extensive social media buzz.",
  },
  {
    location: "Karimnagar",
    brand: "Dolphin Hospital",
    celebrity: "Actress Mehreen Pirzada",
    description: "Inauguration ceremony adding immense trust and prestige to the institution.",
  }
];

export default function EventsSection() {
  return (
    <section id="events" className="py-24 bg-[#121212]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Real Celebrity <span className="text-[var(--color-gold)]">Events & Openings</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {events.map((event, idx) => (
            <div key={idx} className="group bg-black rounded-2xl overflow-hidden border border-white/5 hover:border-[var(--color-gold)]/50 transition-all duration-300">
              {/* Image Placeholder intended for REAL client images */}
              <div className="w-full h-64 bg-[#1a1a1a] relative group-hover:bg-[#222] transition-colors flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                <span className="text-gray-600 font-heading text-sm uppercase tracking-widest z-0">
                  Client Image
                </span>

                {/* Overlay Location Badge */}
                <div className="absolute bottom-4 left-4 z-20 flex items-center bg-[var(--color-gold)] text-black px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                  {event.location}
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{event.brand}</h3>
                <div className="inline-block px-3 py-1 bg-white/5 rounded-md border border-[var(--color-gold)]/20 text-[var(--color-gold)] font-medium text-sm mb-4">
                  With {event.celebrity}
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
