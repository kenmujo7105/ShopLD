import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

/**
 * Hook tiện ích để sử dụng AuthContext trong bất kỳ component nào
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth phải được sử dụng bên trong AuthProvider');
  }
  return context;
};

/**
 * AuthProvider — bọc toàn bộ App để cung cấp state xác thực toàn cục
 * - Lưu JWT token vào localStorage
 * - Khôi phục phiên đăng nhập khi tải lại trang
 * - Cung cấp hàm login, logout cho các component con
 * - Theo dõi role của user (Customer / Admin)
 */
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Khôi phục phiên đăng nhập từ localStorage khi mount
  useEffect(() => {
    try {
      const savedToken = localStorage.getItem('token');
      const savedUser = localStorage.getItem('user');
      if (savedToken && savedUser) {
        setToken(savedToken);
        setUser(JSON.parse(savedUser));
      }
    } catch (error) {
      console.error('Lỗi khôi phục phiên đăng nhập:', error);
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    } finally {
      setIsLoading(false);
    }
  }, []);

  /**
   * Lưu thông tin đăng nhập sau khi login thành công
   * @param {string} jwtToken - JWT token từ backend
   * @param {Object} userData - { id, username, email, role }
   */
  const loginUser = (jwtToken, userData) => {
    setToken(jwtToken);
    setUser(userData);
    localStorage.setItem('token', jwtToken);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  /**
   * Đăng xuất — xoá token và user khỏi state + localStorage
   */
  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  const value = {
    user,
    token,
    isAuthenticated: !!token,
    isAdmin: user?.role === 'Admin',
    isLoading,
    loginUser,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
