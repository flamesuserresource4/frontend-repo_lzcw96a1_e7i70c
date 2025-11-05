import React from 'react';
import { Sprout } from 'lucide-react';

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-green-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-3 py-1 text-sm text-green-700">
            <Sprout size={16} />
            Locally grown • Sustainable • Fresh
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Grow your happy place.
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-prose">
            Discover healthy indoor plants, vibrant outdoor varieties, premium soil, and handcrafted pots. We deliver with care and expert guidance for every plant parent.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#shop" className="inline-flex items-center justify-center rounded-xl bg-green-600 px-5 py-3 text-white font-medium hover:bg-green-700 transition">
              Shop best sellers
            </a>
            <a href="#learn" className="inline-flex items-center justify-center rounded-xl border px-5 py-3 font-medium hover:bg-gray-50 transition">
              Plant care guide
            </a>
          </div>
        </div>
        <div className="relative aspect-[4/3] w-full rounded-2xl bg-[url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center shadow-xl" aria-hidden="true">
          <div className="absolute inset-0 rounded-2xl ring-1 ring-black/5" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
