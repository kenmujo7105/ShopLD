import React, { useState, useEffect } from 'react';
import { getProducts, createProduct, updateProduct, deleteProduct } from '../services/apiServices';

// ── Form rỗng mặc định ──
const emptyForm = {
  name: '',
  price: '',
  salePrice: '',
  category: 'Thời trang Nam',
  description: '',
  imageUrl: '',
};

const categories = ['Thời trang Nam', 'Thời trang Nữ', 'Giày dép', 'Phụ kiện', 'Đồng hồ'];

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState(emptyForm);
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  // ── Fetch danh sách sản phẩm ──
  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const data = await getProducts();
      setProducts(data);
    } catch (err) {
      console.error('Lỗi tải sản phẩm:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // ── Auto-clear success message ──
  useEffect(() => {
    if (successMsg) {
      const timer = setTimeout(() => setSuccessMsg(''), 3000);
      return () => clearTimeout(timer);
    }
  }, [successMsg]);

  // ── Format tiền VND ──
  const formatPrice = (price) =>
    new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);

  // ── Xử lý input thay đổi ──
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  // ── Mở form thêm mới ──
  const handleOpenAdd = () => {
    setEditingProduct(null);
    setFormData(emptyForm);
    setError('');
    setShowForm(true);
  };

  // ── Mở form chỉnh sửa ──
  const handleOpenEdit = (product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      price: product.price.toString(),
      salePrice: product.salePrice ? product.salePrice.toString() : '',
      category: product.category,
      description: product.description || '',
      imageUrl: product.imageUrl || '',
    });
    setError('');
    setShowForm(true);
  };

  // ── Đóng form ──
  const handleCloseForm = () => {
    setShowForm(false);
    setEditingProduct(null);
    setFormData(emptyForm);
    setError('');
  };

  // ── Submit form (Thêm mới / Cập nhật) ──
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!formData.name || !formData.price || !formData.category) {
      setError('Vui lòng điền Tên, Giá và Danh mục.');
      return;
    }

    const payload = {
      name: formData.name,
      price: parseFloat(formData.price),
      salePrice: formData.salePrice ? parseFloat(formData.salePrice) : null,
      category: formData.category,
      description: formData.description,
      imageUrl: formData.imageUrl,
    };

    try {
      if (editingProduct) {
        // Cập nhật
        await updateProduct(editingProduct.id, { ...payload, id: editingProduct.id });
        setSuccessMsg(`Đã cập nhật "${formData.name}" thành công!`);
      } else {
        // Thêm mới
        await createProduct(payload);
        setSuccessMsg(`Đã thêm "${formData.name}" thành công!`);
      }
      handleCloseForm();
      await fetchProducts();
    } catch (err) {
      const msg = err.response?.data?.message || 'Thao tác thất bại. Vui lòng thử lại.';
      setError(msg);
    }
  };

  // ── Xóa sản phẩm ──
  const handleDelete = async (product) => {
    if (!window.confirm(`Bạn có chắc muốn xoá "${product.name}"?`)) return;

    try {
      await deleteProduct(product.id);
      setSuccessMsg(`Đã xoá "${product.name}" thành công!`);
      await fetchProducts();
    } catch (err) {
      console.error('Lỗi xoá sản phẩm:', err);
      setError('Xoá sản phẩm thất bại.');
    }
  };

  return (
    <div className="admin-dashboard">
      <div className="admin-header">
        <div>
          <h1 className="admin-title">⚙️ Quản Lý Sản Phẩm</h1>
          <p className="admin-subtitle">Tổng cộng: {products.length} sản phẩm</p>
        </div>
        <button className="admin-add-btn" onClick={handleOpenAdd}>
          ＋ Thêm sản phẩm
        </button>
      </div>

      {/* Thông báo */}
      {successMsg && <div className="admin-success">{successMsg}</div>}

      {/* ── Bảng sản phẩm ── */}
      {isLoading ? (
        <p style={{ textAlign: 'center', padding: '3rem', color: '#6b7280' }}>⏳ Đang tải dữ liệu...</p>
      ) : (
        <div className="admin-table-wrapper">
          <table className="admin-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Ảnh</th>
                <th>Tên sản phẩm</th>
                <th>Giá gốc</th>
                <th>Giá sale</th>
                <th>Danh mục</th>
                <th>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.id}>
                  <td className="td-id">{p.id}</td>
                  <td>
                    <img src={p.imageUrl} alt={p.name} className="admin-product-img" />
                  </td>
                  <td className="td-name">{p.name}</td>
                  <td>{formatPrice(p.price)}</td>
                  <td>{p.salePrice ? formatPrice(p.salePrice) : '—'}</td>
                  <td><span className="admin-category-badge">{p.category}</span></td>
                  <td>
                    <div className="admin-actions">
                      <button className="admin-edit-btn" onClick={() => handleOpenEdit(p)}>
                        ✏️ Sửa
                      </button>
                      <button className="admin-delete-btn" onClick={() => handleDelete(p)}>
                        🗑️ Xoá
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* ── Modal Form (Thêm / Sửa) ── */}
      {showForm && (
        <div className="modal-overlay" onClick={handleCloseForm}>
          <div className="modal-content admin-form-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={handleCloseForm}>✖</button>
            <h2 className="modal-title">
              {editingProduct ? '✏️ Chỉnh sửa sản phẩm' : '＋ Thêm sản phẩm mới'}
            </h2>

            {error && <div className="auth-error"><span>⚠️</span> {error}</div>}

            <form className="auth-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="admin-name">Tên sản phẩm *</label>
                <input id="admin-name" type="text" name="name" placeholder="Nhập tên..." value={formData.name} onChange={handleChange} />
              </div>

              <div className="admin-form-row">
                <div className="form-group">
                  <label htmlFor="admin-price">Giá gốc (VND) *</label>
                  <input id="admin-price" type="number" name="price" placeholder="250000" value={formData.price} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="admin-sale">Giá sale (VND)</label>
                  <input id="admin-sale" type="number" name="salePrice" placeholder="Để trống nếu không sale" value={formData.salePrice} onChange={handleChange} />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="admin-category">Danh mục *</label>
                <select id="admin-category" name="category" value={formData.category} onChange={handleChange} className="admin-select">
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="admin-image">URL hình ảnh</label>
                <input id="admin-image" type="text" name="imageUrl" placeholder="https://..." value={formData.imageUrl} onChange={handleChange} />
              </div>

              <div className="form-group">
                <label htmlFor="admin-desc">Mô tả</label>
                <textarea id="admin-desc" name="description" placeholder="Mô tả sản phẩm..." value={formData.description} onChange={handleChange} rows="3" className="admin-textarea" />
              </div>

              <button type="submit" className="btn-submit auth-submit">
                {editingProduct ? '💾 Lưu thay đổi' : '＋ Thêm sản phẩm'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
