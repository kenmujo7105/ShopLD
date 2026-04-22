import axios from 'axios';

// ── Axios Instance ───────────────────────────────────────────────────────────
// Base URL loaded from environment variable (.env)
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// ── Interceptor: Tự động gắn JWT Token vào mọi request ──────────────────────
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// ── Product API Functions ────────────────────────────────────────────────────

/**
 * Lấy tất cả sản phẩm
 * GET /api/products
 */
export const getProducts = async () => {
  const response = await api.get('/products');
  return response.data;
};

/**
 * Lấy sản phẩm theo ID
 * GET /api/products/{id}
 */
export const getProductById = async (id) => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};

/**
 * Tạo sản phẩm mới
 * POST /api/products
 * @param {Object} productData - { name, price, salePrice, category, description, imageUrl }
 */
export const createProduct = async (productData) => {
  const response = await api.post('/products', productData);
  return response.data;
};

/**
 * Cập nhật sản phẩm
 * PUT /api/products/{id}
 * @param {number} id - Product ID
 * @param {Object} productData - Full product object including id
 */
export const updateProduct = async (id, productData) => {
  const response = await api.put(`/products/${id}`, productData);
  return response.data;
};

/**
 * Xoá sản phẩm
 * DELETE /api/products/{id}
 */
export const deleteProduct = async (id) => {
  const response = await api.delete(`/products/${id}`);
  return response.data;
};

// ── Auth API Functions ───────────────────────────────────────────────────────

/**
 * Đăng ký tài khoản mới
 * POST /api/auth/register
 * @param {Object} data - { username, email, password }
 */
export const register = async (data) => {
  const response = await api.post('/auth/register', data);
  return response.data;
};

/**
 * Đăng nhập
 * POST /api/auth/login
 * @param {Object} credentials - { email, password }
 * @returns {{ message, token, user: { id, username, email } }}
 */
export const login = async (credentials) => {
  const response = await api.post('/auth/login', credentials);
  return response.data;
};

export default api;
