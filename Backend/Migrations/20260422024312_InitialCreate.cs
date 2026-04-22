using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Backend.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Products",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Name = table.Column<string>(type: "character varying(200)", maxLength: 200, nullable: false),
                    Price = table.Column<decimal>(type: "numeric(18,2)", nullable: false),
                    SalePrice = table.Column<decimal>(type: "numeric(18,2)", nullable: true),
                    Category = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false),
                    Description = table.Column<string>(type: "character varying(2000)", maxLength: 2000, nullable: false),
                    ImageUrl = table.Column<string>(type: "character varying(500)", maxLength: 500, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Products", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "Id", "Category", "Description", "ImageUrl", "Name", "Price", "SalePrice" },
                values: new object[,]
                {
                    { 1, "Thời trang Nam", "Áo thun nam cổ tròn nam tính, chất liệu 100% cotton thoáng mát, thấm hút mồ hôi cực tốt. Thiết kế basic dễ dàng phối cùng nhiều loại trang phục đi chơi, dạo phố.", "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80", "Áo Thun Cổ Tròn Xanh", 250000m, 199000m },
                    { 2, "Thời trang Nam", "Quần Jean phom Slimfit tôn dáng, chất denim co giãn 4 chiều mang lại sự thoải mái tối đa kể cả khi vận động. Phù hợp mặc đi làm hoặc đi tiệc.", "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=500&q=80", "Quần Jean Nam Slimfit", 450000m, null },
                    { 3, "Giày dép", "Giày thể thao êm ái, bám đường, công nghệ đệm khí đàn hồi siêu nhẹ, hỗ trợ tối đa việc chạy bộ hoặc mang thời trang đường phố.", "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80", "Giày Sneaker Thể Thao", 850000m, 750000m },
                    { 4, "Đồng hồ", "Mang âm hưởng hoàng gia, mặt kính Sapphire chống trầy xước kết hợp dây da cao cấp, tôn lên đẳng cấp cho người sở hữu.", "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=500&q=80", "Đồng Hồ Đeo Tay Cổ Điển", 1200000m, 990000m },
                    { 5, "Phụ kiện", "Balo đa năng có không gian rộng đủ để vừa laptop 15.6 inch. Chất liệu dù polyeste kháng nước 100% trong mọi cơn mưa rào.", "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=80", "Balo Chống Nước Tiện Lợi", 350000m, null },
                    { 6, "Phụ kiện", "Kính mát Unisex gọng mảnh, tròng kính phân cực có tính năng cản 100% tia UV chói lóa.", "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=500&q=80", "Mắt Kính Thời Trang", 150000m, null },
                    { 7, "Thời trang Nữ", "Váy voan nhẹ nhàng, bay bổng, hoạ tiết hoa mùa hè nữ tính. Rất thích hợp cho những chuyến dã ngoại, dạo biển và chụp hình sống ảo.", "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=500&q=80", "Váy Nữ Mùa Hè", 550000m, 420000m },
                    { 8, "Thời trang Nam", "Áo sơ mi vải Oxford dày dặn, đứng form chuẩn công sở. Bề mặt vải chống nhắn tối ưu giúp người mặc luôn tươm tất suốt cả ngày.", "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=500&q=80", "Áo Sơ Mi Trắng Oxford", 350000m, 290000m },
                    { 9, "Thời trang Nam", "Quần short kaki trẻ trung và năng động với túi 2 bên hông sâu tiện lợi. Chất vải mịn, bền màu sau nhiều lần giặt.", "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=500&q=80", "Quần Shorts Kaki Nam", 220000m, 150000m },
                    { 10, "Thời trang Nam", "Áo thun có cổ phong cách lịch thiệp, dễ mặc và tôn vai. Chất vải cá sấu (Lacoste) thông thoáng, thân thiện với làn da.", "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=500&q=80", "Áo Polo Nam Form Regular", 320000m, null },
                    { 11, "Thời trang Nam", "Áo khoác đi gió phong cách quân đội cá tính, form ôm vừa vặn, giữ ấm và che mưa lất phất cực tốt.", "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=500&q=80", "Áo Khoác Bomber Nam", 550000m, 450000m },
                    { 12, "Thời trang Nữ", "Thiết kế cổ vuông tôn xương quai xanh quyến rũ. Áo có chi tiết bo thun tay tạo nét tiểu thư thanh lịch.", "https://images.unsplash.com/photo-1550614000-4b95d415f3f0?auto=format&fit=crop&w=500&q=80", "Áo Dài Tay Cổ Vuông", 280000m, 199000m },
                    { 13, "Thời trang Nữ", "Chân váy đen phối khoá lưng đơn giản, che khuyết điểm đùi tốt, luôn là item must-have trong tủ đồ phái đẹp.", "https://images.unsplash.com/photo-1583496661160-c5dcb4c6f1bc?auto=format&fit=crop&w=500&q=80", "Chân Váy Chữ A Công Sở", 300000m, null },
                    { 14, "Thời trang Nữ", "Set bộ ngủ vải đũi cao cấp, cực mát mẻ cho những ngày oi bức. An toàn và nịnh da nhạy cảm.", "https://images.unsplash.com/photo-1601056588266-96a8eff52f4c?auto=format&fit=crop&w=500&q=80", "Đồ Bộ Đũi Mặc Nhà", 180000m, null },
                    { 15, "Thời trang Nữ", "Blazer dáng rộng Hàn Quốc siêu hack dáng. Vải tuýt xi đứng form, không sợ xù lông, mặc được đa mùa.", "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=500&q=80", "Áo Blazer Hàn Quốc", 650000m, 590000m },
                    { 16, "Giày dép", "Thiết kế giày cao gót 7 phân, lót nhung êm ái, phù hợp mang công sở nguyên ngày dài mà không đau chân.", "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=500&q=80", "Giày Cao Gót Mũi Nhọn", 450000m, 350000m },
                    { 17, "Giày dép", "Dép đúc nguyên khối Eva dẻo, đi nước thoải mái không lo trơn trượt. Hot trend của mùa hè năm nay.", "https://images.unsplash.com/photo-1562183241-b937e95585b6?auto=format&fit=crop&w=500&q=80", "Dép Bánh Mì Cao Su", 150000m, null },
                    { 18, "Giày dép", "Giày da bò nguyên tấm sang trọng, đường may nổi tỉ mỉ. Thích hợp tham dự sự kiện cao cấp.", "https://images.unsplash.com/photo-1614252232525-a111a47321ac?auto=format&fit=crop&w=500&q=80", "Giày Lười Loafer Da", 890000m, null },
                    { 19, "Giày dép", "Phiên bản giày chạy chuyên dụng có đế vát chéo, bám dính tốt với mọi bề mặt từ đường nhựa đến đồi núi.", "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=500&q=80", "Giày Chạy Bộ Nam", 1350000m, 990000m },
                    { 20, "Phụ kiện", "Túi vải bố thân thiện môi trường, in hình đồ họa dễ thương. Vật bất ly thân của sinh viên.", "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=500&q=80", "Túi Tote Canvas", 90000m, 55000m },
                    { 21, "Phụ kiện", "Thắt lưng da đan tinh tế, đầu khóa tự động đúc nguyên khối chống xước. Quà tặng ý nghĩa cho cánh mày râu.", "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=500&q=80", "Thắt Lưng Da Đan", 250000m, null },
                    { 22, "Phụ kiện", "Mũ baseball form mềm cất vừa cốp xe. Phía sau có khoá kim loại chỉnh size tuỳ ý chuẩn đầu Châu Á.", "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=500&q=80", "Mũ Lưỡi Trai Logo", 120000m, 99000m },
                    { 23, "Đồng hồ", "Kết nối smartphone bằng Bluetooth. Khả năng đo nhịp tim liên tục, cảnh báo sức khỏe và thời lượng pin dùng suốt 15 ngày.", "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=500&q=80", "Đồng Hồ Thông Minh X", 1800000m, 1550000m },
                    { 24, "Đồng hồ", "Thiết kế mặt mảnh ôm sát thanh lịch, dây lưới linh hoạt thoáng khí có thể tự thay đổi không cần công cụ tháo nối.", "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?auto=format&fit=crop&w=500&q=80", "Đồng Hồ Nữ Dây Lưới", 600000m, null },
                    { 25, "Đồng hồ", "Sinh ra cho dân phượt. Kháng nước ở độ sâu 100m, chống va đập siêu hạng bằng bộ ốc vít bằng thép titanium.", "https://images.unsplash.com/photo-1622434641406-a158123450f9?auto=format&fit=crop&w=500&q=80", "Đồng Hồ Thể Thao G", 2500000m, null },
                    { 26, "Đồng hồ", "Bộ máy Automatic phô diễn chân kính phức tạp. Tự lên cót dự trữ cót tối đa 72 giờ không cần đeo liên tục.", "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?auto=format&fit=crop&w=500&q=80", "Đồng Hồ Cơ Lộ Mặt", 3500000m, 2800000m },
                    { 27, "Đồng hồ", "Thiết kế tối giản hiển thị rõ giờ phút. Sử dụng mạch Pin Quartz chuẩn Nhật cho độ chính xác cực cao và bền bỉ theo vài năm.", "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=500&q=80", "Đồng Hồ Sinh Viên", 250000m, null }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Products");
        }
    }
}
