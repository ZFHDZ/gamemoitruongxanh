// ===== CÂU HỎI =====
let baseQuestions = [
{q:"Rác nào có thể tái chế?",options:["Pin","Chai nhựa","Thức ăn","Lá"],answer:1},
{q:"Pin thuộc loại rác gì?",options:["Tái chế","Hữu cơ","Nguy hại","Giấy"],answer:2},
{q:"Khí gây hiệu ứng nhà kính?",options:["O2","CO2","N2","H2"],answer:1},
{q:"Năng lượng tái tạo?",options:["Than","Dầu","Mặt trời","Khí"],answer:2},
{q:"Ô nhiễm nước do?",options:["Rác","Gió","Ánh sáng","Âm thanh"],answer:0},
{q:"Nhựa phân hủy bao lâu?",options:["1 năm","10 năm","100+ năm","1 tháng"],answer:2},
{q:"Rác hữu cơ gồm?",options:["Pin","Nhựa","Thức ăn","Kim loại"],answer:2},
{q:"Rác điện tử là?",options:["Điện thoại hỏng","Giấy","Thức ăn","Lá"],answer:0},
{q:"Hiệu ứng nhà kính gây?",options:["Lạnh","Nóng","Mưa","Gió"],answer:1},
{q:"Tái chế giúp?",options:["Giảm rác","Tăng rác","Ô nhiễm","Không"],answer:0},
{q:"Ô nhiễm không khí do?",options:["Xe","Cây","Nước","Đá"],answer:0},
{q:"Năng lượng gió là?",options:["Tái tạo","Không","Độc","Bẩn"],answer:0},
{q:"Biến đổi khí hậu do?",options:["CO2","O2","Nước","Đá"],answer:0},
{q:"Trồng cây giúp?",options:["Ô nhiễm","Giảm CO2","Không","Rác"],answer:1},
{q:"Nguồn nước sạch?",options:["Suối","Cống","Thải","Bẩn"],answer:0}
];

// ===== NHÂN LÊN 120 CÂU =====
let allQuestions = [];

for(let i=0;i<120;i++){
    let b = baseQuestions[i % baseQuestions.length];
    allQuestions.push({
        q: b.q + " ("+(i+1)+")",
        options: b.options,
        answer: b.answer
    });
}

// ===== GAME =====
let questions = [];
let current = 0;
let score = 0;
let time = 60;
let timer;

function start(){
    current = 0;
    score = 0;
    time = 60;

    questions = allQuestions.sort(()=>0.5 - Math.random()).slice(0,20);

    runTimer();
    showQuestion();
}

function runTimer(){
    timer = setInterval(()=>{
        time--;
        document.getElementById("timer").innerText = "⏳ " + time + "s";
        if(time <= 0){
            finish();
        }
    },1000);
}

function showQuestion(){
    if(current >= questions.length){
        finish();
        return;
    }

    let q = questions[current];
    let html = "<h3>"+q.q+"</h3>";

    q.options.forEach((opt,i)=>{
        html += `<button onclick="answer(${i})">${opt}</button><br>`;
    });

    document.getElementById("quiz").innerHTML = html;
}

function answer(i){
    if(i === questions[current].answer) score++;
    current++;
    showQuestion();
}

function finish(){
    clearInterval(timer);

    let name = document.getElementById("name").value || "Ẩn danh";

    document.getElementById("result").innerText =
        name + " đúng " + score + "/20";

    let rank = JSON.parse(localStorage.getItem("rank")) || [];

    rank.push({name, score, time});

    rank.sort((a,b)=>{
        if(b.score === a.score) return b.time - a.time;
        return b.score - a.score;
    });

    localStorage.setItem("rank", JSON.stringify(rank));

    showRank();
}

function showRank(){
    let rank = JSON.parse(localStorage.getItem("rank")) || [];
    let html = "";

    rank.slice(0,5).forEach(r=>{
        html += `<li>${r.name}: ${r.score}/20 - ${r.time}s</li>`;
    });

    document.getElementById("rank").innerHTML = html;
}