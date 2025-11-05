import { Leaf, Star } from "lucide-react";

const products = [
  {
    name: "Velvet Truffle",
    desc: "70% dark cocoa with Madagascar vanilla",
    tag: "Bestseller",
    color: "from-stone-800 to-stone-600",
  },
  {
    name: "Sea Salt Caramel",
    desc: "Silky caramel with flaky sea salt",
    tag: "Caramel Kiss",
    color: "from-amber-600 to-amber-400",
  },
  {
    name: "Rose Raspberry",
    desc: "White chocolate infused with rose & berry",
    tag: "Floral Dream",
    color: "from-rose-500 to-pink-400",
  },
];

export default function ProductShowcase() {
  return (
    <section id="products" className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">Signature Chocolates</h2>
            <p className="mt-2 text-neutral-600">Thoughtfully crafted, naturally delightful.</p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-full text-xs font-medium">
            <Leaf size={14} />
            Ethically sourced cocoa
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <article key={p.name} className="group rounded-2xl border border-neutral-200 overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className={`h-40 bg-gradient-to-br ${p.color}`} />
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-neutral-900">{p.name}</h3>
                  <span className="inline-flex items-center gap-1 text-amber-600 text-xs font-medium">
                    <Star size={14} /> {p.tag}
                  </span>
                </div>
                <p className="mt-1 text-sm text-neutral-600">{p.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-base font-semibold text-neutral-900">$8</span>
                  <button className="rounded-full px-4 py-2 text-sm bg-neutral-900 text-white hover:bg-neutral-800 transition-colors">Add to cart</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
