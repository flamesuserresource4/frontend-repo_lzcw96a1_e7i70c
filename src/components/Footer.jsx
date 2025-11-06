import React from 'react';
import { Instagram, Phone, MapPin } from 'lucide-react';

function Footer({ businessName = 'משתלת עלה ושורש' }) {
  return (
    <footer className="border-t mt-16" dir="rtl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-8 md:grid-cols-3">
        <div className="text-right">
          <h3 className="font-semibold text-gray-900">על המשתלה</h3>
          <p className="mt-2 text-gray-600 text-sm max-w-prose ml-auto">
            משתלה משפחתית מאז 1998 שמפיצה את שמחת הצמחים. מצמחים ידידותיים למתחילים ועד פריטים נדירים — אנחנו כאן לעזור לכם לגדול.
          </p>
        </div>
        <div className="text-right">
          <h3 className="font-semibold text-gray-900">בואו לבקר</h3>
          <ul className="mt-2 text-gray-600 text-sm space-y-1">
            <li className="flex items-center gap-2 justify-end"><MapPin size={16}/> רח׳ החממה 123, תל אביב</li>
            <li className="flex items-center gap-2 justify-end"><Phone size={16}/> 03-555-1234</li>
            <li className="flex items-center gap-2 justify-end"><Instagram size={16}/> @leafandroot</li>
          </ul>
        </div>
        <div className="text-right">
          <h3 className="font-semibold text-gray-900">ניוזלטר</h3>
          <p className="mt-2 text-gray-600 text-sm">קבלו טיפים ומבצעים ישירות למייל.</p>
          <form className="mt-3 flex gap-2">
            <input type="email" placeholder="you@example.com" className="flex-1 rounded-xl border px-3 py-2 text-right"/>
            <button className="rounded-xl bg-green-600 px-4 py-2 text-white font-medium hover:bg-green-700">הצטרפו</button>
          </form>
        </div>
      </div>
      <div className="py-4 text-center text-sm text-gray-500">© {new Date().getFullYear()} {businessName}. כל הזכויות שמורות.</div>
    </footer>
  );
}

export default Footer;
