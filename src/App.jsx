import React, { useMemo, useState, useMemo as _useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

// נתוני דוגמה – נחליף למקור דינמי בשלב הבא
const defaultProducts = [
  {
    id: '1',
    name: 'מונסטרה דליסיוזה',
    category: 'צמח בית',
    price: 129.9,
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1587339144364-453b0f3c9a5d?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: '2',
    name: 'סנסיווריה',
    category: 'צמח לשטחים מואפלים',
    price: 89.0,
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: '3',
    name: 'פיקוס כינורי',
    category: 'צמח הצהרתי',
    price: 159.0,
    rating: 4.6,
    image:
      'https://images.unsplash.com/photo-1601379329542-e7f4b89c84ea?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: '4',
    name: 'עציץ טרקוטה (גדול)',
    category: 'עציץ',
    price: 49.0,
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1585857188431-1cfebd675155?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: '5',
    name: 'אדמת שתילה איכותית 10 ל׳',
    category: 'מצע גידול',
    price: 35.0,
    rating: 4.5,
    image:
      'https://images.unsplash.com/photo-1587740896339-96a9cbe0f1d6?q=80&w=1600&auto=format&fit=crop',
  },
];

function App() {
  const businessName = 'משתלת עלה ושורש';

  const [cart, setCart] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const [products] = useState(defaultProducts);
  const [search, setSearch] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sort, setSort] = useState('popular'); // popular | price_asc | price_desc | name

  const heCurrency = useMemo(() => new Intl.NumberFormat('he-IL', { style: 'currency', currency: 'ILS' }), []);

  const cartCount = useMemo(() => cart.reduce((sum, i) => sum + i.qty, 0), [cart]);
  const cartTotal = useMemo(
    () => cart.reduce((sum, i) => sum + i.qty * i.price, 0),
    [cart]
  );

  const handleAddToCart = (product) => {
    setCart((prev) => {
      const idx = prev.findIndex((p) => p.id === product.id);
      if (idx > -1) {
        const next = [...prev];
        next[idx] = { ...next[idx], qty: next[idx].qty + 1 };
        return next;
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const handleUpdateQty = (id, delta) => {
    setCart((prev) => {
      const next = prev
        .map((p) => (p.id === id ? { ...p, qty: Math.max(0, p.qty + delta) } : p))
        .filter((p) => p.qty > 0);
      return next;
    });
  };

  const handleRemove = (id) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  const handleCheckout = () => {
    // בשלב זה סימולציה בלבד
    if (cart.length === 0) return;
    alert('תודה! נעבור לתשלום מאובטח בהמשך השדרוגים.');
  };

  // הפקת רשימת קטגוריות מכל המוצרים
  const categories = useMemo(() => Array.from(new Set(products.map((p) => p.category))), [products]);

  // סינון ומיון בצד הלקוח
  const visibleProducts = useMemo(() => {
    let list = [...products];
    const q = search.trim();
    if (q) {
      const lower = q.toLowerCase();
      list = list.filter((p) =>
        p.name.toLowerCase().includes(lower) || p.category.toLowerCase().includes(lower)
      );
    }
    if (selectedCategories.length > 0) {
      list = list.filter((p) => selectedCategories.includes(p.category));
    }
    switch (sort) {
      case 'price_asc':
        list.sort((a, b) => a.price - b.price);
        break;
      case 'price_desc':
        list.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        list.sort((a, b) => a.name.localeCompare(b.name, 'he'));
        break;
      default:
        list.sort((a, b) => b.rating - a.rating);
    }
    return list;
  }, [products, search, selectedCategories, sort]);

  const toggleCategory = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans" dir="rtl">
      <Navbar
        businessName={businessName}
        cartCount={cartCount}
        onCartToggle={() => setDrawerOpen(true)}
        search={search}
        onSearchChange={setSearch}
      />
      <main>
        <Hero />
        <ProductGrid
          products={visibleProducts}
          allCategories={categories}
          selectedCategories={selectedCategories}
          onToggleCategory={toggleCategory}
          sort={sort}
          onSortChange={setSort}
          onAdd={handleAddToCart}
          formatPrice={(n) => heCurrency.format(n)}
        />
      </main>
      <Footer businessName={businessName} />

      {drawerOpen && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setDrawerOpen(false)}
            aria-hidden
          />
          <aside className="absolute left-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-lg font-semibold">העגלה שלך</h3>
              <button
                className="rounded-lg border px-3 py-1.5 hover:bg-gray-50"
                onClick={() => setDrawerOpen(false)}
              >
                סגור
              </button>
            </div>
            <div className="flex-1 overflow-auto p-4 space-y-4">
              {cart.length === 0 ? (
                <p className="text-gray-600">העגלה ריקה. הוסף צמחים!</p>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-20 w-20 rounded-lg object-cover border"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div className="text-right">
                          <h4 className="font-medium leading-tight">{item.name}</h4>
                          <p className="text-sm text-gray-500">{heCurrency.format(item.price)}</p>
                        </div>
                        <button
                          className="text-sm text-red-600 hover:underline"
                          onClick={() => handleRemove(item.id)}
                        >
                          הסר
                        </button>
                      </div>
                      <div className="mt-2 inline-flex items-center gap-2">
                        <button
                          className="h-8 w-8 grid place-items-center rounded-lg border"
                          onClick={() => handleUpdateQty(item.id, -1)}
                          aria-label={`הפחת כמות עבור ${item.name}`}
                        >
                          −
                        </button>
                        <span className="w-8 text-center">{item.qty}</span>
                        <button
                          className="h-8 w-8 grid place-items-center rounded-lg border"
                          onClick={() => handleUpdateQty(item.id, 1)}
                          aria-label={`הוסף כמות עבור ${item.name}`}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="border-t p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-gray-600">סה״כ</span>
                <span className="font-semibold">{heCurrency.format(cartTotal)}</span>
              </div>
              <button
                disabled={cart.length === 0}
                className="w-full rounded-xl bg-green-600 px-4 py-3 text-white font-medium hover:bg-green-700 disabled:opacity-50"
                onClick={handleCheckout}
              >
                לתשלום
              </button>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}

export default App;
