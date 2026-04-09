export default function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-[var(--color-gold)]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="mb-6 md:mb-0">
          <a href="#" className="font-heading font-bold text-2xl tracking-wider text-white inline-block mb-2">
            MN<span className="text-[var(--color-gold)]">CELEB</span>ADS
          </a>
          <p className="text-gray-500 text-sm max-w-xs">
            Premium celebrity advertising and promotional events across Telugu states.
          </p>
        </div>

        <div className="flex space-x-6">
          <a href="#" className="text-gray-400 hover:text-[var(--color-gold)] transition-colors">
            Terms & Conditions
          </a>
          <a href="#" className="text-gray-400 hover:text-[var(--color-gold)] transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-400 hover:text-[var(--color-gold)] transition-colors">
            Contact
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 text-center text-gray-600 text-sm">
        <p>&copy; {new Date().getFullYear()} MN Celebrity Ads. All rights reserved.</p>
      </div>
    </footer>
  );
}
