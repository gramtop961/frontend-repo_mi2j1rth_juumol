import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductShowcase from "./components/ProductShowcase";
import Footer from "./components/Footer";

function StorySection() {
  return (
    <section id="story" className="relative bg-gradient-to-b from-white to-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">Our Story</h2>
          <p className="mt-4 text-neutral-700 leading-relaxed">
            sugardady began as a tiny kitchen experiment and blossomed into a love affair with cacao. We partner directly with small farms, slow-roast our beans, and temper every batch to perfection. The result? Chocolate that melts smoothly, tastes deeply, and makes moments feel special.
          </p>
          <div className="mt-6 grid grid-cols-3 gap-4 text-center">
            <div className="rounded-xl border border-neutral-200 bg-white p-4">
              <div className="text-2xl font-bold text-neutral-900">72h</div>
              <div className="text-xs text-neutral-600">stone ground</div>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white p-4">
              <div className="text-2xl font-bold text-neutral-900">100%</div>
              <div className="text-xs text-neutral-600">traceable beans</div>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white p-4">
              <div className="text-2xl font-bold text-neutral-900">0%</div>
              <div className="text-xs text-neutral-600">artificial flavors</div>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <div className="relative mx-auto w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-200/50 via-rose-200/40 to-white" />
            <div className="absolute inset-6 rounded-2xl bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.6),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.45),transparent_40%)]" />
            <div className="absolute inset-0 flex items-end p-6">
              <div className="w-full h-3/5 rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-700" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewsSection() {
  return (
    <section id="reviews" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">What people say</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {["The creamiest truffle I’ve ever had.", "A gift that actually impresses.", "Rich, balanced, and not too sweet."]
            .map((quote, i) => (
              <blockquote key={i} className="rounded-2xl border border-neutral-200 p-6 bg-neutral-50/60">
                <p className="text-neutral-800">“{quote}”</p>
                <footer className="mt-3 text-xs text-neutral-500">— Happy Customer #{i + 1}</footer>
              </blockquote>
            ))}
        </div>
        <div className="mt-10 flex items-center justify-center">
          <a href="#products" className="rounded-full bg-neutral-900 text-white px-6 py-3 text-sm font-medium hover:bg-neutral-800 transition-colors">Taste the hype</a>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <main>
        <Hero />
        <ProductShowcase />
        <StorySection />
        <ReviewsSection />
      </main>
      <Footer />
    </div>
  );
}
