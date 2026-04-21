import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const teamMembers = [
    { name: 'Đặng Quang Luân', role: 'Nhà Sáng Lập & CEO', emoji: '👨‍💼' },
    { name: 'Đặng Quang Luân', role: 'Giám đốc Sáng Tạo', emoji: '👩‍🎨' },
    { name: 'Đặng Quang Luân', role: 'Trưởng Phòng Kỹ Thuật', emoji: '👨‍💻' },
  ];

  const stats = [
    { value: '10,000+', label: 'Khách hàng tin dùng' },
    { value: '500+', label: 'Sản phẩm chất lượng' },
    { value: '5 Năm', label: 'Kinh nghiệm hoạt động' },
    { value: '98%', label: 'Tỉ lệ hài lòng' },
  ];

  return (
    <div className="page-wrapper">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <p className="about-hero-eyebrow">✦ Câu chuyện của chúng tôi</p>
          <h1 className="about-hero-title">
            Mua sắm thông minh,<br />
            <span className="gradient-text">Sống đẳng cấp hơn</span>
          </h1>
          <p className="about-hero-sub">
            ShopLD được thành lập với một sứ mệnh đơn giản: mang đến những sản phẩm
            chất lượng cao nhất, đến tay mọi người, với mức giá hợp lý nhất.
          </p>
        </div>
        <div className="about-hero-graphic">
          <div className="about-orb orb-1"></div>
          <div className="about-orb orb-2"></div>
          <div className="about-orb orb-3"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about-stats">
        {stats.map((stat, i) => (
          <div className="stat-card" key={i}>
            <span className="stat-value">{stat.value}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </section>

      {/* Mission Section */}
      <section className="about-mission">
        <div className="mission-text">
          <h2>Sứ Mệnh Của Chúng Tôi</h2>
          <p>
            Chúng tôi tin rằng mỗi người xứng đáng được tiếp cận với những sản phẩm
            tốt nhất. Từ năm 2019, ShopLD đã không ngừng nỗ lực để xây dựng một nền
            tảng thương mại điện tử đáng tin cậy, nơi chất lượng và sự hài lòng của
            khách hàng luôn được đặt lên hàng đầu.
          </p>
          <p>
            Chúng tôi làm việc trực tiếp với các nhà sản xuất và đối tác uy tín
            để đảm bảo rằng mỗi sản phẩm trên ShopLD đều vượt qua các tiêu chuẩn
            kiểm soát chất lượng nghiêm ngặt trước khi đến tay bạn.
          </p>
        </div>
        <div className="mission-visual">
          <div className="mission-card">
            <span className="mission-icon">🎯</span>
            <h3>Chất Lượng</h3>
            <p>Kiểm định kỹ lưỡng từng sản phẩm trước khi đưa đến tay khách hàng.</p>
          </div>
          <div className="mission-card">
            <span className="mission-icon">🚀</span>
            <h3>Tốc Độ</h3>
            <p>Giao hàng nhanh chóng, đảm bảo đúng hẹn tới mọi địa điểm.</p>
          </div>
          <div className="mission-card">
            <span className="mission-icon">💎</span>
            <h3>Giá Trị</h3>
            <p>Cam kết giá tốt nhất thị trường, không có phí ẩn.</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-team">
        <h2 className="section-title">Đội Ngũ Của Chúng Tôi</h2>
        <p className="section-subtitle">Những con người đứng sau ShopLD</p>
        <div className="team-grid">
          {teamMembers.map((member, i) => (
            <div className="team-card" key={i}>
              <div className="team-avatar">{member.emoji}</div>
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <h2>Bắt Đầu Hành Trình Mua Sắm Ngay!</h2>
        <p>Khám phá hàng trăm sản phẩm chất lượng đang chờ bạn.</p>
        <Link to="/" className="cta-btn">Xem Sản Phẩm →</Link>
      </section>

      <style>{`
        .page-wrapper {
          max-width: 1100px;
          margin: 0 auto;
          padding: 2rem 1.5rem 4rem;
        }

        /* Hero */
        .about-hero {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          min-height: 340px;
          padding: 3rem 0 2rem;
          overflow: hidden;
        }
        .about-hero-content { position: relative; z-index: 1; max-width: 580px; }
        .about-hero-eyebrow {
          font-size: 0.85rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--primary-color, #e74c3c);
          font-weight: 600;
          margin-bottom: 1rem;
        }
        .about-hero-title {
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 800;
          line-height: 1.15;
          color: var(--text-dark, #1a1a2e);
          margin-bottom: 1.25rem;
        }
        .gradient-text {
          background: linear-gradient(135deg, #e74c3c, #f39c12);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .about-hero-sub {
          font-size: 1.05rem;
          color: var(--text-light, #6b7280);
          line-height: 1.7;
        }
        .about-hero-graphic { position: relative; width: 280px; height: 280px; flex-shrink: 0; }
        .about-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(40px);
          opacity: 0.45;
          animation: floatOrb 6s ease-in-out infinite alternate;
        }
        .orb-1 { width: 180px; height: 180px; background: #e74c3c; top: 20px; right: 20px; animation-delay: 0s; }
        .orb-2 { width: 130px; height: 130px; background: #f39c12; bottom: 30px; right: 80px; animation-delay: 2s; }
        .orb-3 { width: 100px; height: 100px; background: #3b82f6; top: 60px; right: 120px; animation-delay: 4s; }
        @keyframes floatOrb {
          from { transform: translateY(0px) scale(1); }
          to { transform: translateY(-20px) scale(1.08); }
        }

        /* Stats */
        .about-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 1.25rem;
          margin: 2rem 0 3rem;
        }
        .stat-card {
          background: linear-gradient(135deg, rgba(231,76,60,0.08), rgba(243,156,18,0.05));
          border: 1px solid rgba(231,76,60,0.15);
          border-radius: 16px;
          padding: 1.5rem;
          text-align: center;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .stat-card:hover { transform: translateY(-4px); box-shadow: 0 12px 30px rgba(231,76,60,0.12); }
        .stat-value { display: block; font-size: 2rem; font-weight: 800; color: var(--primary-color, #e74c3c); }
        .stat-label { display: block; font-size: 0.85rem; color: var(--text-light, #6b7280); margin-top: 0.3rem; }

        /* Mission */
        .about-mission {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
          align-items: start;
          margin-bottom: 3.5rem;
        }
        .mission-text h2 { font-size: 1.75rem; font-weight: 700; color: var(--text-dark, #1a1a2e); margin-bottom: 1rem; }
        .mission-text p { color: var(--text-light, #6b7280); line-height: 1.75; margin-bottom: 1rem; }
        .mission-visual { display: flex; flex-direction: column; gap: 1rem; }
        .mission-card {
          background: #fff;
          border: 1px solid #f0f0f0;
          border-radius: 14px;
          padding: 1.25rem 1.5rem;
          display: flex;
          gap: 1rem;
          align-items: flex-start;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .mission-card:hover { transform: translateX(6px); box-shadow: 0 6px 20px rgba(0,0,0,0.07); }
        .mission-icon { font-size: 1.8rem; flex-shrink: 0; }
        .mission-card h3 { font-size: 1rem; font-weight: 700; color: var(--text-dark, #1a1a2e); margin-bottom: 0.25rem; }
        .mission-card p { font-size: 0.88rem; color: var(--text-light, #6b7280); line-height: 1.6; margin: 0; }

        /* Team */
        .about-team { text-align: center; margin-bottom: 3.5rem; }
        .section-title { font-size: 1.75rem; font-weight: 700; color: var(--text-dark, #1a1a2e); margin-bottom: 0.5rem; }
        .section-subtitle { color: var(--text-light, #6b7280); margin-bottom: 2rem; }
        .team-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; }
        .team-card {
          background: #fff;
          border: 1px solid #f0f0f0;
          border-radius: 18px;
          padding: 2rem 1.5rem;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .team-card:hover { transform: translateY(-6px); box-shadow: 0 16px 40px rgba(0,0,0,0.09); }
        .team-avatar { font-size: 3.5rem; margin-bottom: 1rem; }
        .team-name { font-size: 1.05rem; font-weight: 700; color: var(--text-dark, #1a1a2e); margin-bottom: 0.25rem; }
        .team-role { font-size: 0.85rem; color: var(--primary-color, #e74c3c); font-weight: 500; }

        /* CTA */
        .about-cta {
          background: linear-gradient(135deg, #e74c3c, #f39c12);
          border-radius: 20px;
          padding: 3rem 2rem;
          text-align: center;
          color: #fff;
        }
        .about-cta h2 { font-size: 1.75rem; font-weight: 800; margin-bottom: 0.75rem; }
        .about-cta p { font-size: 1rem; opacity: 0.9; margin-bottom: 1.75rem; }
        .cta-btn {
          display: inline-block;
          background: #fff;
          color: #e74c3c;
          font-weight: 700;
          font-size: 1rem;
          padding: 0.85rem 2rem;
          border-radius: 50px;
          text-decoration: none;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .cta-btn:hover { transform: translateY(-3px); box-shadow: 0 10px 25px rgba(0,0,0,0.2); }

        @media (max-width: 768px) {
          .about-hero { flex-direction: column; text-align: center; }
          .about-hero-graphic { display: none; }
          .about-mission { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};

export default About;
