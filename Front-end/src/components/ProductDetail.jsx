import React, { useState } from 'react';

const ProductDetail = ({ product, onBack, onAddToCart }) => {
  // Trạng thái quản lý số lượng thêm vào giỏ
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  // Format tiền tệ
  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  };

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCartClick = () => {
    onAddToCart(product, quantity);
    // Trở về trang nhà hoặc giữ nguyên đều đc, ở đây chọn giữ nguyên tiện mua tiếp
  };

  return (
    <div className="product-detail-container">
      {/* Nút quay lại (Breadcrumb mô phỏng) */}
      <button className="back-btn" onClick={onBack}>
        Trở về
      </button>

      <div className="product-detail-grid">
        {/* Cột trái: Ảnh sản phẩm */}
        <div className="detail-image-box">
          <img src={product.imageUrl || product.image} alt={product.name} className="detail-img" />
          {product.salePrice && <span className="detail-sale-badge">Đang Giảm Giá</span>}
        </div>

        {/* Cột phải: Thông tin */}
        <div className="detail-info-box">
          <h1 className="detail-name">{product.name}</h1>
          <p className="detail-category">Danh mục: <span>{product.category}</span></p>
          
          <div className="detail-price-box">
            <span className="detail-current-price">
              {formatPrice(product.salePrice ? product.salePrice : product.price)}
            </span>
            {product.salePrice && (
              <span className="detail-old-price">{formatPrice(product.price)}</span>
            )}
          </div>

          <div className="detail-description">
            <h3>Đặc điểm nổi bật</h3>
            <p>{product.description || "Website eCommerce đồ án này được thiết kế theo tiêu chuẩn công nghệ React Vite hiện đại. Miêu tả sản phẩm đang cập nhật..."}</p>
          </div>

          <div className="detail-actions">
            {/* Khung số lượng */}
            <div className="detail-qty-wrapper">
              <span className="qty-label">Số lượng:</span>
              <div className="qty-controls detail-qty">
                <button type="button" onClick={handleDecrease}>-</button>
                <span>{quantity}</span>
                <button type="button" onClick={handleIncrease}>+</button>
              </div>
            </div>

            {/* Nút thêm vào giỏ */}
            <div className="detail-buttons">
              <button className="btn-add-to-cart-large" onClick={handleAddToCartClick}>
                Thêm Vào Giỏ Hàng
              </button>
              <button className="btn-buy-now" onClick={() => {
                  handleAddToCartClick();
                  alert("Giả lập chuyển qua kết nối với Gateway thanh toán!");
              }}>
                Mua Ngay
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
