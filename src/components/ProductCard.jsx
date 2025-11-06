import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

function ProductCard({ product, onAdd, formatPrice }) {
  return (
    <motion.div
      dir="rtl"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="group rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-4 text-right">
        <div className="flex items-center justify-between gap-2">
          <p className="text-xs text-gray-500">{product.category}</p>
          <div className="flex items-center gap-1 text-amber-500" aria-label={`דירוג ${product.rating}`}>
            <Star className="h-4 w-4 fill-current" />
            <span className="text-xs text-gray-600">{product.rating.toFixed(1)}</span>
          </div>
        </div>
        <h3 className="mt-1 text-gray-900 font-semibold">{product.name}</h3>
        <div className="mt-3 flex items-center justify-between gap-2">
          <span className="text-lg font-bold text-gray-900">{formatPrice(product.price)}</span>
          <button
            onClick={() => onAdd(product)}
            className="inline-flex items-center justify-center rounded-xl bg-green-600 text-white px-3 py-2 text-sm font-semibold hover:bg-green-700 active:scale-95 transition"
          >
            הוסף לעגלה
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default ProductCard;
