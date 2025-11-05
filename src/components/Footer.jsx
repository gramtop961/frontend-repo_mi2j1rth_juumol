export default function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-3 gap-8 text-sm">
          <div>
            <h4 className="font-semibold text-neutral-900">sugardady</h4>
            <p className="mt-2 text-neutral-600">A modern chocolate house crafting moments of pure joy. One bite, and you’ll know.</p>
          </div>
          <div>
            <h5 className="font-medium text-neutral-900">Shop</h5>
            <ul className="mt-2 space-y-2 text-neutral-600">
              <li><a href="#products" className="hover:text-neutral-900">Chocolates</a></li>
              <li><a href="#story" className="hover:text-neutral-900">Gifting</a></li>
              <li><a href="#reviews" className="hover:text-neutral-900">Corporate</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium text-neutral-900">Company</h5>
            <ul className="mt-2 space-y-2 text-neutral-600">
              <li><a href="#story" className="hover:text-neutral-900">Our Story</a></li>
              <li><a href="#" className="hover:text-neutral-900">Sustainability</a></li>
              <li><a href="#" className="hover:text-neutral-900">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} sugardady. All rights reserved.</p>
          <div className="flex items-center gap-4 mt-2 sm:mt-0">
            <a href="#" className="hover:text-neutral-800">Privacy</a>
            <a href="#" className="hover:text-neutral-800">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
