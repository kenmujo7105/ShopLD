import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

/**
 * ProtectedRoute — bảo vệ route dành riêng cho Admin
 * - Nếu chưa đăng nhập hoặc không phải Admin → redirect về trang chủ
 * - Nếu đang loading auth state → hiển thị loading
 */
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isAdmin, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div style={{ textAlign: 'center', padding: '4rem 0', color: '#6b7280' }}>
        <p style={{ fontSize: '1.2rem' }}>⏳ Đang xác thực...</p>
      </div>
    );
  }

  if (!isAuthenticated || !isAdmin) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
