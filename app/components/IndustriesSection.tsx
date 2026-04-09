const industries = [
  "Schools & Colleges",
  "Real Estate",
  "Hospitals",
  "Jewellery Stores",
  "Retail Shops",
  "Restaurants & Cafes",
  "Startups & Local Businesses"
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="py-24 bg-[#121212]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-12">
          Industries We <span className="text-[var(--color-gold)]">Serve</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {industries.map((industry, idx) => (
            <div
              key={idx}
              className="px-6 py-3 rounded-full bg-black border border-white/10 text-gray-300 font-medium text-lg hover:border-[var(--color-gold)] hover:text-white transition-all duration-300 shadow-sm hover:shadow-[0_0_15px_rgba(212,175,55,0.2)] cursor-default"
            >
              {industry}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
