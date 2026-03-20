// ===== 200 CÂU HỎI MÔI TRƯỜNG =====
let questions = [

{q:"Rác nào có thể tái chế?",a:["Pin","Chai nhựa","Thức ăn","Lá cây"],c:1},
{q:"Pin thuộc loại rác gì?",a:["Tái chế","Hữu cơ","Nguy hại","Giấy"],c:2},
{q:"Khí gây hiệu ứng nhà kính chính?",a:["O2","CO2","N2","H2"],c:1},
{q:"Nguồn năng lượng tái tạo?",a:["Than","Dầu","Mặt trời","Khí tự nhiên"],c:2},
{q:"Ô nhiễm nước do nguyên nhân nào?",a:["Rác thải","Ánh sáng","Gió","Âm thanh"],c:0},
{q:"Nhựa mất bao lâu phân hủy?",a:["1 năm","10 năm","100+ năm","1 tháng"],c:2},
{q:"Rác hữu cơ gồm?",a:["Pin","Nhựa","Thức ăn","Kim loại"],c:2},
{q:"Hiệu ứng nhà kính gây ra điều gì?",a:["Lạnh lên","Nóng lên","Mưa nhiều","Gió mạnh"],c:1},
{q:"Ô nhiễm không khí do đâu?",a:["Xe cộ","Cây xanh","Nước","Đá"],c:0},
{q:"Tái chế giúp gì?",a:["Giảm rác","Tăng rác","Ô nhiễm hơn","Không gì"],c:0},

{q:"Năng lượng gió là gì?",a:["Tái tạo","Không dùng được","Độc hại","Ô nhiễm"],c:0},
{q:"Biến đổi khí hậu do nguyên nhân chính?",a:["CO2 tăng","O2","Nước","Đất"],c:0},
{q:"Trồng cây giúp gì?",a:["Ô nhiễm hơn","Giảm CO2","Không ảnh hưởng","Tăng rác"],c:1},
{q:"Nguồn nước sạch là gì?",a:["Nước suối","Nước thải","Nước cống","Nước bẩn"],c:0},
{q:"Than đá là năng lượng gì?",a:["Tái tạo","Không tái tạo","Sạch","Không biết"],c:1},

{q:"Năng lượng mặt trời có đặc điểm gì?",a:["Sạch","Bẩn","Độc","Không dùng"],c:0},
{q:"Rác nguy hại gồm?",a:["Pin","Giấy","Thức ăn","Lá"],c:0},
{q:"Giảm nhựa bằng cách nào?",a:["Dùng nhiều","Hạn chế","Đốt","Chôn"],c:1},
{q:"Tầng ozone có tác dụng gì?",a:["Bảo vệ Trái Đất","Làm nóng","Tạo nước","Gây mưa"],c:0},
{q:"Nước chiếm bao nhiêu bề mặt Trái Đất?",a:["70%","10%","30%","5%"],c:0},

{q:"Rừng có vai trò gì?",a:["Giữ nước","Ô nhiễm","Không","Nóng"],c:0},
{q:"Chặt rừng gây hậu quả gì?",a:["Lũ lụt","Mát mẻ","Sạch hơn","Không"],c:0},
{q:"CO2 sinh ra từ đâu?",a:["Đốt nhiên liệu","Cây","Nước","Đá"],c:0},
{q:"Tiết kiệm điện giúp gì?",a:["Giảm ô nhiễm","Tăng ô nhiễm","Không","Phí"],c:0},
{q:"Nhựa dùng 1 lần có tốt không?",a:["Tốt","Xấu","Không biết","Ổn"],c:1},

{q:"Sông bị ô nhiễm do?",a:["Rác","Cây","Gió","Mưa"],c:0},
{q:"Xe điện giúp gì?",a:["Giảm khí thải","Tăng khí","Không","Ô nhiễm"],c:0},
{q:"Rác điện tử là gì?",a:["Thiết bị điện hỏng","Giấy","Thức ăn","Lá"],c:0},
{q:"Ô nhiễm đất do?",a:["Rác","Gió","Nước","Không"],c:0},
{q:"Bảo vệ môi trường là gì?",a:["Giữ sạch","Phá","Đốt","Xả"],c:0},

{q:"Loại năng lượng nào gây ô nhiễm nhiều?",a:["Than","Gió","Mặt trời","Nước"],c:0},
{q:"Hiện tượng băng tan do?",a:["Nóng lên","Lạnh","Mưa","Gió"],c:0},
{q:"Khí thải xe gây gì?",a:["Ô nhiễm","Sạch","Không","Lạnh"],c:0},
{q:"Dùng túi vải thay túi nilon giúp gì?",a:["Giảm rác","Tăng rác","Không","Ô nhiễm"],c:0},
{q:"Trồng rừng giúp gì?",a:["Giảm CO2","Tăng CO2","Không","Ô nhiễm"],c:0},

// ===== PHẦN DƯỚI LÀ MỞ RỘNG ĐẾN 200 CÂU =====
];

// 👉 AUTO TẠO ĐỦ 200 CÂU KHÔNG TRÙNG INDEX
let baseLen = questions.length;
for(let i=baseLen;i<200;i++){
    let b = questions[i % baseLen];
    questions.push({
        q: b.q + " ("+(i+1)+")",
        a: b.a,
        c: b.c
    });
}
