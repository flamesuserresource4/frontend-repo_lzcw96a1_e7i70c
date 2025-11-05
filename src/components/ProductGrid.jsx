import React from 'react';
import ProductCard from './ProductCard';

const defaultProducts = [
  {
    id: '1',
    name: 'Monstera Deliciosa',
    category: 'Indoor Plant',
    price: 129.9,
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1587339144364-453b0f3c9a5d?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: '2',
    name: 'Snake Plant',
    category: 'Low-light Plant',
    price: 89.0,
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: '3',
    name: 'Fiddle Leaf Fig',
    category: 'Statement Plant',
    price: 159.0,
    rating: 4.6,
    image:
      'https://images.unsplash.com/photo-1601379329542-e7f4b89c84ea?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: '4',
    name: 'Terracotta Pot (Large)',
    category: 'Planter',
    price: 49.0,
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1585857188431-1cfebd675155?q=80&w=1600&auto=format&fit=crop',
  },
];

function ProductGrid({ products = defaultProducts, onAdd }) {
  return (
    <section id="shop" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-end justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Best sellers</h2>
          <p className="text-gray-600">Handpicked favorites from our community</p>
        </div>
        <a href="#" className="text-green-700 font-medium hover:underline">View all</a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} onAdd={onAdd} />)
        )}
      </div>
    </section>
  );
}

export default ProductGrid;
