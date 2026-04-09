const services = [
  {
    title: "Celebrity Promotion Videos",
    description: "Short reels with real celebrities",
    features: [
      "Indoor shoot (budget-friendly)",
      "₹3,000 – ₹25,000",
      "No Instagram posting",
      "No store visit"
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[var(--color-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "Celebrity Store Visits",
    description: "Celebrity visits your business",
    features: [
      "Shoot at your location",
      "Starting ₹35,000+",
      "No Instagram posting"
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[var(--color-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    title: "Shop Openings & Events",
    description: "Celebrity guest coordination",
    features: [
      "Openings, launches, events",
      "Starting ₹75,000+",
      "Transport & stay extra"
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[var(--color-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )
  },
  {
    title: "Celebrity Wishes",
    description: "Birthday / Anniversary / Congrats",
    features: [
      "Delivered within 24 hours",
      "100% real celebrities"
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[var(--color-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
      </svg>
    )
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Our Core <span className="text-[var(--color-gold)]">Services</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="group flex flex-col bg-[var(--color-dark-card)] rounded-2xl p-8 border border-white/5 hover:border-[var(--color-gold)]/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(212,175,55,0.1)]">
              <div className="w-16 h-16 rounded-full bg-[var(--color-gold)]/10 flex items-center justify-center mb-6 group-hover:bg-[var(--color-gold)]/20 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm mb-6 flex-grow">{service.description}</p>

              <ul className="mb-8 space-y-3 flex-grow">
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start text-sm text-gray-300">
                    <svg className="w-5 h-5 text-[var(--color-gold)] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <a href="#book" className="mt-auto flex items-center justify-center w-full py-3 px-4 rounded-lg border border-[var(--color-gold)]/50 text-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-black font-semibold transition-all group-hover:bg-[var(--color-gold)] group-hover:text-black">
                Book Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
