import { ShoppingBag, Star } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-semibold text-neutral-900">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-amber-500 via-rose-400 to-pink-500 flex items-center justify-center text-white shadow-sm">
            <Star size={16} />
          </div>
          <span className="text-lg tracking-tight">sugardady</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-700">
          <a href="#products" className="hover:text-neutral-900 transition-colors">Chocolates</a>
          <a href="#story" className="hover:text-neutral-900 transition-colors">Our Story</a>
          <a href="#reviews" className="hover:text-neutral-900 transition-colors">Reviews</a>
        </nav>
        <button className="inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white px-4 py-2 text-sm shadow hover:bg-neutral-800 transition-colors">
          <ShoppingBag size={18} />
          Shop Now
        </button>
      </div>
    </header>
  );
}
