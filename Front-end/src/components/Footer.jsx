import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col">
          <h3>ShopLD</h3>
          <p>Nơi mua sắm trực tuyến tuyệt vời nhất dành cho bạn.</p>
          <p>Đảm bảo chất lượng, uy tín hàng đầu.</p>
        </div>
        
        <div className="footer-col">
          <h3>Liên Hệ</h3>
          <p>📍 Địa chỉ: 97, Man Thien, Hiep Phu, Tang Nhon Phu, Ho Chi Minh City</p>
          <p>📞 Điện thoại: 0985974643</p>
          <p>✉️ Email: dqluan2005@gmail.com</p>
        </div>
        
        <div className="footer-col">
          <h3>Chính Sách</h3>
          <p>Chính sách bảo mật</p>
          <p>Chính sách đổi trả</p>
          <p>Điều khoản dịch vụ</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2026 ShopLD. Thiết kế với ReactJS, HTML, CSS.</p>
      </div>
    </footer>
  );
};

export default Footer;
