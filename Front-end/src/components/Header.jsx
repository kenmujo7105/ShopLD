import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Header = ({ goHome, onOpenCart, cartCount, searchQuery, onSearch }) => {
  const navigate = useNavigate();
  const { user, isAuthenticated, isAdmin, logout } = useAuth();

  const handleLogoClick = () => {
    navigate('/');
    if (goHome) goHome();
  };

  const handleLogout = () => {
    logout();
    navigate('/');
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
            value={searchQuery || ''}
            onChange={(e) => onSearch && onSearch(e.target.value)}
          />
        </div>

        {/* Hành động (Giỏ hàng, Auth) */}
        <div className="header-actions">
          <button className="cart-btn" aria-label="Giỏ hàng" onClick={onOpenCart}>
            🛒
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>

          {isAuthenticated ? (
            /* ── Đã đăng nhập ── */
            <div className="user-info">
              {isAdmin && (
                <button className="admin-btn" onClick={() => navigate('/admin')}>
                  ⚙️ Quản lý (Admin)
                </button>
              )}
              <span className="welcome-text">👋 {user?.username}</span>
              <button className="logout-btn" onClick={handleLogout}>
                Đăng xuất
              </button>
            </div>
          ) : (
            /* ── Chưa đăng nhập ── */
            <>
              <button className="login-btn" onClick={() => navigate('/login')}>
                Đăng nhập
              </button>
              <button className="register-btn" onClick={() => navigate('/register')}>
                Đăng ký
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
