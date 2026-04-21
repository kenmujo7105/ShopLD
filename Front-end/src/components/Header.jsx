import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Header = ({ goHome, onOpenCart, onOpenLogin, onOpenRegister, cartCount, searchQuery, onSearch }) => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
    if (goHome) goHome();
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo" onClick={handleLogoClick} title="Về trang chủ" style={{ cursor: 'pointer' }}>
          ShopLD
        </div>

        {/* Navigation Links */}
        <nav className="header-nav" aria-label="Điều hướng chính">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `nav-link${isActive ? ' nav-link--active' : ''}`}
          >
            Trang Chủ
          </NavLink>
          <NavLink
            to="/about-us"
            className={({ isActive }) => `nav-link${isActive ? ' nav-link--active' : ''}`}
          >
            Về Chúng Tôi
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => `nav-link${isActive ? ' nav-link--active' : ''}`}
          >
            Liên Hệ
          </NavLink>
        </nav>

        {/* Thanh tìm kiếm */}
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Tìm kiếm sản phẩm, danh mục..."
            value={searchQuery}
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>

        {/* Hành động (Giỏ hàng, Đăng nhập & Đăng ký) */}
        <div className="header-actions">
          <button className="cart-btn" aria-label="Giỏ hàng" onClick={onOpenCart}>
            🛒
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>

          <button className="login-btn" onClick={onOpenLogin}>
            Đăng nhập
          </button>

          <button className="register-btn" onClick={onOpenRegister}>
            Đăng ký
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
