import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import CategoryMenu from './components/CategoryMenu';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminDashboard from './pages/AdminDashboard';
import ProtectedRoute from './components/ProtectedRoute';

// Auth Context
import { AuthProvider } from './context/AuthContext';

// API Service và CSS
import { getProducts } from './services/apiServices';
import './Home.css';

// ── Trang Chủ (Home) ────────────────────────────────────────────────────────
function HomePage({ cart, setCart }) {
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);

  // ── Fetch sản phẩm từ Backend API ──
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error('Lỗi khi tải sản phẩm từ API:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Hàm thêm sản phẩm vào giỏ (Kế thừa tính năng Custom Quantity từ Chi tiết)
  const handleAddToCart = (product, addingQuantity = 1) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + addingQuantity }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: addingQuantity }];
    });
  };

  // Hàm thao tác Thêm lượng
  const handleIncreaseQuantity = (productId) => {
    setCart(prevCart => prevCart.map(item =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  // Hàm thao tác Giảm lượng
  const handleDecreaseQuantity = (productId) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === productId);
      if (!existingItem) return prevCart;
      if (existingItem.quantity > 1) {
        return prevCart.map(item =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
      return prevCart;
    });
  };

  // Hàm xoá sản phẩm hoàn toàn
  const handleRemoveFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  // Tính tổng
  const totalCartItems = cart.reduce((total, item) => total + item.quantity, 0);
  const totalCartPrice = cart.reduce((total, item) => {
    const price = item.salePrice ? item.salePrice : item.price;
    return total + price * item.quantity;
  }, 0);

  const formatPrice = (price) =>
    new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);

  const handleGoHome = () => {
    setSelectedProduct(null);
    setSelectedCategory("Tất cả");
    setSearchQuery("");
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewDetail = (product) => {
    setSelectedProduct(product);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-container">
      <Header
        goHome={handleGoHome}
        onOpenCart={() => setIsCartOpen(true)}
        cartCount={totalCartItems}
        searchQuery={searchQuery}
        onSearch={setSearchQuery}
      />

      <main className="main-content">
        {selectedProduct ? (
          <ProductDetail
            product={selectedProduct}
            onBack={() => setSelectedProduct(null)}
            onAddToCart={handleAddToCart}
          />
        ) : isLoading ? (
          <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--text-light)' }}>
            <p style={{ fontSize: '1.2rem' }}>⏳ Loading products...</p>
          </div>
        ) : (
          <>
            <CategoryMenu
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
            <ProductList
              selectedCategory={selectedCategory}
              productsData={products}
              onAddToCart={handleAddToCart}
              onViewDetail={handleViewDetail}
              searchQuery={searchQuery}
            />
          </>
        )}
      </main>

      <Footer />

      {/* ========== MODAL GIỎ HÀNG ========== */}
      {isCartOpen && (
        <div className="modal-overlay" onClick={() => setIsCartOpen(false)}>
          <div className="modal-content cart-modal" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setIsCartOpen(false)}>✖</button>
            <h2 className="modal-title">🛒 Giỏ hàng của bạn</h2>

            <div className="cart-items-container">
              {cart.length === 0 ? (
                <div style={{ padding: '2rem 0', textAlign: 'center' }}>
                  <p style={{ color: 'var(--text-light)', marginBottom: '1rem' }}>Giỏ hàng hiện đang trống.</p>
                  <p style={{ fontSize: '0.9rem', color: '#9ca3af' }}>Vui lòng thêm sản phẩm để tiến hành thanh toán.</p>
                </div>
              ) : (
                <div className="cart-list">
                  {cart.map(item => (
                    <div key={item.id} className="cart-item">
                      <img src={item.imageUrl || item.image} alt={item.name} className="cart-item-img" />
                      <div className="cart-item-info">
                        <h4 className="cart-item-name">{item.name}</h4>
                        <p className="cart-item-price">
                          {formatPrice(item.salePrice ? item.salePrice : item.price)}
                        </p>
                      </div>
                      <div className="cart-item-actions">
                        <div className="qty-controls">
                          <button type="button" onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                          <span>{item.quantity}</span>
                          <button type="button" onClick={() => handleIncreaseQuantity(item.id)}>+</button>
                        </div>
                        <button
                          type="button"
                          className="remove-item-btn"
                          onClick={() => handleRemoveFromCart(item.id)}
                          title="Xóa toàn bộ"
                        >
                          🗑️
                        </button>
                      </div>
                    </div>
                  ))}
                  <div className="cart-total">
                    <span>Tổng cộng:</span>
                    <span className="total-price">{formatPrice(totalCartPrice)}</span>
                  </div>
                </div>
              )}
            </div>

            {cart.length > 0 ? (
              <button type="button" className="btn-submit" style={{ marginTop: '2rem' }}>Tiến hành thanh toán</button>
            ) : (
              <button type="button" className="btn-submit" onClick={() => setIsCartOpen(false)}>
                Tiếp tục mua sắm
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// ── Trang About (bọc thêm Header + Footer) ──────────────────────────────────
function AboutPage() {
  return (
    <div className="app-container">
      <Header goHome={() => {}} onOpenCart={() => {}} cartCount={0} searchQuery="" onSearch={() => {}} />
      <main className="main-content"><About /></main>
      <Footer />
    </div>
  );
}

// ── Trang Contact (bọc thêm Header + Footer) ────────────────────────────────
function ContactPage() {
  return (
    <div className="app-container">
      <Header goHome={() => {}} onOpenCart={() => {}} cartCount={0} searchQuery="" onSearch={() => {}} />
      <main className="main-content"><Contact /></main>
      <Footer />
    </div>
  );
}

// ── Trang Login (bọc thêm Header + Footer) ──────────────────────────────────
function LoginPage() {
  return (
    <div className="app-container">
      <Header goHome={() => {}} onOpenCart={() => {}} cartCount={0} searchQuery="" onSearch={() => {}} />
      <main className="main-content"><Login /></main>
      <Footer />
    </div>
  );
}

// ── Trang Register (bọc thêm Header + Footer) ──────────────────────────────
function RegisterPage() {
  return (
    <div className="app-container">
      <Header goHome={() => {}} onOpenCart={() => {}} cartCount={0} searchQuery="" onSearch={() => {}} />
      <main className="main-content"><Register /></main>
      <Footer />
    </div>
  );
}

// ── Trang Admin (bọc ProtectedRoute + Header + Footer) ─────────────────────
function AdminPage() {
  return (
    <ProtectedRoute>
      <div className="app-container">
        <Header goHome={() => {}} onOpenCart={() => {}} cartCount={0} searchQuery="" onSearch={() => {}} />
        <main className="main-content"><AdminDashboard /></main>
        <Footer />
      </div>
    </ProtectedRoute>
  );
}

// ── App Root với Router + AuthProvider ────────────────────────────────────────
function App() {
  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage cart={cart} setCart={setCart} />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
