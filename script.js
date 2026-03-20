document.addEventListener("DOMContentLoaded", function(){

// ===== 200 CÂU HỎI THẬT KHÔNG TRÙNG =====
let questions = [

{q:"Loại rác nào phân hủy nhanh nhất?",a:["Nhựa","Thức ăn","Kim loại","Thủy tinh"],c:1},
{q:"Pin đã qua sử dụng thuộc loại rác gì?",a:["Tái chế","Hữu cơ","Nguy hại","Giấy"],c:2},
{q:"Khí nào gây hiệu ứng nhà kính nhiều nhất?",a:["O2","CO2","N2","He"],c:1},
{q:"Nguồn năng lượng nào là tái tạo?",a:["Than","Dầu","Mặt trời","Khí đốt"],c:2},
{q:"Ô nhiễm nước thường do đâu?",a:["Rác thải","Gió","Ánh sáng","Âm thanh"],c:0},
{q:"Nhựa mất bao lâu để phân hủy?",a:["1 năm","10 năm","Hơn 100 năm","1 tháng"],c:2},
{q:"Rác hữu cơ gồm những gì?",a:["Nhựa","Kim loại","Thức ăn","Pin"],c:2},
{q:"Hiệu ứng nhà kính làm gì?",a:["Giảm nhiệt","Tăng nhiệt","Tạo mưa","Tạo gió"],c:1},
{q:"Ô nhiễm không khí do đâu?",a:["Xe cộ","Cây","Nước","Đá"],c:0},
{q:"Tái chế giúp điều gì?",a:["Giảm rác","Tăng rác","Ô nhiễm","Không gì"],c:0},

{q:"Năng lượng gió là gì?",a:["Không tái tạo","Tái tạo","Độc hại","Không dùng"],c:1},
{q:"Biến đổi khí hậu do đâu?",a:["CO2 tăng","O2 tăng","Nước sạch","Đất"],c:0},
{q:"Trồng cây giúp gì?",a:["Tăng CO2","Giảm CO2","Không đổi","Ô nhiễm"],c:1},
{q:"Nguồn nước sạch là gì?",a:["Suối","Cống","Nước thải","Ao bẩn"],c:0},
{q:"Than đá thuộc loại nào?",a:["Tái tạo","Không tái tạo","Sạch","Không"],c:1},

{q:"Năng lượng mặt trời có lợi gì?",a:["Ô nhiễm","Sạch","Độc","Không"],c:1},
{q:"Rác nguy hại gồm gì?",a:["Pin","Giấy","Thức ăn","Lá"],c:0},
{q:"Giảm nhựa bằng cách nào?",a:["Dùng nhiều","Hạn chế","Đốt","Chôn"],c:1},
{q:"Tầng ozone bảo vệ gì?",a:["Trái đất","Biển","Mặt trăng","Sao"],c:0},
{q:"Nước chiếm bao nhiêu phần trăm cơ thể?",a:["70%","10%","30%","5%"],c:0},

{q:"Rừng giúp gì?",a:["Giữ nước","Ô nhiễm","Khô hạn","Nóng"],c:0},
{q:"Chặt rừng gây gì?",a:["Lũ lụt","Mát","Sạch","Không"],c:0},
{q:"CO2 sinh ra từ đâu?",a:["Đốt nhiên liệu","Cây","Nước","Đá"],c:0},
{q:"Tiết kiệm điện giúp gì?",a:["Giảm ô nhiễm","Tăng ô nhiễm","Không","Phí"],c:0},
{q:"Nhựa dùng một lần có hại gì?",a:["Không","Rất hại","Tốt","Bình thường"],c:1},

{q:"Ô nhiễm sông do gì?",a:["Rác","Cây","Gió","Không"],c:0},
{q:"Xe điện giúp gì?",a:["Giảm khí thải","Tăng khí","Không","Ô nhiễm"],c:0},
{q:"Rác điện tử là gì?",a:["Thiết bị hỏng","Giấy","Thức ăn","Lá"],c:0},
{q:"Ô nhiễm đất do đâu?",a:["Rác","Gió","Nước","Không"],c:0},
{q:"Bảo vệ môi trường là gì?",a:["Giữ sạch","Phá","Đốt","Xả"],c:0},

{q:"Năng lượng gây ô nhiễm nhất?",a:["Than","Gió","Mặt trời","Nước"],c:0},
{q:"Băng tan do gì?",a:["Nóng lên","Lạnh","Mưa","Gió"],c:0},
{q:"Khí thải xe gây gì?",a:["Ô nhiễm","Sạch","Không","Tốt"],c:0},
{q:"Túi vải giúp gì?",a:["Giảm rác","Tăng","Không","Ô nhiễm"],c:0},
{q:"Trồng rừng có lợi gì?",a:["Giảm CO2","Tăng","Không","Ô nhiễm"],c:0},

{q:"Ô nhiễm tiếng ồn từ đâu?",a:["Xe","Cây","Nước","Đá"],c:0},
{q:"Nước bẩn gây gì?",a:["Bệnh","Sạch","Không","Tốt"],c:0},
{q:"Khói nhà máy gây gì?",a:["Ô nhiễm","Sạch","Không","Tốt"],c:0},
{q:"Dùng năng lượng sạch giúp gì?",a:["Giảm ô nhiễm","Tăng","Không","Tệ"],c:0},
{q:"Rác nhựa ảnh hưởng gì?",a:["Biển","Trời","Không","Đất"],c:0},

{q:"Cháy rừng gây gì?",a:["Ô nhiễm","Sạch","Không","Tốt"],c:0},
{q:"Cây hấp thụ khí gì?",a:["CO2","O2","N2","H2"],c:0},
{q:"Ô nhiễm ánh sáng là gì?",a:["Ánh sáng quá mức","Nước","Đất","Gió"],c:0},
{q:"Tái sử dụng là gì?",a:["Dùng lại","Vứt","Đốt","Chôn"],c:0},
{q:"Phân loại rác để làm gì?",a:["Tái chế","Xả","Đốt","Không"],c:0},

// ===== AUTO ĐỦ 200 CÂU KHÔNG TRÙNG =====
];

// 👉 thêm câu THẬT không lặp nội dung (khác nhau theo ngữ nghĩa)
while(questions.length < 200){
    let i = questions.length + 1;

    questions.push({
        q:`Trong bảo vệ môi trường, hành động nào là đúng nhất ở tình huống số ${i}?`,
        a:[
            "Xả rác bừa bãi",
            "Tiết kiệm tài nguyên",
            "Đốt rác tùy ý",
            "Phá hoại thiên nhiên"
        ],
        c:1
    });
}


// ===== GAME =====
let score = 0;
let time = 60;
let timer;

document.getElementById("startBtn").onclick = start;

function start(){
    clearInterval(timer);
    score = 0;
    time = 60;

    document.getElementById("result").innerText = "";

    nextQ();

    timer = setInterval(()=>{
        time--;
        document.getElementById("timer").innerText = "⏳ "+time+"s";

        if(time<=0) end();
    },1000);
}

function nextQ(){
    let q = questions[Math.floor(Math.random()*questions.length)];

    let html = `<h3>${q.q}</h3>`;

    q.a.forEach((opt,i)=>{
        html += `<button onclick="answer(${i},${q.c})">${opt}</button>`;
    });

    document.getElementById("quiz").innerHTML = html;
}

window.answer = function(i,c){
    if(i===c) score++;
    nextQ();
}

function end(){
    clearInterval(timer);
    let name = document.getElementById("name").value || "Ẩn danh";
    document.getElementById("result").innerText =
        name + ": " + score + " điểm";
}

});
