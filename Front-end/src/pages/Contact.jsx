import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate async submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const contactInfo = [
    { icon: '📍', title: 'Địa Chỉ', detail: '97, Man Thien, Hiep Phu, Tang Nhon Phu, Ho Chi Minh City' },
    { icon: '📞', title: 'Điện Thoại', detail: '0985974643' },
    { icon: '✉️', title: 'Email', detail: 'dqluan2005@gmail.com' },
    { icon: '🕘', title: 'Giờ Làm Việc', detail: 'T2 – T7: 08:00 – 20:00' },
  ];

  return (
    <div className="contact-page-wrapper">
      {/* Page Header */}
      <div className="contact-header">
        <p className="contact-eyebrow">✦ Chúng tôi luôn lắng nghe</p>
        <h1 className="contact-title">Liên Hệ <span className="gradient-text-contact">Với Chúng Tôi</span></h1>
        <p className="contact-subtitle">
          Bạn có câu hỏi, góp ý hay cần hỗ trợ? Hãy điền vào form bên dưới — chúng tôi sẽ
          phản hồi trong vòng 24 giờ làm việc.
        </p>
      </div>

      <div className="contact-layout">
        {/* Info Cards */}
        <aside className="contact-info-col">
          {contactInfo.map((info, i) => (
            <div className="contact-info-card" key={i}>
              <span className="contact-info-icon">{info.icon}</span>
              <div>
                <h3 className="contact-info-title">{info.title}</h3>
                <p className="contact-info-detail">{info.detail}</p>
              </div>
            </div>
          ))}

          {/* Social Links */}
          <div className="contact-social">
            <p className="social-label">Theo dõi chúng tôi</p>
            <div className="social-links">
              <a href="#facebook" className="social-btn" aria-label="Facebook">f</a>
              <a href="#instagram" className="social-btn" aria-label="Instagram">in</a>
              <a href="#youtube" className="social-btn" aria-label="YouTube">▶</a>
            </div>
          </div>
        </aside>

        {/* Form */}
        <div className="contact-form-col">
          {submitted ? (
            <div className="success-card">
              <div className="success-icon">✅</div>
              <h2>Gửi Thành Công!</h2>
              <p>Cảm ơn bạn đã liên hệ. Chúng tôi sẽ phản hồi sớm nhất có thể.</p>
              <button
                className="contact-submit-btn"
                onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
              >
                Gửi thêm tin nhắn
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="contact-name">Họ và Tên *</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Trần Văn A"
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="contact-email">Email *</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="example@email.com"
                    required
                  />
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="contact-subject">Chủ Đề</label>
                <select
                  id="contact-subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                >
                  <option value="">-- Chọn chủ đề --</option>
                  <option value="order">Vấn đề về đơn hàng</option>
                  <option value="product">Thông tin sản phẩm</option>
                  <option value="return">Đổi / Trả hàng</option>
                  <option value="payment">Thanh toán</option>
                  <option value="other">Khác</option>
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="contact-message">Nội Dung *</label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Mô tả chi tiết vấn đề hoặc câu hỏi của bạn..."
                  rows={6}
                  required
                />
              </div>
              <button
                type="submit"
                className={`contact-submit-btn ${loading ? 'loading' : ''}`}
                disabled={loading}
              >
                {loading ? '⏳ Đang gửi...' : '📨 Gửi Tin Nhắn'}
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`
        .contact-page-wrapper {
          max-width: 1100px;
          margin: 0 auto;
          padding: 2rem 1.5rem 4rem;
        }

        /* Header */
        .contact-header { text-align: center; margin-bottom: 3rem; }
        .contact-eyebrow {
          font-size: 0.85rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--primary-color, #e74c3c);
          font-weight: 600;
          margin-bottom: 0.75rem;
        }
        .contact-title {
          font-size: clamp(1.8rem, 5vw, 2.6rem);
          font-weight: 800;
          color: var(--text-dark, #1a1a2e);
          margin-bottom: 1rem;
        }
        .gradient-text-contact {
          background: linear-gradient(135deg, #e74c3c, #f39c12);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .contact-subtitle { color: var(--text-light, #6b7280); font-size: 1rem; line-height: 1.7; max-width: 600px; margin: 0 auto; }

        /* Layout */
        .contact-layout {
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: 2.5rem;
          align-items: start;
        }

        /* Info Cards */
        .contact-info-col { display: flex; flex-direction: column; gap: 1rem; }
        .contact-info-card {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
          background: #fff;
          border: 1px solid #f0f0f0;
          border-radius: 14px;
          padding: 1.1rem 1.25rem;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .contact-info-card:hover { transform: translateX(5px); box-shadow: 0 6px 20px rgba(0,0,0,0.07); }
        .contact-info-icon { font-size: 1.5rem; flex-shrink: 0; }
        .contact-info-title { font-size: 0.8rem; font-weight: 700; color: var(--text-dark, #1a1a2e); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.2rem; }
        .contact-info-detail { font-size: 0.9rem; color: var(--text-light, #6b7280); margin: 0; }

        .contact-social { background: linear-gradient(135deg, rgba(231,76,60,0.08), rgba(243,156,18,0.05)); border: 1px solid rgba(231,76,60,0.15); border-radius: 14px; padding: 1.25rem; }
        .social-label { font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 700; color: var(--text-dark, #1a1a2e); margin-bottom: 0.75rem; }
        .social-links { display: flex; gap: 0.75rem; }
        .social-btn {
          width: 38px; height: 38px;
          border-radius: 50%;
          background: var(--primary-color, #e74c3c);
          color: #fff;
          font-weight: 700;
          font-size: 0.85rem;
          display: flex; align-items: center; justify-content: center;
          text-decoration: none;
          transition: transform 0.2s ease, opacity 0.2s ease;
        }
        .social-btn:hover { transform: scale(1.1); opacity: 0.85; }

        /* Form */
        .contact-form-col {
          background: #fff;
          border: 1px solid #f0f0f0;
          border-radius: 20px;
          padding: 2rem 2.25rem;
          box-shadow: 0 4px 24px rgba(0,0,0,0.05);
        }
        .contact-form { display: flex; flex-direction: column; gap: 1.25rem; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; }
        .form-field { display: flex; flex-direction: column; gap: 0.4rem; }
        .form-field label { font-size: 0.85rem; font-weight: 600; color: var(--text-dark, #1a1a2e); }
        .form-field input,
        .form-field select,
        .form-field textarea {
          width: 100%;
          padding: 0.7rem 1rem;
          border: 1.5px solid #e5e7eb;
          border-radius: 10px;
          font-size: 0.95rem;
          color: var(--text-dark, #1a1a2e);
          background: #fafafa;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          outline: none;
          box-sizing: border-box;
          font-family: inherit;
        }
        .form-field input:focus,
        .form-field select:focus,
        .form-field textarea:focus {
          border-color: var(--primary-color, #e74c3c);
          box-shadow: 0 0 0 3px rgba(231,76,60,0.1);
          background: #fff;
        }
        .form-field textarea { resize: vertical; min-height: 140px; }

        .contact-submit-btn {
          background: linear-gradient(135deg, #e74c3c, #f39c12);
          color: #fff;
          font-weight: 700;
          font-size: 1rem;
          padding: 0.9rem 2rem;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
          align-self: flex-start;
        }
        .contact-submit-btn:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(231,76,60,0.3); }
        .contact-submit-btn:disabled { opacity: 0.7; cursor: not-allowed; }
        .contact-submit-btn.loading { animation: pulse 1s ease infinite alternate; }
        @keyframes pulse { from { opacity: 0.7; } to { opacity: 1; } }

        /* Success State */
        .success-card { text-align: center; padding: 3rem 1rem; }
        .success-icon { font-size: 4rem; margin-bottom: 1rem; }
        .success-card h2 { font-size: 1.6rem; font-weight: 800; color: var(--text-dark, #1a1a2e); margin-bottom: 0.75rem; }
        .success-card p { color: var(--text-light, #6b7280); margin-bottom: 2rem; }
        .success-card .contact-submit-btn { margin: 0 auto; }

        @media (max-width: 768px) {
          .contact-layout { grid-template-columns: 1fr; }
          .form-row { grid-template-columns: 1fr; }
          .contact-submit-btn { width: 100%; text-align: center; }
        }
      `}</style>
    </div>
  );
};

export default Contact;
