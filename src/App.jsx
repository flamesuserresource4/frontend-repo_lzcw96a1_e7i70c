import React, { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

function App() {
  const [cart, setCart] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

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
        .map((p) => (p.id === id ? { ...p, qty: Math.max(1, p.qty + delta) } : p))
        .filter((p) => p.qty > 0);
      return next;
    });
  };

  const handleRemove = (id) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar cartCount={cartCount} onCartToggle={() => setDrawerOpen(true)} />
      <main>
        <Hero />
        <ProductGrid onAdd={handleAddToCart} />
      </main>
      <Footer />

      {/* Cart Drawer */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setDrawerOpen(false)}
            aria-hidden
          />
          <aside className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-lg font-semibold">Your cart</h3>
              <button
                className="rounded-lg border px-3 py-1.5 hover:bg-gray-50"
                onClick={() => setDrawerOpen(false)}
              >
                Close
              </button>
            </div>
            <div className="flex-1 overflow-auto p-4 space-y-4">
              {cart.length === 0 ? (
                <p className="text-gray-600">Your cart is empty. Add some plants!</p>
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
                        <div>
                          <h4 className="font-medium leading-tight">{item.name}</h4>
                          <p className="text-sm text-gray-500">₪{item.price.toFixed(2)}</p>
                        </div>
                        <button
                          className="text-sm text-red-600 hover:underline"
                          onClick={() => handleRemove(item.id)}
                        >
                          Remove
                        </button>
                      </div>
                      <div className="mt-2 inline-flex items-center gap-2">
                        <button
                          className="h-8 w-8 grid place-items-center rounded-lg border"
                          onClick={() => handleUpdateQty(item.id, -1)}
                          aria-label={`Decrease quantity of ${item.name}`}
                        >
                          −
                        </button>
                        <span className="w-8 text-center">{item.qty}</span>
                        <button
                          className="h-8 w-8 grid place-items-center rounded-lg border"
                          onClick={() => handleUpdateQty(item.id, 1)}
                          aria-label={`Increase quantity of ${item.name}`}
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
                <span className="text-sm text-gray-600">Subtotal</span>
                <span className="font-semibold">₪{cartTotal.toFixed(2)}</span>
              </div>
              <button
                disabled={cart.length === 0}
                className="w-full rounded-xl bg-green-600 px-4 py-3 text-white font-medium hover:bg-green-700 disabled:opacity-50"
              >
                Checkout
              </button>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}

export default App;
