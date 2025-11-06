import React from 'react';
import { ShoppingCart, Search } from 'lucide-react';

function Navbar({ businessName, cartCount, onCartToggle, search, onSearchChange }) {
  return (
    <header dir="rtl" className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-green-100 text-green-700 font-bold">🌿</span>
          <span className="text-xl font-extrabold tracking-tight text-gray-800">{businessName}</span>
        </div>

        <div className="flex-1" />

        <label className="relative hidden sm:block w-full max-w-md">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            dir="rtl"
            type="text"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="חיפוש צמחים, קטגוריות..."
            className="w-full rounded-xl border border-gray-300 bg-white pr-10 pl-4 py-2 text-right text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </label>

        <button
          onClick={onCartToggle}
          className="relative ml-2 inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 active:scale-95 transition"
        >
          <ShoppingCart className="h-5 w-5 text-gray-600" />
          <span>עגלה</span>
          {cartCount > 0 && (
            <span className="absolute -top-2 -left-2 min-w-[1.5rem] h-6 rounded-full bg-green-600 px-2 text-white text-xs grid place-items-center">
              {cartCount}
            </span>
          )}
        </button>
      </div>

      <div className="sm:hidden px-4 pb-3">
        <label className="relative block">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            dir="rtl"
            type="text"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="חיפוש צמחים, קטגוריות..."
            className="w-full rounded-xl border border-gray-300 bg-white pr-10 pl-4 py-2 text-right text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </label>
      </div>
    </header>
  );
}

export default Navbar;
