# ShopLD - E-commerce Web

Chào mừng bạn đến với mô hình dự án website bán hàng **ShopLD**. Đây là một dự án Front-end được xây dựng bằng ReactJS và Vite, với mục tiêu mang đến trải nghiệm mua sắm nhanh chóng, mượt mà và giao diện hiện đại.

## ✨ Các tính năng nổi bật

- **Khám phá sản phẩm**: Danh sách sản phẩm được thiết kế hiển thị dạng lưới rõ ràng, chia theo danh mục (Tất cả, Áo, Quần, Phụ kiện, v.v.).
- **Tìm kiếm trực tiếp (Live Search)**: Tìm kiếm sản phẩm ngay lập tức khi bạn gõ từ khóa trên thanh Header.
- **Trang chi tiết sản phẩm**: Hiển thị thông tin chi tiết, giá tiền, mô tả của sản phẩm. Người dùng có thể chọn số lượng muốn mua.
- **Quản lý giỏ hàng**:
  - Thêm một hoặc nhiều sản phẩm vào giỏ hàng.
  - Tăng / Giảm / Xoá sản phẩm trực tiếp ở màn hình Giỏ hàng.
  - Hiển thị badge theo thời gian thực chứa tổng số lượng sản phẩm ở Header.
  - Tự động tính toán tổng số tiền giỏ hàng.
- **Đăng nhập & Đăng ký**: Giao diện Modal trực quan để người dùng tạo hoặc đăng nhập tài khoản.
- **Thiết kế Responsive**: Tương thích và hiển thị tốt trên các kích thước màn hình khác nhau.

## 🛠️ Công nghệ sử dụng

- **Framework**: [React.js](https://reactjs.org/) (Function Components, Hooks)
- **Công cụ Build**: [Vite](https://vitejs.dev/) (Nhanh, nhẹ, hỗ trợ Hot Module Replacement)
- **Styling**: Vanilla CSS (`.css` thuần thục với các biến cục bộ, biến thiên màu và hệ thống lưới Flexbox/Grid).

## 🚀 Hướng dẫn cài đặt và chạy tại Local

Yêu cầu máy tính của bạn phải được cài đặt [Node.js](https://nodejs.org/) (version >= 18).

**Bước 1:** Clone hoặc tải mã nguồn về máy:
```bash
# Di chuyển vào thư mục dự án
cd ecommerceweb
```

**Bước 2:** Cài đặt các thư viện (dependencies) cần thiết:
```bash
npm install
```

**Bước 3:** Chạy server phát triển (Development Server):
```bash
npm run dev
```

**Bước 4:** Mở trình duyệt web và truy cập vào đường dẫn mà Vite cung cấp (Thường là `http://localhost:5173/`).

## 📂 Kiến trúc dự án cơ bản

```text
ecommerceweb/
├── public/                 # Các tài nguyên tĩnh (favicon, v.v.)
├── src/
│   ├── components/         # Chứa các Component tái sử dụng
│   │   ├── Header.jsx      # Thanh điều hướng và tìm kiếm
│   │   ├── Footer.jsx      # Chân trang website
│   │   ├── CategoryMenu.jsx# Menu danh mục sản phẩm 
│   │   ├── ProductList.jsx # Lưới render danh sách sản phẩm
│   │   ├── ProductCard.jsx # Thẻ hiển thị một sản phẩm lẻ
│   │   └── ProductDetail.jsx# Giao diện chi tiết khi bấm vào sản phẩm
│   ├── data/
│   │   └── products.js     # Mock data (Dữ liệu mẫu của sản phẩm)
│   ├── App.jsx             # Component Gốc, nơi ghép nối các component phụ và quản lý State chính
│   ├── Home.css            # File CSS xử lý giao diện tổng thể và Components
│   └── main.jsx            # Cổng khởi chạy ứng dụng React
├── index.html              # Trang gốc HTML
├── package.json            # Thông tin dự án và thư viện
└── README.md               # File thông tin (là file bạn đang đọc)
```

## 📝 Thông tin bản quyền
Bản quyền &copy; 2026 ShopLD.
Ứng dụng được thiết kế và xây dựng dành riêng cho mục đích thử nghiệm & nghiên cứu với ReactJS.
