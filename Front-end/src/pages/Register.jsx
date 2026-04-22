import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { register as registerApi } from '../services/apiServices';

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
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
    if (!formData.username || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('Vui lòng điền đầy đủ thông tin.');
      return;
    }

    if (formData.username.length < 3) {
      setError('Tên người dùng phải có ít nhất 3 ký tự.');
      return;
    }

    if (formData.password.length < 6) {
      setError('Mật khẩu phải có ít nhất 6 ký tự.');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Mật khẩu xác nhận không khớp.');
      return;
    }

    setIsSubmitting(true);
    try {
      await registerApi({
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });
      // Đăng ký thành công → chuyển sang trang đăng nhập
      navigate('/login', { state: { message: 'Đăng ký thành công! Hãy đăng nhập.' } });
    } catch (err) {
      const msg = err.response?.data?.message || 'Đăng ký thất bại. Vui lòng thử lại.';
      setError(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <h1 className="auth-title">Tạo Tài Khoản Mới</h1>
          <p className="auth-subtitle">Tham gia ShopLD — Mua sắm thông minh hơn</p>
        </div>

        {error && (
          <div className="auth-error">
            <span>⚠️</span> {error}
          </div>
        )}

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="reg-username">Tên người dùng</label>
            <input
              id="reg-username"
              type="text"
              name="username"
              placeholder="Nhập tên hiển thị..."
              value={formData.username}
              onChange={handleChange}
              autoComplete="username"
            />
          </div>

          <div className="form-group">
            <label htmlFor="reg-email">Email</label>
            <input
              id="reg-email"
              type="email"
              name="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="reg-password">Mật khẩu</label>
            <input
              id="reg-password"
              type="password"
              name="password"
              placeholder="Tối thiểu 6 ký tự..."
              value={formData.password}
              onChange={handleChange}
              autoComplete="new-password"
            />
          </div>

          <div className="form-group">
            <label htmlFor="reg-confirm">Xác nhận mật khẩu</label>
            <input
              id="reg-confirm"
              type="password"
              name="confirmPassword"
              placeholder="Nhập lại mật khẩu..."
              value={formData.confirmPassword}
              onChange={handleChange}
              autoComplete="new-password"
            />
          </div>

          <button type="submit" className="btn-submit auth-submit" disabled={isSubmitting}>
            {isSubmitting ? '⏳ Đang xử lý...' : 'Đăng ký thành viên'}
          </button>
        </form>

        <p className="auth-footer-text">
          Đã có tài khoản? <Link to="/login">Đăng nhập</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
