export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex items-center min-h-[90vh]">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0 bg-[#0B0B0B]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50 z-0"
        >
          <source src="https://res.cloudinary.com/dhe3ay2ry/video/upload/v1775820032/ananya.nagalla-20250426-0001_iiqnlh.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B]/80 via-[#0B0B0B]/50 to-[#0B0B0B] z-10"></div>
        {/* Subtle glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-[var(--color-gold)]/5 rounded-full blur-[120px] mix-blend-screen z-20"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] bg-white/5 rounded-full blur-[100px] mix-blend-screen z-20"></div>
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGRlZnM+PHBhdHRlcm4gaWQ9ImciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgNDBoNDBWMEgweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZykiLz48LzN2Zz4=')] opacity-20 z-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30 text-center flex flex-col items-center">
        {/* Trust Line Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-gold)]/30 bg-[var(--color-gold)]/5 backdrop-blur-sm mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-[var(--color-gold)] animate-pulse"></span>
          <span className="text-sm font-medium tracking-wide text-[var(--color-gold)]">100% Real Celebrities • No AI • No Fake Videos</span>
        </div>

        <h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight max-w-4xl mx-auto leading-tight md:leading-tight">
          Celebrity Promotion <br className="hidden md:block" />for Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-gold)] to-yellow-200">Business</span>
        </h1>

        <p className="text-lg md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          Promote Your Brand with Real Celebrities Starting from <span className="font-semibold text-white">₹3,000</span>
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a href="https://wa.me/919618880475?text=Hi%2C%20I%20am%20interested%20in%20Celebrity%20Promotions.%20Please%20provide%20more%20details." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex items-center justify-center space-x-2 text-black bg-gradient-to-r from-[var(--color-gold)] to-yellow-400 hover:from-[var(--color-gold-hover)] hover:to-[var(--color-gold)] transition-all px-8 py-4 rounded-full font-bold text-lg shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] hover:-translate-y-1 transform">
            <span>Get Celebrity</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
          <a href="https://wa.me/919618880475?text=Hi%2C%20I%20want%20to%20know%20more%20about%20Celebrity%20Promotions." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex items-center justify-center space-x-2 text-white bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 transition-all px-8 py-4 rounded-full font-bold text-lg hover:-translate-y-1 transform">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.245 3.481 5.232 3.48 8.411-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.657zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            <span>WhatsApp Now</span>
          </a>
        </div>
      </div>
    </section>
  );
}
