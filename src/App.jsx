import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import { X, Minus, Plus, Trash2 } from 'lucide-react';

const defaultProducts = [
  {
    id: 1,
    name: 'מונסטורה דליסיוסה',
    category: 'צמחי בית',
    price: 149,
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1614594950645-10e1522b0a7c?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'סנסיווריה זילנדיקה',
    category: 'צמחי בית',
    price: 89,
    rating: 4.6,
    image:
      'https://images.unsplash.com/photo-1593697820940-9a6f8773b3fc?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'פטוניה תלויה',
    category: 'צמחי גינה',
    price: 39,
    rating: 4.4,
    image:
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'פוטוס זהוב',
    category: 'צמחי בית',
    price: 59,
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1593486205205-90c4230b0d3e?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 5,
    name: 'לבנדר רפואי',
    category: 'עשבי תיבול',
    price: 29,
    rating: 4.5,
    image:
      'https://images.unsplash.com/photo-1445404590072-16ef9c18bd83?q=80&w=1200&auto=format&fit=crop',
  },
];

function App() {
  const businessName = 'משתלת רענן';

  // State
  const [products] = useState(defaultProducts);
  const [search, setSearch] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sort, setSort] = useState('popular');
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const allCategories = useMemo(
    () => Array.from(new Set(products.map((p) => p.category))),
    [products]
  );

  const formatPrice = (num) =>
    new Intl.NumberFormat('he-IL', { style: 'currency', currency: 'ILS' }).format(num);

  const filtered = useMemo(() => {
    let list = products.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase())
    );

    if (selectedCategories.length) {
      list = list.filter((p) => selectedCategories.includes(p.category));
    }

    switch (sort) {
      case 'price-asc':
        list = [...list].sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        list = [...list].sort((a, b) => b.price - a.price);
        break;
      case 'name':
        list = [...list].sort((a, b) => a.name.localeCompare(b.name, 'he'));
        break;
      default:
        list = [...list].sort((a, b) => b.rating - a.rating);
    }

    return list;
  }, [products, search, selectedCategories, sort]);

  const toggleCategory = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((i) => i.id === product.id);
      if (exists) {
        return prev.map((i) => (i.id === product.id ? { ...i, qty: i.qty + 1 } : i));
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setCartOpen(true);
  };

  const changeQty = (id, delta) => {
    setCart((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i))
        .filter((i) => i.qty > 0)
    );
  };
  const removeFromCart = (id) => setCart((prev) => prev.filter((i) => i.id !== id));

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <div dir="rtl" className="min-h-screen bg-white text-gray-900">
      <Navbar
        businessName={businessName}
        cartCount={cart.reduce((s, i) => s + i.qty, 0)}
        onCartToggle={() => setCartOpen((v) => !v)}
        search={search}
        onSearchChange={setSearch}
      />

      <Hero />

      <ProductGrid
        products={filtered}
        allCategories={allCategories}
        selectedCategories={selectedCategories}
        onToggleCategory={toggleCategory}
        sort={sort}
        onSortChange={setSort}
        onAdd={addToCart}
        formatPrice={formatPrice}
      />

      <Footer businessName={businessName} />

      {/* Cart Drawer */}
      <AnimatePresence>
        {cartOpen && (
          <motion.aside
            initial={{ x: 400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 400, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 30 }}
            className="fixed inset-y-0 left-0 w-full max-w-md bg-white shadow-2xl border-l border-gray-200 z-50"
            aria-label="מגירת עגלה"
          >
            <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3">
              <h3 className="text-lg font-semibold">העגלה שלי</h3>
              <button onClick={() => setCartOpen(false)} className="rounded-lg p-2 hover:bg-gray-100">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="max-h-[60vh] overflow-y-auto divide-y">
              {cart.length === 0 ? (
                <div className="p-6 text-center text-gray-500">העגלה ריקה</div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex items-center gap-3 p-4">
                    <img src={item.image} alt={item.name} className="h-16 w-16 rounded-lg object-cover ring-1 ring-black/5" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <p className="font-medium truncate">{item.name}</p>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-600 hover:text-red-700 p-1 rounded-lg hover:bg-red-50"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      <p className="text-sm text-gray-500 mt-0.5">{formatPrice(item.price)}</p>
                      <div className="mt-2 inline-flex items-center gap-2 rounded-xl border border-gray-300 px-2 py-1">
                        <button onClick={() => changeQty(item.id, -1)} className="p-1 rounded hover:bg-gray-100">
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="min-w-[2ch] text-center">{item.qty}</span>
                        <button onClick={() => changeQty(item.id, 1)} className="p-1 rounded hover:bg-gray-100">
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="mt-auto border-t border-gray-200 p-4">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>סה"כ</span>
                <span className="font-semibold text-gray-900">{formatPrice(total)}</span>
              </div>
              <button
                onClick={() => alert('המשך לתשלום יתווסף בהמשך')}
                disabled={cart.length === 0}
                className="mt-3 w-full rounded-xl bg-green-600 text-white px-4 py-3 text-sm font-semibold hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 transition"
              >
                לתשלום
              </button>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {cartOpen && (
          <motion.button
            aria-hidden
            onClick={() => setCartOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40"
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
