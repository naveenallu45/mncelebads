import React from 'react';

export default function BudgetSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#0B0B0B] to-[#111111] relative overflow-hidden" id="budget">
      {/* Background accents */}
      <div className="absolute top-1/4 left-0 w-1/3 h-1/2 bg-[var(--color-gold)]/5 blur-[120px] mix-blend-screen z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-gold)]/30 bg-[var(--color-gold)]/5 backdrop-blur-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-[var(--color-gold)] shadow-[0_0_10px_rgba(212,175,55,0.8)] animate-pulse"></span>
            <span className="text-sm font-medium tracking-widest text-[var(--color-gold)] uppercase">India’s Most Trusted Ad Agency</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-gold)] to-yellow-200">MN CELEBRITY ADS</span> & Events
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-300 font-medium tracking-wide">
            Budget-Friendly Celebrity Promotions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {/* Regular Budget */}
          <div className="relative group rounded-2xl p-[1px] bg-gradient-to-b from-white/10 to-transparent hover:from-[var(--color-gold)]/50 transition-all duration-500">
            <div className="absolute inset-0 bg-[var(--color-gold)]/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative h-full bg-[#1A1A1A] rounded-2xl p-8 flex flex-col items-center text-center backdrop-blur-sm border border-white/5">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:border-[var(--color-gold)]/30">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Regular Budget</h3>
              <div className="w-12 h-1 bg-[var(--color-gold)]/30 rounded-full mb-6"></div>
              <div className="text-[var(--color-gold)] font-bold text-2xl tracking-tight">
                ₹4,750 <span className="text-gray-500 text-lg font-normal">to</span> <br className="md:hidden" />₹14,750/-
              </div>
            </div>
          </div>

          {/* Basic Budget */}
          <div className="relative group rounded-2xl p-[1px] bg-gradient-to-b from-[var(--color-gold)] to-[var(--color-gold)]/20 hover:from-yellow-300 transition-all duration-500 transform md:-translate-y-4 shadow-[0_0_30px_rgba(212,175,55,0.15)] hover:shadow-[0_0_40px_rgba(212,175,55,0.3)]">
            <div className="absolute top-0 inset-x-0 h-px w-full bg-gradient-to-r from-transparent via-yellow-200 to-transparent"></div>
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
              <span className="bg-[var(--color-gold)] text-black text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider block whitespace-nowrap shadow-lg">Most Popular 👇</span>
            </div>
            <div className="relative h-full bg-gradient-to-b from-[#221f15] to-[#1A1A1A] rounded-2xl p-8 flex flex-col items-center text-center backdrop-blur-sm">
              <div className="w-16 h-16 rounded-full bg-[var(--color-gold)]/10 flex items-center justify-center mb-6 border border-[var(--color-gold)]/30">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Basic Budget <span className="inline-block md:hidden">👇</span></h3>
              <div className="w-12 h-1 bg-[var(--color-gold)] rounded-full mb-6"></div>
              <div className="text-white font-bold text-3xl tracking-tight">
                ₹24,750 <span className="text-gray-400 text-xl font-normal">to</span> <br className="md:hidden" />₹39,999
              </div>
            </div>
          </div>

          {/* High Budget */}
          <div className="relative group rounded-2xl p-[1px] bg-gradient-to-b from-white/10 to-transparent hover:from-[var(--color-gold)]/50 transition-all duration-500">
            <div className="absolute inset-0 bg-[var(--color-gold)]/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative h-full bg-[#1A1A1A] rounded-2xl p-8 flex flex-col items-center text-center backdrop-blur-sm border border-white/5">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="bg-white/10 text-white border border-white/20 text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider block whitespace-nowrap">Premium 👇</span>
              </div>
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:border-[var(--color-gold)]/30">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">High Budget <span className="inline-block md:hidden">👇</span></h3>
              <div className="w-12 h-1 bg-[var(--color-gold)]/30 rounded-full mb-6"></div>
              <div className="text-[var(--color-gold)] font-bold text-2xl tracking-tight">
                ₹69,999 <span className="text-gray-500 text-lg font-normal">to</span> <br className="md:hidden" />₹1 Lakh+
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-white/5 to-[var(--color-gold)]/10 border border-[var(--color-gold)]/20 rounded-2xl p-8 md:p-10 backdrop-blur-sm text-center relative overflow-hidden group hover:border-[var(--color-gold)]/40 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-gold)]/20 rounded-full blur-3xl"></div>
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
              Mee Budget <span className="text-[var(--color-gold)]">Yenta?</span>
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Mee budget chappandi, <strong className="text-white">celebrity list</strong> ni pampistam, and you can select based on your preference. We'll handle the rest and finalize it.
            </p>
            <a 
              href="https://wa.me/919618880475?text=Hi%2C%20I%20want%20to%20know%20more%20about%20celebrity%20promotion%20budgets." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center space-x-2 text-black bg-gradient-to-r from-[var(--color-gold)] to-yellow-400 hover:from-[var(--color-gold-hover)] hover:to-[var(--color-gold)] transition-all px-8 py-4 rounded-full font-bold shadow-[0_0_15px_rgba(212,175,55,0.4)] hover:shadow-[0_0_25px_rgba(212,175,55,0.6)] hover:-translate-y-1 transform"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.662-2.061-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>Discuss Your Budget</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
