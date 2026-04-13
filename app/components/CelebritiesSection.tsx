"use client";
import { useState, Fragment } from "react";

const categories = [
  { id: "tollywood", name: "Tollywood Celebrities" },
  { id: "tv", name: "TV & Serial Actresses" },
  { id: "biggboss", name: "Bigg Boss Celebrities" },
  { id: "influencers", name: "Trending Influencers" },
];

const celebritiesData: Record<string, { name: string; image: string }[]> = {
  "tollywood": [
    { name: "", image: "https://res.cloudinary.com/dhe3ay2ry/image/upload/v1776073276/IMG_20250309_211245_j56bdu.jpg" },
    { name: "", image: "https://res.cloudinary.com/dhe3ay2ry/image/upload/v1776073275/InShot_20250520_234043259_rv5njq.jpg" },
    { name: "", image: "https://res.cloudinary.com/dhe3ay2ry/image/upload/v1776073275/IMG_20250308_200433-1_eza8d1.jpg" },
    { name: "", image: "https://res.cloudinary.com/dhe3ay2ry/image/upload/v1776073274/IMG_20250308_195903_taiaej.jpg" },
    { name: "", image: "https://res.cloudinary.com/dhe3ay2ry/image/upload/v1776073272/IMG_20250624_174701_fgs8wr.jpg" },
    { name: "", image: "https://res.cloudinary.com/dhe3ay2ry/image/upload/v1776073272/IMG_20250624_171256_usg9pr.jpg" },
    { name: "", image: "https://res.cloudinary.com/dhe3ay2ry/image/upload/v1776073271/IMG_20250616_002622_th5qns.jpg" },
    { name: "", image: "https://res.cloudinary.com/dhe3ay2ry/image/upload/v1776073271/IMG_20250628_092932_jw980j.jpg" },
    { name: "", image: "https://res.cloudinary.com/dhe3ay2ry/image/upload/v1776073269/IMG_20250817_083846_jv3wll.jpg" },
    { name: "", image: "https://res.cloudinary.com/dhe3ay2ry/image/upload/v1776073268/IMG_20250817_084449_xxvra3.jpg" },
    { name: "", image: "https://res.cloudinary.com/dhe3ay2ry/image/upload/v1776073267/IMG_20250817_084515_ketfa8.jpg" },
    { name: "", image: "https://res.cloudinary.com/dhe3ay2ry/image/upload/v1776073265/InShot_20250520_232949965_yb910q.jpg" },
    { name: "", image: "https://res.cloudinary.com/dhe3ay2ry/image/upload/v1776073264/IMG-20250127-WA0166_edggk6.jpg" },
    { name: "", image: "https://res.cloudinary.com/dhe3ay2ry/image/upload/v1776073264/InShot_20250520_232547726_bnvede.jpg" },
    { name: "", image: "https://res.cloudinary.com/dhe3ay2ry/image/upload/v1776073264/IMG-20250127-WA0225_1_kgwsmh.jpg" },
    { name: "", image: "https://res.cloudinary.com/dhe3ay2ry/image/upload/v1776073262/InShot_20250521_000019070_srw41a.jpg" }
  ],
  "tv": [
    { name: "", image: "https://res.cloudinary.com/dhe3ay2ry/image/upload/v1776074763/IMG_20250817_085809_ru6mon.jpg" },
    { name: "", image: "https://res.cloudinary.com/dhe3ay2ry/image/upload/v1776074762/IMG_20240808_000349_vny5l3.jpg" },
    { name: "", image: "https://res.cloudinary.com/dhe3ay2ry/image/upload/v1776074761/IMG_20250308_230232_vt9uvp.jpg" },
    { name: "", image: "https://res.cloudinary.com/dhe3ay2ry/image/upload/v1776074760/IMG_20250310_140920_eultid.jpg" },
    { name: "", image: "https://res.cloudinary.com/dhe3ay2ry/image/upload/v1776074758/IMG_20250312_143315_iy0vxe.jpg" },
    { name: "", image: "https://res.cloudinary.com/dhe3ay2ry/image/upload/v1776074753/IMG_20250628_092609_sbx0ts.jpg" },
    { name: "", image: "https://res.cloudinary.com/dhe3ay2ry/image/upload/v1776074753/IMG_20250312_225638_dvsfqv.jpg" },
    { name: "", image: "https://res.cloudinary.com/dhe3ay2ry/image/upload/v1776074751/IMG_20260207_005018_qkauja.jpg" },
    { name: "", image: "https://res.cloudinary.com/dhe3ay2ry/image/upload/v1776074749/IMG-20250127-WA0130_uhwm6n.jpg" },
    { name: "", image: "https://res.cloudinary.com/dhe3ay2ry/image/upload/v1776074749/InShot_20250410_002435730_cabast.jpg" },
    { name: "", image: "https://res.cloudinary.com/dhe3ay2ry/image/upload/v1776074748/IMG-20250127-WA0224_ao6wie.jpg" }
  ],
  "biggboss": [
    { name: "", image: "https://res.cloudinary.com/dhe3ay2ry/image/upload/v1776075075/IMG_20260206_152402_hbfjbe.jpg" },
    { name: "", image: "https://res.cloudinary.com/dhe3ay2ry/image/upload/v1776075075/IMG_20260201_233219_btztlx.jpg" },
    { name: "", image: "https://res.cloudinary.com/dhe3ay2ry/image/upload/v1776075077/IMG_20250317_065240_yrfojw.jpg" },
    { name: "", image: "https://res.cloudinary.com/dhe3ay2ry/image/upload/v1776075078/IMG_20250309_232615_fwosxw.jpg" },
    { name: "", image: "https://res.cloudinary.com/dhe3ay2ry/image/upload/v1776075080/IMG_20250308_232827-1_ikzknv.jpg" },
    { name: "", image: "https://res.cloudinary.com/dhe3ay2ry/image/upload/v1776075081/IMG_20250308_232104_igy4i8.jpg" },
    { name: "", image: "https://res.cloudinary.com/dhe3ay2ry/image/upload/v1776075083/IMG_20250622_193541_h3fk02.jpg" },
    { name: "", image: "https://res.cloudinary.com/dhe3ay2ry/image/upload/v1776075082/IMG_20260201_233000_ozaeby.jpg" },
    { name: "", image: "https://res.cloudinary.com/dhe3ay2ry/image/upload/v1776075084/IMG_20250313_002041-1_ll9x77.jpg" }
  ],
  "influencers": [
    { name: "", image: "https://res.cloudinary.com/dhe3ay2ry/image/upload/v1776075251/InShot_20250606_003348078_dypnyd.jpg" },
    { name: "", image: "https://res.cloudinary.com/dhe3ay2ry/image/upload/v1776075251/InShot_20250521_110124299_kivs24.jpg" },
    { name: "", image: "https://res.cloudinary.com/dhe3ay2ry/image/upload/v1776075254/IMG_20260208_000929_oq6twb.jpg" },
    { name: "", image: "https://res.cloudinary.com/dhe3ay2ry/image/upload/v1776075253/IMG_20260207_004628_jtjh67.jpg" },
    { name: "", image: "https://res.cloudinary.com/dhe3ay2ry/image/upload/v1776075261/IMG_20250624_172302_m3rnpk.jpg" },
    { name: "", image: "https://res.cloudinary.com/dhe3ay2ry/image/upload/v1776075267/IMG_20250616_004800_yjunzw.jpg" },
    { name: "", image: "https://res.cloudinary.com/dhe3ay2ry/image/upload/v1776075271/IMG_20250309_212334_bzah8e.jpg" },
    { name: "", image: "https://res.cloudinary.com/dhe3ay2ry/image/upload/v1776075271/IMG_20250308_190744_vjkevl.jpg" },
    { name: "", image: "https://res.cloudinary.com/dhe3ay2ry/image/upload/v1776075274/IMG_20250615_235234_cm6gn6.jpg" },
    { name: "", image: "https://res.cloudinary.com/dhe3ay2ry/image/upload/v1776075274/IMG_20250310_171547_um60uc.jpg" }
  ]
};

