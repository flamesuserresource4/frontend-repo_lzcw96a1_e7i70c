import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <section dir="rtl" className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-green-50 via-white to-white" />

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:py-24 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-right"
        >
          <span className="inline-block rounded-full bg-green-100 text-green-700 px-3 py-1 text-sm font-medium mb-4">
            משתלת הבית שלכם
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
            צמחים שמכניסים חיים לבית ולעסק
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            מגוון עצום של צמחי בית, גינה ועציצים מעוצבים, עם ייעוץ מקצועי ואהבה לטבע.
          </p>
          <div className="mt-8 flex items-center justify-end gap-3">
            <a href="#shop" className="inline-flex items-center justify-center rounded-xl bg-green-600 text-white px-5 py-3 text-sm font-semibold shadow-sm hover:bg-green-700 active:scale-95 transition">
              להתחיל לקנות
            </a>
            <a href="#categories" className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white text-gray-700 px-5 py-3 text-sm font-semibold hover:bg-gray-50 active:scale-95 transition">
              עיון בקטגוריות
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1524594227089-68f0d9a2a5f5?q=80&w=1200&auto=format&fit=crop"
            alt="צמחים ירוקים בעציצים מעוצבים"
            className="w-full rounded-2xl shadow-lg ring-1 ring-black/5"
          />
          <div className="pointer-events-none absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-green-200/50 blur-2xl" />
          <div className="pointer-events-none absolute -top-6 -right-6 h-24 w-24 rounded-full bg-emerald-200/50 blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
