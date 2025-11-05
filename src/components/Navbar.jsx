import React from 'react';
import { Leaf, ShoppingCart, Search } from 'lucide-react';

function Navbar({ cartCount = 0, onCartToggle }) {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur border-b">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-green-600 grid place-items-center text-white">
            <Leaf size={20} />
          </div>
          <span className="font-semibold tracking-tight text-xl">Leaf & Root Nursery</span>
        </div>

        <div className="hidden md:flex items-center flex-1 max-w-xl mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search plants, pots, soil, and more..."
              className="w-full pl-10 pr-4 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>

        <button
          onClick={onCartToggle}
          className="relative inline-flex items-center gap-2 rounded-xl border px-3 py-2 hover:bg-gray-50"
          aria-label="Open cart"
        >
          <ShoppingCart size={18} />
          <span className="hidden sm:inline">Cart</span>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 h-5 min-w-[1.25rem] px-1 rounded-full bg-green-600 text-white text-xs grid place-items-center">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
