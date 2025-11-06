import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Controls({ allCategories, selectedCategories, onToggleCategory, sort, onSortChange }) {
  return (
    <div id="categories" dir="rtl" className="flex flex-wrap items-center justify-between gap-3">
      <div className="flex flex-wrap gap-2">
        {allCategories.map((cat) => {
          const active = selectedCategories.includes(cat);
          return (
            <button
              key={cat}
              onClick={() => onToggleCategory(cat)}
              className={`rounded-full px-4 py-2 text-sm border transition ${
                active ? 'bg-green-600 text-white border-green-600' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      <label className="inline-flex items-center gap-2 text-sm text-gray-700">
        <span>מיון לפי:</span>
        <select
          value={sort}
          onChange={(e) => onSortChange(e.target.value)}
          className="rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="popular">פופולריות</option>
          <option value="price-asc">מחיר: מהזול ליקר</option>
          <option value="price-desc">מחיר: מהיקר לזול</option>
          <option value="name">שם מוצר</option>
        </select>
      </label>
    </div>
  );
}

function ProductGrid({ products, allCategories, selectedCategories, onToggleCategory, sort, onSortChange, onAdd, formatPrice }) {
  return (
    <section id="shop" className="mx-auto max-w-6xl px-4 py-12">
      <Controls
        allCategories={allCategories}
        selectedCategories={selectedCategories}
        onToggleCategory={onToggleCategory}
        sort={sort}
        onSortChange={onSortChange}
      />

      <AnimatePresence mode="popLayout">
        <motion.div
          layout
          className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {products.map((p) => (
            <motion.div key={p.id} layout>
              <ProductCard product={p} onAdd={onAdd} formatPrice={formatPrice} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

import ProductCard from './ProductCard';
export default ProductGrid;
