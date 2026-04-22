import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { login as loginApi } from '../services/apiServices';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const { loginUser } = useAuth();

  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validation phía client
    if (!formData.email || !formData.password) {
      setError('Vui lòng điền đầy đủ thông tin.');
      return;
    }

    setIsSubmitting(true);
    try {
      const data = await loginApi(formData);
      // Lưu token + user vào AuthContext
      loginUser(data.token, data.user);
      navigate('/');
    } catch (err) {
      const msg = err.response?.data?.message || 'Đăng nhập thất bại. Vui lòng thử lại.';
      setError(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <h1 className="auth-title">Chào mừng trở lại!</h1>
          <p className="auth-subtitle">Đăng nhập vào tài khoản ShopLD của bạn</p>
        </div>

        {error && (
          <div className="auth-error">
            <span>⚠️</span> {error}
          </div>
        )}

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="login-email">Email</label>
            <input
              id="login-email"
              type="email"
              name="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="login-password">Mật khẩu</label>
            <input
              id="login-password"
              type="password"
              name="password"
              placeholder="Nhập mật khẩu..."
              value={formData.password}
              onChange={handleChange}
              autoComplete="current-password"
            />
          </div>

          <button type="submit" className="btn-submit auth-submit" disabled={isSubmitting}>
            {isSubmitting ? '⏳ Đang xử lý...' : 'Đăng nhập'}
          </button>
        </form>

        <p className="auth-footer-text">
          Chưa có tài khoản? <Link to="/register">Đăng ký ngay</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