const getOptimizedUrl = (url: string) => {
  if (url && url.includes('cloudinary.com') && url.includes('/upload/')) {
    // Add aggressive optimization parameters: webp/avif auto-format, auto quality, and resize to 500px width.
    return url.replace('/upload/', '/upload/w_500,q_auto,f_auto/');
  }
  return url;
};

export default function CelebritiesSection() {
  const [activeCategory, setActiveCategory] = useState<string>("tollywood");

  const handleWhatsApp = (celebName: string, categoryName: string) => {
    // You can adjust the phone number if needed
    const phoneNumber = "919618880475"; 
    const text = encodeURIComponent(`Hi, I am interested in booking${celebName ? ` ${celebName}` : " a celebrity"} from the ${categoryName} category. Please provide more details.`);
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
  };

  return (
    <section id="celebrities" className="py-24 bg-[#0B0B0B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Our <span className="text-[var(--color-gold)]">Celebrities</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Explore our wide range of celebrities across different categories ready to elevate your event or brand.</p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent mx-auto mt-6"></div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10 w-full">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 sm:px-8 sm:py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base ${
                activeCategory === cat.id
                  ? "bg-[var(--color-gold)] text-black shadow-[0_0_20px_rgba(212,175,55,0.4)] transform scale-105"
                  : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Gallery */}
        <div className="bg-[var(--color-dark-card)] rounded-3xl p-6 sm:p-10 border border-white/10 relative overflow-hidden animate-in fade-in duration-500 min-h-[400px]">
           <div className="absolute top-0 right-0 -m-32 w-64 h-64 bg-[var(--color-gold)]/10 blur-[100px] rounded-full pointer-events-none"></div>
           
           <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-white border-l-4 border-[var(--color-gold)] pl-4">
                {categories.find(c => c.id === activeCategory)?.name || "Select a Category"}
              </h3>
              
              <div className="hidden sm:flex text-[var(--color-gold)] text-sm items-center gap-2 opacity-70">
                <svg className="w-5 h-5 animate-bounce-x" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                <span>Swipe to explore</span>
              </div>
           </div>

           <div className="flex overflow-x-auto gap-4 sm:gap-6 pb-6 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
              {(celebritiesData[activeCategory] || []).map((celeb, idx) => (
                <div key={idx} className="w-[75vw] sm:w-[40vw] md:w-[30vw] lg:w-[280px] xl:w-[300px] flex-shrink-0 snap-center sm:snap-start bg-black/50 rounded-2xl overflow-hidden border border-white/5 hover:border-white/20 transition-all group shadow-lg">
                  <div className="aspect-[3/4] bg-gray-900 relative">
                     {celeb.image ? (
                        <img src={getOptimizedUrl(celeb.image)} loading="lazy" alt={celeb.name} className="w-full h-full object-cover bg-gray-800" />
                     ) : (
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500 p-4 text-center">
                          <svg className="w-12 h-12 mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                          <span className="text-sm">Image Coming Soon</span>
                        </div>
                     )}
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-5">
                    {celeb.name && <h4 className="text-xl font-bold text-white mb-4 text-center">{celeb.name}</h4>}
                    <button
                      onClick={() => handleWhatsApp(celeb.name, categories.find(c => c.id === activeCategory)?.name || "")}
                      className="w-full flex items-center justify-center py-2.5 px-4 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                      Book via WhatsApp
                    </button>
                  </div>
                </div>
              ))}
           </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes bounce-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }
        .animate-bounce-x {
          animation: bounce-x 1.5s infinite;
        }
      `}} />
    </section>
  );
}
