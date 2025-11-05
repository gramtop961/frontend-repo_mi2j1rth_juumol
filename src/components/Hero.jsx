import { Heart, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-amber-50 to-white" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-28 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-rose-100 text-rose-700 px-3 py-1 text-xs font-medium mb-4">
              <Sparkles size={14} />
              Handcrafted with love
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 leading-tight">
              Indulge in the art of chocolate with sugardady
            </h1>
            <p className="mt-4 text-lg text-neutral-700 max-w-xl">
              Small-batch cocoa, ethically sourced, expertly tempered. From silky truffles to crunchy pralines — each bite is a love letter to your taste buds.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#products" className="inline-flex items-center justify-center rounded-full bg-neutral-900 text-white px-6 py-3 text-sm font-medium shadow hover:bg-neutral-800 transition-colors">
                Explore Chocolates
              </a>
              <a href="#story" className="inline-flex items-center justify-center rounded-full border border-neutral-300 text-neutral-900 px-6 py-3 text-sm font-medium bg-white hover:bg-neutral-50 transition-colors">
                Our Promise
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-neutral-600">
              <div className="flex items-center gap-2">
                <Heart className="text-rose-500" size={18} />
                <span>Vegan-friendly options</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-amber-500" />
                <span>Fair-trade cocoa</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative mx-auto w-full max-w-sm sm:max-w-md aspect-square rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-700 p-6 shadow-2xl">
              <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10" />
              <div className="h-full w-full rounded-2xl bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.14),transparent_40%)] flex items-center justify-center">
                <div className="grid grid-cols-2 gap-3 w-[88%]">
                  <div className="aspect-square rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 shadow-inner" />
                  <div className="aspect-square rounded-xl bg-gradient-to-br from-rose-400 to-rose-600 shadow-inner" />
                  <div className="aspect-square rounded-xl bg-gradient-to-br from-stone-500 to-stone-700 shadow-inner" />
                  <div className="aspect-square rounded-xl bg-gradient-to-br from-fuchsia-400 to-pink-600 shadow-inner" />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-rose-300/30 blur-2xl" />
            <div className="pointer-events-none absolute -top-6 -right-6 h-32 w-32 rounded-full bg-amber-300/30 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
