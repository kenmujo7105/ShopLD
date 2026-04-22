import React from 'react';

const ProductCard = ({ product, onAddToCart, onViewDetail }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  };

  return (
    <div className="product-card" onClick={() => onViewDetail(product)}>
      <div className="img-container">
        {product.salePrice && (
          <span className="sale-badge">Sale</span>
        )}
        <img src={product.imageUrl || product.image} alt={product.name} className="product-img" loading="lazy" />
      </div>
      
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        
        <div className="price-container">
          <span className="current-price">
            {formatPrice(product.salePrice ? product.salePrice : product.price)}
          </span>
          {product.salePrice && (
            <span className="old-price">{formatPrice(product.price)}</span>
          )}
        </div>
        
        <button 
          className="add-cart-btn" 
          onClick={(e) => {
            e.stopPropagation(); // Ngăn sự kiện click bubble lên thẻ chứa để không bị vô tình chuyển trang Detail
            onAddToCart(product);
          }}
        >
          Thêm vào giỏ hàng
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
