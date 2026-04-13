export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0a0a0a]">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[var(--color-gold)]/10 blur-[150px] z-0 rounded-full"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="border border-[var(--color-gold)]/20 p-12 md:p-20 rounded-3xl bg-[#0B0B0B]/80 backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
            From Small Businesses to Big Brands <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-gold)] to-yellow-600">
              We Deliver Results
            </span>
          </h2>

          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Start your celebrity promotion today and grow your brand faster.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="https://wa.me/919618880475?text=Hi%2C%20I%20want%20to%20know%20more%20about%20Celebrity%20Promotions." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex items-center justify-center space-x-2 text-white bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/50 transition-all px-8 py-4 rounded-full font-bold text-lg hover:-translate-y-1 transform">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.245 3.481 5.232 3.48 8.411-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.657zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span>WhatsApp Now</span>
            </a>

            <a href="tel:+919618880475" className="w-full sm:w-auto flex items-center justify-center space-x-2 text-black bg-[var(--color-gold)] hover:bg-[var(--color-gold-hover)] transition-all px-8 py-4 rounded-full font-bold text-lg hover:-translate-y-1 transform">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Call Now</span>
            </a>

            <a href="#services" className="w-full sm:w-auto flex items-center justify-center space-x-2 text-white bg-transparent hover:bg-white/5 border border-white/20 transition-all px-8 py-4 rounded-full font-bold text-lg hover:-translate-y-1 transform">
              <span>Book Celebrity</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
