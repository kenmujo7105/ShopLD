import React from 'react';

const categories = [
  "Tất cả",
  "Thời trang Nam",
  "Thời trang Nữ",
  "Giày dép",
  "Phụ kiện",
  "Đồng hồ"
];

const CategoryMenu = ({ selectedCategory, onSelectCategory }) => {
  return (
    <section className="category-menu">
      <h2 className="category-title">Danh mục nổi bật</h2>
      <ul className="category-list">
        {categories.map((cat, index) => (
          <li 
            key={index} 
            className={`category-item ${cat === selectedCategory ? 'active' : ''}`}
            onClick={() => onSelectCategory(cat)}
          >
            {cat}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CategoryMenu;
