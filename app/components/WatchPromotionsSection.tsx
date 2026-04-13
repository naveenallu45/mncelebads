export default function WatchPromotionsSection() {
  const videos = [
    "https://www.youtube.com/embed/6rdzahYW47s?si=33MxZ04yCJJvxyZP",
    "https://www.youtube.com/embed/ADfHic_AWVo?si=Wu2LqldVNb2gRQT0",
    "https://www.youtube.com/embed/wp5tHj9dJN0?si=zsh48WDN4GsASnDz"
  ];

  return (
    <section id="watch-promotions" className="py-24 bg-[#0B0B0B] border-y border-[var(--color-gold)]/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGRlZnM+PHBhdHRlcm4gaWQ9ImciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgNDBoNDBWMEgweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDIpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZykiLz48L3N2Zz4=')] opacity-20 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
            Watch Real <span className="text-[var(--color-gold)]">Celebrity Promotions</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-400">
            See our previous work and successful brand campaigns featuring top celebrities.
          </p>
        </div>

        {/* Mobile: Horizontal scroll, Desktop: 3 columns */}
        <div className="flex overflow-x-auto pb-8 -mx-4 px-4 md:pb-0 md:mx-0 md:px-0 md:grid md:grid-cols-3 gap-6 md:gap-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
          {videos.map((src, idx) => (
            <div key={idx} className="w-[85vw] md:w-auto flex-shrink-0 snap-center rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)] group hover:border-[var(--color-gold)]/30 transition-all duration-300">
              <div className="relative w-full pt-[56.25%] bg-black"> {/* 16:9 Aspect Ratio */}
                <iframe 
                  className="absolute inset-0 w-full h-full"
                  src={src} 
                  title={`YouTube video player ${idx + 1}`} 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
