const stats = [
  { value: "15,000+", label: "Promotions Done" },
  { value: "12,000+", label: "Happy Clients" },
  { value: "500+", label: "Celebrities Network" },
  { value: "AP & TS", label: "Serving States" }
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-[#0B0B0B] border-b border-[var(--color-gold)]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center divide-x-0 md:divide-x divide-white/10">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center space-y-2 py-4">
              <span className="text-4xl md:text-5xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-gold)] to-yellow-600">
                {stat.value}
              </span>
              <span className="text-gray-400 font-medium uppercase tracking-wider text-sm">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
