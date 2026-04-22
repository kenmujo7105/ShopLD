using Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }

    public DbSet<Product> Products { get; set; } = null!;
    public DbSet<User> Users { get; set; } = null!;

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        // Seed all 27 products from the React frontend mock data
        modelBuilder.Entity<Product>().HasData(
            // ── THỜI TRANG NAM ──
            new Product { Id = 1, Name = "Áo Thun Cổ Tròn Xanh", Price = 250000, SalePrice = 199000, Category = "Thời trang Nam", ImageUrl = "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80", Description = "Áo thun nam cổ tròn nam tính, chất liệu 100% cotton thoáng mát, thấm hút mồ hôi cực tốt. Thiết kế basic dễ dàng phối cùng nhiều loại trang phục đi chơi, dạo phố." },
            new Product { Id = 2, Name = "Quần Jean Nam Slimfit", Price = 450000, SalePrice = null, Category = "Thời trang Nam", ImageUrl = "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=500&q=80", Description = "Quần Jean phom Slimfit tôn dáng, chất denim co giãn 4 chiều mang lại sự thoải mái tối đa kể cả khi vận động. Phù hợp mặc đi làm hoặc đi tiệc." },
            new Product { Id = 8, Name = "Áo Sơ Mi Trắng Oxford", Price = 350000, SalePrice = 290000, Category = "Thời trang Nam", ImageUrl = "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=500&q=80", Description = "Áo sơ mi vải Oxford dày dặn, đứng form chuẩn công sở. Bề mặt vải chống nhắn tối ưu giúp người mặc luôn tươm tất suốt cả ngày." },
            new Product { Id = 9, Name = "Quần Shorts Kaki Nam", Price = 220000, SalePrice = 150000, Category = "Thời trang Nam", ImageUrl = "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=500&q=80", Description = "Quần short kaki trẻ trung và năng động với túi 2 bên hông sâu tiện lợi. Chất vải mịn, bền màu sau nhiều lần giặt." },
            new Product { Id = 10, Name = "Áo Polo Nam Form Regular", Price = 320000, SalePrice = null, Category = "Thời trang Nam", ImageUrl = "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=500&q=80", Description = "Áo thun có cổ phong cách lịch thiệp, dễ mặc và tôn vai. Chất vải cá sấu (Lacoste) thông thoáng, thân thiện với làn da." },
            new Product { Id = 11, Name = "Áo Khoác Bomber Nam", Price = 550000, SalePrice = 450000, Category = "Thời trang Nam", ImageUrl = "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=500&q=80", Description = "Áo khoác đi gió phong cách quân đội cá tính, form ôm vừa vặn, giữ ấm và che mưa lất phất cực tốt." },

            // ── THỜI TRANG NỮ ──
            new Product { Id = 7, Name = "Váy Nữ Mùa Hè", Price = 550000, SalePrice = 420000, Category = "Thời trang Nữ", ImageUrl = "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=500&q=80", Description = "Váy voan nhẹ nhàng, bay bổng, hoạ tiết hoa mùa hè nữ tính. Rất thích hợp cho những chuyến dã ngoại, dạo biển và chụp hình sống ảo." },
            new Product { Id = 12, Name = "Áo Dài Tay Cổ Vuông", Price = 280000, SalePrice = 199000, Category = "Thời trang Nữ", ImageUrl = "https://images.unsplash.com/photo-1550614000-4b95d415f3f0?auto=format&fit=crop&w=500&q=80", Description = "Thiết kế cổ vuông tôn xương quai xanh quyến rũ. Áo có chi tiết bo thun tay tạo nét tiểu thư thanh lịch." },
            new Product { Id = 13, Name = "Chân Váy Chữ A Công Sở", Price = 300000, SalePrice = null, Category = "Thời trang Nữ", ImageUrl = "https://images.unsplash.com/photo-1583496661160-c5dcb4c6f1bc?auto=format&fit=crop&w=500&q=80", Description = "Chân váy đen phối khoá lưng đơn giản, che khuyết điểm đùi tốt, luôn là item must-have trong tủ đồ phái đẹp." },
            new Product { Id = 14, Name = "Đồ Bộ Đũi Mặc Nhà", Price = 180000, SalePrice = null, Category = "Thời trang Nữ", ImageUrl = "https://images.unsplash.com/photo-1601056588266-96a8eff52f4c?auto=format&fit=crop&w=500&q=80", Description = "Set bộ ngủ vải đũi cao cấp, cực mát mẻ cho những ngày oi bức. An toàn và nịnh da nhạy cảm." },
            new Product { Id = 15, Name = "Áo Blazer Hàn Quốc", Price = 650000, SalePrice = 590000, Category = "Thời trang Nữ", ImageUrl = "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=500&q=80", Description = "Blazer dáng rộng Hàn Quốc siêu hack dáng. Vải tuýt xi đứng form, không sợ xù lông, mặc được đa mùa." },

            // ── GIÀY DÉP ──
            new Product { Id = 3, Name = "Giày Sneaker Thể Thao", Price = 850000, SalePrice = 750000, Category = "Giày dép", ImageUrl = "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80", Description = "Giày thể thao êm ái, bám đường, công nghệ đệm khí đàn hồi siêu nhẹ, hỗ trợ tối đa việc chạy bộ hoặc mang thời trang đường phố." },
            new Product { Id = 16, Name = "Giày Cao Gót Mũi Nhọn", Price = 450000, SalePrice = 350000, Category = "Giày dép", ImageUrl = "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=500&q=80", Description = "Thiết kế giày cao gót 7 phân, lót nhung êm ái, phù hợp mang công sở nguyên ngày dài mà không đau chân." },
            new Product { Id = 17, Name = "Dép Bánh Mì Cao Su", Price = 150000, SalePrice = null, Category = "Giày dép", ImageUrl = "https://images.unsplash.com/photo-1562183241-b937e95585b6?auto=format&fit=crop&w=500&q=80", Description = "Dép đúc nguyên khối Eva dẻo, đi nước thoải mái không lo trơn trượt. Hot trend của mùa hè năm nay." },
            new Product { Id = 18, Name = "Giày Lười Loafer Da", Price = 890000, SalePrice = null, Category = "Giày dép", ImageUrl = "https://images.unsplash.com/photo-1614252232525-a111a47321ac?auto=format&fit=crop&w=500&q=80", Description = "Giày da bò nguyên tấm sang trọng, đường may nổi tỉ mỉ. Thích hợp tham dự sự kiện cao cấp." },
            new Product { Id = 19, Name = "Giày Chạy Bộ Nam", Price = 1350000, SalePrice = 990000, Category = "Giày dép", ImageUrl = "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=500&q=80", Description = "Phiên bản giày chạy chuyên dụng có đế vát chéo, bám dính tốt với mọi bề mặt từ đường nhựa đến đồi núi." },

            // ── PHỤ KIỆN ──
            new Product { Id = 5, Name = "Balo Chống Nước Tiện Lợi", Price = 350000, SalePrice = null, Category = "Phụ kiện", ImageUrl = "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=80", Description = "Balo đa năng có không gian rộng đủ để vừa laptop 15.6 inch. Chất liệu dù polyeste kháng nước 100% trong mọi cơn mưa rào." },
            new Product { Id = 6, Name = "Mắt Kính Thời Trang", Price = 150000, SalePrice = null, Category = "Phụ kiện", ImageUrl = "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=500&q=80", Description = "Kính mát Unisex gọng mảnh, tròng kính phân cực có tính năng cản 100% tia UV chói lóa." },
            new Product { Id = 20, Name = "Túi Tote Canvas", Price = 90000, SalePrice = 55000, Category = "Phụ kiện", ImageUrl = "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=500&q=80", Description = "Túi vải bố thân thiện môi trường, in hình đồ họa dễ thương. Vật bất ly thân của sinh viên." },
            new Product { Id = 21, Name = "Thắt Lưng Da Đan", Price = 250000, SalePrice = null, Category = "Phụ kiện", ImageUrl = "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=500&q=80", Description = "Thắt lưng da đan tinh tế, đầu khóa tự động đúc nguyên khối chống xước. Quà tặng ý nghĩa cho cánh mày râu." },
            new Product { Id = 22, Name = "Mũ Lưỡi Trai Logo", Price = 120000, SalePrice = 99000, Category = "Phụ kiện", ImageUrl = "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=500&q=80", Description = "Mũ baseball form mềm cất vừa cốp xe. Phía sau có khoá kim loại chỉnh size tuỳ ý chuẩn đầu Châu Á." },

            // ── ĐỒNG HỒ ──
            new Product { Id = 4, Name = "Đồng Hồ Đeo Tay Cổ Điển", Price = 1200000, SalePrice = 990000, Category = "Đồng hồ", ImageUrl = "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=500&q=80", Description = "Mang âm hưởng hoàng gia, mặt kính Sapphire chống trầy xước kết hợp dây da cao cấp, tôn lên đẳng cấp cho người sở hữu." },
            new Product { Id = 23, Name = "Đồng Hồ Thông Minh X", Price = 1800000, SalePrice = 1550000, Category = "Đồng hồ", ImageUrl = "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=500&q=80", Description = "Kết nối smartphone bằng Bluetooth. Khả năng đo nhịp tim liên tục, cảnh báo sức khỏe và thời lượng pin dùng suốt 15 ngày." },
            new Product { Id = 24, Name = "Đồng Hồ Nữ Dây Lưới", Price = 600000, SalePrice = null, Category = "Đồng hồ", ImageUrl = "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?auto=format&fit=crop&w=500&q=80", Description = "Thiết kế mặt mảnh ôm sát thanh lịch, dây lưới linh hoạt thoáng khí có thể tự thay đổi không cần công cụ tháo nối." },
            new Product { Id = 25, Name = "Đồng Hồ Thể Thao G", Price = 2500000, SalePrice = null, Category = "Đồng hồ", ImageUrl = "https://images.unsplash.com/photo-1622434641406-a158123450f9?auto=format&fit=crop&w=500&q=80", Description = "Sinh ra cho dân phượt. Kháng nước ở độ sâu 100m, chống va đập siêu hạng bằng bộ ốc vít bằng thép titanium." },
            new Product { Id = 26, Name = "Đồng Hồ Cơ Lộ Mặt", Price = 3500000, SalePrice = 2800000, Category = "Đồng hồ", ImageUrl = "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?auto=format&fit=crop&w=500&q=80", Description = "Bộ máy Automatic phô diễn chân kính phức tạp. Tự lên cót dự trữ cót tối đa 72 giờ không cần đeo liên tục." },
            new Product { Id = 27, Name = "Đồng Hồ Sinh Viên", Price = 250000, SalePrice = null, Category = "Đồng hồ", ImageUrl = "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=500&q=80", Description = "Thiết kế tối giản hiển thị rõ giờ phút. Sử dụng mạch Pin Quartz chuẩn Nhật cho độ chính xác cực cao và bền bỉ theo vài năm." }
        );
    }
}
