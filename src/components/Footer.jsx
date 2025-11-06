import React from 'react';

function Footer({ businessName }) {
  const year = new Date().getFullYear();
  return (
    <footer dir="rtl" className="mt-16 border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 grid sm:grid-cols-3 gap-8 text-right">
        <div>
          <h4 className="font-semibold text-gray-900">{businessName}</h4>
          <p className="mt-2 text-sm text-gray-600">
            משתלה מקומית באהבה לטבע. צמחי בית, גינה, ואביזרים מעוצבים עם ייעוץ מקצועי.
          </p>
        </div>
        <div>
          <h5 className="font-semibold text-gray-900">שעות קבלה</h5>
          <ul className="mt-2 space-y-1 text-sm text-gray-600">
            <li>א׳–ה׳: 9:00–19:00</li>
            <li>ו׳: 9:00–14:00</li>
            <li>שבת: סגור</li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold text-gray-900">הישארו מעודכנים</h5>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('נרשמתם בהצלחה!');
            }}
            className="mt-2 flex items-center gap-2"
          >
            <input
              dir="rtl"
              type="email"
              required
              placeholder="האימייל שלכם"
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="rounded-xl bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-700 active:scale-95 transition">
              שליחה
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-gray-200 py-4 text-center text-sm text-gray-500">
        © {year} {businessName}. כל הזכויות שמורות.
      </div>
    </footer>
  );
}

export default Footer;
