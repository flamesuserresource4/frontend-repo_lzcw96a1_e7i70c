import React from 'react';
import { Sprout } from 'lucide-react';

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-green-50 to-white" dir="rtl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
        <div className="order-2 lg:order-none">
          <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-3 py-1 text-sm text-green-700">
            <Sprout size={16} />
            מגודל מקומי • ידידותי לסביבה • טרי
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight text-right">
            תגדלו את המקום השמח שלכם.
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-prose ml-auto text-right">
            גילוי צמחי בית בריאים, זנים חיצוניים צבעוניים, אדמה איכותית ועציצים בעבודת יד. משלוח עד הבית עם ליווי מקצועי לכל הורה לצמחים.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-end">
            <a href="#shop" className="inline-flex items-center justify-center rounded-xl bg-green-600 px-5 py-3 text-white font-medium hover:bg-green-700 transition">
              לרכישת המומלצים
            </a>
            <a href="#learn" className="inline-flex items-center justify-center rounded-xl border px-5 py-3 font-medium hover:bg-gray-50 transition">
              מדריך טיפול בצמחים
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
