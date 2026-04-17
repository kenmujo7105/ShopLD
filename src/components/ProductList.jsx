import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ selectedCategory, productsData, onAddToCart, onViewDetail, searchQuery = "" }) => {
  
  // Logic lọc sản phẩm dựa vào danh mục và từ khóa tìm kiếm
  const filteredProducts = productsData.filter((product) => {
    const matchCategory = selectedCategory === "Tất cả" || product.category === selectedCategory;
    const matchSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <section className="product-list-container">
      <h2 className="section-title">
        {searchQuery ? `Kết quả tìm kiếm cho "${searchQuery}"` : (selectedCategory === "Tất cả" ? "Sản phẩm nổi bật" : selectedCategory)}
      </h2>
      
      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={onAddToCart}
              onViewDetail={onViewDetail}
            />
          ))
        ) : (
          <div style={{ gridColumn: "1 / -1", textAlign: "center", padding: "3rem", color: "var(--text-light)" }}>
            <p style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>Rất tiếc!</p>
            <p>Hiện chưa có sản phẩm nào thuộc danh mục "{selectedCategory}".</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductList;
