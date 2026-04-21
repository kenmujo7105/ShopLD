# 🛒 KenMujo E-commerce Website

Chào mừng bạn đến với **KenMujo E-commerce**, một mô hình website bán hàng Front-end hiện đại được xây dựng bằng **ReactJS** và **Vite**. Dự án được thiết kế với giao diện thân thiện, tối ưu hoá cho trải nghiệm mua sắm mượt mà, tốc độ nhanh và tính năng linh hoạt.

## 🌟 Các tính năng nổi bật

- **🛍️ Khám phá & Lọc Sản phẩm**: Danh sách sản phẩm được trình bày dưới dạng lưới (grid) đẹp mắt, hỗ trợ lọc theo các danh mục như Tất cả, Áo, Quần, Phụ kiện.
- **🔍 Tìm kiếm Trực tiếp (Live Search)**: Tìm kiếm sản phẩm nhanh chóng và tức thời ngay trên thanh Header.
- **📄 Trang Chi tiết Sản phẩm**: Xem thông tin chi tiết, hình ảnh, mức giá và mô tả của từng sản phẩm. Cho phép tuỳ chỉnh số lượng trước khi thêm vào giỏ hàng.
- **🛒 Quản lý Giỏ hàng Toàn diện**:
  - Thêm một hoặc nhiều sản phẩm cùng lúc.
  - Tăng/giảm số lượng hoặc xoá sản phẩm trực tiếp trong Giỏ hàng (Cart Modal).
  - Hiển thị số lượng (badge) sản phẩm trong giỏ hàng theo thời gian thực trên Header.
  - Tự động tính toán và cập nhật tổng tiền thanh toán.
- **🔐 Giao diện Đăng nhập & Đăng ký**: Tích hợp Modal Popup trực quan, thân thiện cho tính năng đăng nhập và tạo tài khoản mới.
- **📱 Thiết kế Responsive**: Tương thích hoàn hảo trên nhiều kích thước màn hình khác nhau (Desktop, Tablet, Mobile).

## 🛠️ Công nghệ Sử dụng

- **Core Framework**: [React 18](https://react.dev/) (Sử dụng Functional Components & Hooks để quản lý State)
- **Công cụ Build**: [Vite](https://vitejs.dev/) (Mang lại tốc độ build cực nhanh và hỗ trợ HMR trơn tru)
- **Styling**: Vanilla CSS (Sử dụng CSS Variables, Flexbox, Grid mang lại giao diện hiện đại, dễ bảo trì)

## 🚀 Hướng dẫn Cài đặt & Chạy Local

Vui lòng đảm bảo máy tính của bạn đã được cài đặt [Node.js](https://nodejs.org/) (phiên bản 18 trở lên).

### Các bước thực hiện:

1. **Truy cập vào thư mục dự án:**
   ```bash
   cd ecommerceweb
   ```

2. **Cài đặt các thư viện (dependencies) cần thiết:**
   ```bash
   npm install
   ```

3. **Khởi chạy Development Server:**
   ```bash
   npm run dev
   ```

4. **Trải nghiệm ứng dụng:**
   Mở trình duyệt web và truy cập vào đường dẫn mà Vite cung cấp (Thông thường là `http://localhost:5173/`).

## 📂 Kiến trúc Thư mục

```text
ecommerceweb/
├── public/                 # Các tài nguyên tĩnh (favicon...)
├── src/
│   ├── components/         # Các Component giao diện tái sử dụng
│   │   ├── CategoryMenu.jsx# Component menu danh mục sản phẩm 
│   │   ├── Footer.jsx      # Chân trang (Footer)
│   │   ├── Header.jsx      # Thanh điều hướng, tìm kiếm và nút giỏ hàng
│   │   ├── ProductCard.jsx # Thẻ hiển thị sản phẩm thu gọn
│   │   ├── ProductDetail.jsx# Giao diện xem chi tiết sản phẩm
│   │   └── ProductList.jsx # Lưới render danh sách sản phẩm
│   ├── data/
│   │   └── products.js     # Dữ liệu mẫu (Mock data) của sản phẩm
│   ├── App.jsx             # Component Gốc - Xử lý logic và State toàn cục
│   ├── Home.css            # Style CSS tập trung cho toàn ứng dụng
│   └── main.jsx            # Điểm neo bắt đầu chạy ứng dụng React
├── index.html              # File HTML gốc
├── package.json            # Cấu hình dự án và danh sách thư viện
├── vite.config.js          # File cấu hình của Vite
└── README.md               # Tài liệu dự án (bạn đang đọc file này)
```

## 📝 Thông tin Bản quyền

Bản quyền &copy; 2026 **KenMujo**.
Dự án này được thiết kế và xây dựng chủ yếu nhằm mục đích học tập, thử nghiệm và nghiên cứu cách hoạt động nền tảng của ReactJS.
