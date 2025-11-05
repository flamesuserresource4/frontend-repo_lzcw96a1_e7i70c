import React from 'react';
import { Star } from 'lucide-react';

function ProductCard({ product, onAdd }) {
  return (
    <div className="group rounded-2xl border bg-white overflow-hidden hover:shadow-lg transition" dir="rtl">
      <div className="aspect-square w-full bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="text-right">
            <h3 className="font-semibold text-gray-900 leading-snug">{product.name}</h3>
            <p className="text-sm text-gray-500">{product.category}</p>
          </div>
          <div className="flex items-center gap-1 text-amber-500">
            <Star size={16} fill="currentColor" />
            <span className="text-sm font-medium">{product.rating.toFixed(1)}</span>
          </div>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-lg font-semibold">₪{product.price.toFixed(2)}</span>
          <button
            onClick={() => onAdd(product)}
            className="rounded-xl bg-green-600 px-3 py-2 text-sm font-medium text-white hover:bg-green-700"
          >
            הוסף לעגלה
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
