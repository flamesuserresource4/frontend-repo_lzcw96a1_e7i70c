import React from 'react';
import { Instagram, Phone, MapPin } from 'lucide-react';

function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="font-semibold text-gray-900">About our nursery</h3>
          <p className="mt-2 text-gray-600 text-sm max-w-prose">
            We’re a family-run greenhouse sharing the joy of plants since 1998. From beginner-friendly picks to rare finds, our team is here to help you grow.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">Visit us</h3>
          <ul className="mt-2 text-gray-600 text-sm space-y-1">
            <li className="flex items-center gap-2"><MapPin size={16}/> 123 Greenhouse Ave, Tel Aviv</li>
            <li className="flex items-center gap-2"><Phone size={16}/> 03-555-1234</li>
            <li className="flex items-center gap-2"><Instagram size={16}/> @leafandroot</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">Newsletter</h3>
          <p className="mt-2 text-gray-600 text-sm">Get tips and deals in your inbox.</p>
          <form className="mt-3 flex gap-2">
            <input type="email" placeholder="you@example.com" className="flex-1 rounded-xl border px-3 py-2"/>
            <button className="rounded-xl bg-green-600 px-4 py-2 text-white font-medium hover:bg-green-700">Join</button>
          </form>
        </div>
      </div>
      <div className="py-4 text-center text-sm text-gray-500">© {new Date().getFullYear()} Leaf & Root Nursery. All rights reserved.</div>
    </footer>
  );
}

export default Footer;
