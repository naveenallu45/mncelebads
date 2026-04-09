const brands = [
  "Raymond",
  "Partha Dental Clinic",
  "Vega Jewellers",
  "Delhi Public School",
  "Chandana Grand",
  "Big C"
];

export default function TrustSection() {
  return (
    <section className="py-24 bg-[#0B0B0B] border-y border-[var(--color-gold)]/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGRlZnM+PHBhdHRlcm4gaWQ9ImciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgNDBoNDBWMEgweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDIxMiwxNzUsNTUsMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNnKSIvPjwvc3ZnPg==')] opacity-30 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
          Trusted by <span className="text-[var(--color-gold)]">Leading Brands</span>
        </h2>

        <p className="max-w-2xl mx-auto text-lg text-gray-400 mb-16">
          We have delivered successful celebrity promotions for top brands and growing businesses across Telugu states.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-center opacity-80">
          {brands.map((brand, idx) => (
            <div key={idx} className="flex items-center justify-center h-20 px-4 filter grayscale hover:grayscale-0 transition-all duration-500">
              <span className="font-heading font-bold text-xl md:text-2xl text-white/70 hover:text-[var(--color-gold)] tracking-wider uppercase text-center block w-full leading-tight">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
