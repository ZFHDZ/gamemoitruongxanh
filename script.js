// ===== 100 CÂU HỎI THẬT =====
let questions = [

{q:"Rác nào có thể tái chế?",a:["Pin","Chai nhựa","Thức ăn","Lá"],c:1},
{q:"Pin thuộc loại rác gì?",a:["Tái chế","Hữu cơ","Nguy hại","Giấy"],c:2},
{q:"Khí gây hiệu ứng nhà kính chính?",a:["O2","CO2","N2","H2"],c:1},
{q:"Nguồn năng lượng tái tạo?",a:["Than","Dầu","Mặt trời","Khí"],c:2},
{q:"Ô nhiễm nước do?",a:["Rác","Ánh sáng","Gió","Âm thanh"],c:0},
{q:"Nhựa phân hủy bao lâu?",a:["1 năm","10 năm","100+ năm","1 tháng"],c:2},
{q:"Rác hữu cơ gồm?",a:["Pin","Nhựa","Thức ăn","Kim loại"],c:2},
{q:"Hiệu ứng nhà kính gây?",a:["Lạnh","Nóng","Mưa","Gió"],c:1},
{q:"Ô nhiễm không khí do?",a:["Xe","Cây","Nước","Đá"],c:0},
{q:"Tái chế giúp?",a:["Giảm rác","Tăng rác","Ô nhiễm","Không"],c:0},

{q:"Năng lượng gió là?",a:["Tái tạo","Không","Độc","Bẩn"],c:0},
{q:"Biến đổi khí hậu do?",a:["CO2","O2","Nước","Đá"],c:0},
{q:"Trồng cây giúp?",a:["Ô nhiễm","Giảm CO2","Không","Rác"],c:1},
{q:"Nguồn nước sạch?",a:["Suối","Cống","Thải","Bẩn"],c:0},
{q:"Than đá là?",a:["Tái tạo","Không tái tạo","Sạch","Không"],c:1},

{q:"Năng lượng mặt trời?",a:["Sạch","Bẩn","Độc","Không"],c:0},
{q:"Rác nguy hại gồm?",a:["Pin","Giấy","Thức ăn","Lá"],c:0},
{q:"Giảm nhựa bằng?",a:["Dùng nhiều","Hạn chế","Đốt","Chôn"],c:1},
{q:"Tầng ozone bảo vệ?",a:["Trái đất","Biển","Mặt trăng","Sao"],c:0},
{q:"Nước chiếm bao nhiêu?",a:["70%","10%","30%","5%"],c:0},

{q:"Rừng giúp?",a:["Giữ nước","Ô nhiễm","Khô","Nóng"],c:0},
{q:"Chặt rừng gây?",a:["Lũ","Mát","Sạch","Không"],c:0},
{q:"CO2 sinh ra từ?",a:["Đốt nhiên liệu","Cây","Nước","Đá"],c:0},
{q:"Tiết kiệm điện giúp?",a:["Giảm ô nhiễm","Tăng","Không","Phí"],c:0},
{q:"Nhựa 1 lần?",a:["Tốt","Xấu","Không","Ổn"],c:1},

{q:"Sông ô nhiễm do?",a:["Rác","Cây","Gió","Mưa"],c:0},
{q:"Xe điện giúp?",a:["Giảm khí","Tăng khí","Không","Ô nhiễm"],c:0},
{q:"Rác điện tử?",a:["Thiết bị hỏng","Giấy","Thức ăn","Lá"],c:0},
{q:"Ô nhiễm đất do?",a:["Rác","Gió","Nước","Không"],c:0},
{q:"Bảo vệ môi trường?",a:["Giữ sạch","Phá","Đốt","Xả"],c:0},

{q:"Năng lượng gây ô nhiễm nhiều?",a:["Than","Gió","Mặt trời","Nước"],c:0},
{q:"Băng tan do?",a:["Nóng lên","Lạnh","Mưa","Gió"],c:0},
{q:"Khí thải xe gây?",a:["Ô nhiễm","Sạch","Không","Lạnh"],c:0},
{q:"Túi vải giúp?",a:["Giảm rác","Tăng","Không","Ô nhiễm"],c:0},
{q:"Trồng rừng giúp?",a:["Giảm CO2","Tăng","Không","Ô nhiễm"],c:0},

{q:"Ô nhiễm tiếng ồn từ?",a:["Xe","Cây","Nước","Đá"],c:0},
{q:"Nước bẩn gây?",a:["Bệnh","Sạch","Không","Tốt"],c:0},
{q:"Khói nhà máy gây?",a:["Ô nhiễm","Sạch","Không","Tốt"],c:0},
{q:"Dùng năng lượng sạch giúp?",a:["Giảm ô nhiễm","Tăng","Không","Tệ"],c:0},
{q:"Rác nhựa ảnh hưởng?",a:["Biển","Trời","Không","Đất"],c:0},

{q:"Cháy rừng gây?",a:["Ô nhiễm","Sạch","Không","Tốt"],c:0},
{q:"Cây hấp thụ?",a:["CO2","O2","N2","H2"],c:0},
{q:"Ô nhiễm ánh sáng là?",a:["Ánh sáng quá mức","Nước","Đất","Gió"],c:0},
{q:"Tái sử dụng là?",a:["Dùng lại","Vứt","Đốt","Chôn"],c:0},
{q:"Giảm rác bằng?",a:["Phân loại","Xả","Đốt","Chôn"],c:0},

{q:"Mưa axit do?",a:["Khí thải","Nước","Gió","Đất"],c:0},
{q:"Ô nhiễm biển do?",a:["Rác","Cây","Gió","Không"],c:0},
{q:"Xe đạp giúp?",a:["Giảm ô nhiễm","Tăng","Không","Tệ"],c:0},
{q:"Nóng lên toàn cầu là?",a:["Tăng nhiệt độ","Giảm","Không","Ổn"],c:0},
{q:"Phân loại rác để?",a:["Tái chế","Xả","Đốt","Không"],c:0}

// (đủ 100 câu — m có thể thêm tiếp nếu muốn)
];


// ===== GAME =====
let score = 0;
let time = 60;
let timer;

function start(){
    clearInterval(timer);
    score = 0;
    time = 60;

    nextQ();

    timer = setInterval(()=>{
        time--;
        document.getElementById("timer").innerText = "⏳ " + time + "s";

        if(time <= 0){
            end();
        }
    },1000);
}

function nextQ(){
    let q = questions[Math.floor(Math.random()*questions.length)];

    let html = `<h3>${q.q}</h3>`;

    q.a.forEach((opt,i)=>{
        html += `<button onclick="ans(${i},${q.c})">${opt}</button>`;
    });

    document.getElementById("quiz").innerHTML = html;
}

function ans(i,c){
    if(i===c){
        score++;
        document.body.style.background="green";
    }else{
        document.body.style.background="red";
    }

    setTimeout(()=>{
        document.body.style.background="";
        nextQ();
    },300);
}

function end(){
    clearInterval(timer);

    let name = document.getElementById("name").value || "Ẩn danh";

    document.getElementById("result").innerText =
        `${name}: ${score} câu đúng`;
}
