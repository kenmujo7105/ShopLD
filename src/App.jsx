import React, { useState } from 'react';
import Header from './components/Header';
import CategoryMenu from './components/CategoryMenu';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Footer from './components/Footer';

// Dữ liệu và CSS
import { mockProducts } from './data/products';
import './Home.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const [selectedProduct, setSelectedProduct] = useState(null); // Quản lý Trang chi tiết
  const [searchQuery, setSearchQuery] = useState(""); // Từ khoá tìm kiếm
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // State quản lý giỏ hàng
  const [cart, setCart] = useState([]);

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

  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  };

  const handleGoHome = () => {
    setSelectedProduct(null); // Tắt chi tiết
    setSelectedCategory("Tất cả"); // Quét mục Tất cả
    setSearchQuery(""); // Xoá từ khoá tìm kiếm
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
        onOpenLogin={() => setIsLoginOpen(true)}
        onOpenRegister={() => setIsRegisterOpen(true)}
        cartCount={totalCartItems}
        searchQuery={searchQuery}
        onSearch={setSearchQuery}
      />

      <main className="main-content">
        {selectedProduct ? (
          // HIỂN THỊ TRANG CHI TIẾT
          <ProductDetail
            product={selectedProduct}
            onBack={() => setSelectedProduct(null)}
            onAddToCart={handleAddToCart}
          />
        ) : (
          // HIỂN THỊ TRANG CHỦ DANH SÁCH
          <>
            <CategoryMenu
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
            <ProductList
              selectedCategory={selectedCategory}
              productsData={mockProducts}
              onAddToCart={handleAddToCart}
              onViewDetail={handleViewDetail}
              searchQuery={searchQuery}
            />
          </>
        )}
      </main>

      <Footer />

      {/* ========== MODAL ĐĂNG NHẬP ========== */}
      {isLoginOpen && (
        <div className="modal-overlay" onClick={() => setIsLoginOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setIsLoginOpen(false)}>✖</button>
            <h2 className="modal-title">Đăng Nhập</h2>
            <form className="modal-form">
              <div className="form-group">
                <label>Email / Số điện thoại</label>
                <input type="text" placeholder="Nhập email hoặc SĐT..." />
              </div>
              <div className="form-group">
                <label>Mật khẩu</label>
                <input type="password" placeholder="Nhập mật khẩu..." />
              </div>
              <button type="button" className="btn-submit">Đăng nhập</button>
            </form>
            <p className="modal-footer-text">Chưa có tài khoản? <a onClick={() => { setIsLoginOpen(false); setIsRegisterOpen(true); }}>Đăng ký ngay</a></p>
          </div>
        </div>
      )}

      {/* ========== MODAL ĐĂNG KÝ ========== */}
      {isRegisterOpen && (
        <div className="modal-overlay" onClick={() => setIsRegisterOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setIsRegisterOpen(false)}>✖</button>
            <h2 className="modal-title">Tạo Tài Khoản Đi Cùng Cải Tiến</h2>
            <form className="modal-form">
              <div className="form-group">
                <label>Họ và Tên</label>
                <input type="text" placeholder="Trần Văn A..." />
              </div>
              <div className="form-group">
                <label>Email / Số điện thoại</label>
                <input type="text" placeholder="Nhập email hoặc SĐT..." />
              </div>
              <div className="form-group">
                <label>Mật khẩu</label>
                <input type="password" placeholder="Tạo mật khẩu..." />
              </div>
              <div className="form-group">
                <label>Xác nhận mật khẩu</label>
                <input type="password" placeholder="Nhập lại mật khẩu..." />
              </div>
              <button type="button" className="btn-submit">Đăng ký thành viên</button>
            </form>
            <p className="modal-footer-text">Đã có tài khoản? <a onClick={() => { setIsRegisterOpen(false); setIsLoginOpen(true); }}>Đăng nhập</a></p>
          </div>
        </div>
      )}

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
                      <img src={item.image} alt={item.name} className="cart-item-img" />
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

export default App;
