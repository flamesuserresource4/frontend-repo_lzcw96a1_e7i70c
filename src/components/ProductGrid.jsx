import React from 'react';
import ProductCard from './ProductCard';

function Controls({ allCategories = [], selected = [], onToggle, sort = 'popular', onSortChange }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 mb-6" dir="rtl">
      <div className="flex flex-wrap items-center gap-2 ml-auto">
        {allCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => onToggle?.(cat)}
            className={`px-3 py-1.5 rounded-full border text-sm ${selected.includes(cat) ? 'bg-green-600 text-white border-green-600' : 'hover:bg-gray-50'}`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div>
        <label className="mr-2 text-sm text-gray-600">מיין לפי:</label>
        <select
          value={sort}
          onChange={(e) => onSortChange?.(e.target.value)}
          className="rounded-xl border px-3 py-2 text-sm"
        >
          <option value="popular">פופולריות</option>
          <option value="price_asc">מחיר (נמוך-גבוה)</option>
          <option value="price_desc">מחיר (גבוה-נמוך)</option>
          <option value="name">שם</option>
        </select>
      </div>
    </div>
  );
}

function ProductGrid({ products = [], onAdd, allCategories = [], selectedCategories = [], onToggleCategory, sort, onSortChange, formatPrice }) {
  return (
    <section id="shop" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12" dir="rtl">
      <div className="flex items-end justify-between mb-6">
        <div className="text-right ml-auto">
          <h2 className="text-2xl font-bold tracking-tight">הנמכרים ביותר</h2>
          <p className="text-gray-600">המועדפים שנבחרו בקפידה על ידי הקהילה שלנו</p>
        </div>
        <a href="#" className="text-green-700 font-medium hover:underline">הצג הכל</a>
      </div>

      <Controls
        allCategories={allCategories}
        selected={selectedCategories}
        onToggle={onToggleCategory}
        sort={sort}
        onSortChange={onSortChange}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} onAdd={onAdd} formatPrice={formatPrice} />
        ))}
      </div>
    </section>
  );
}

export default ProductGrid;
