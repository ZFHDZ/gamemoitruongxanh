// ===== CÂU HỎI =====
let allQuestions = [];

let baseQuestions = [
{q:"Rác nào có thể tái chế?",options:["Pin","Chai nhựa","Thức ăn","Lá"],answer:1},
{q:"Pin thuộc loại rác gì?",options:["Tái chế","Hữu cơ","Nguy hại","Giấy"],answer:2},
{q:"Khí gây hiệu ứng nhà kính?",options:["O2","CO2","N2","H2"],answer:1},
{q:"Năng lượng tái tạo?",options:["Than","Dầu","Mặt trời","Khí"],answer:2},
{q:"Ô nhiễm nước do?",options:["Rác","Gió","Ánh sáng","Âm thanh"],answer:0},
{q:"Nhựa phân hủy bao lâu?",options:["1 năm","10 năm","100+ năm","1 tháng"],answer:2},
{q:"Rác hữu cơ gồm?",options:["Pin","Nhựa","Thức ăn","Kim loại"],answer:2},
{q:"Hiệu ứng nhà kính gây?",options:["Lạnh","Nóng","Mưa","Gió"],answer:1}
];

// tạo 120 câu
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
let timer = null;

function start(){
    clearInterval(timer);

    current = 0;
    score = 0;
    time = 60;

    document.getElementById("result").innerText = "";
    document.getElementById("quiz").innerHTML = "";

    questions = [...allQuestions].sort(()=>0.5 - Math.random()).slice(0,20);

    runTimer();
    showQuestion();
}

function runTimer(){
    timer = setInterval(()=>{
        time--;

        document.getElementById("timer").innerText = "⏳ " + time + "s";
        document.getElementById("timeBar").style.width = (time/60*100) + "%";

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
    let html = `<h3>${q.q}</h3>`;

    q.options.forEach((opt,i)=>{
        html += `<button onclick="answer(${i})">${opt}</button><br>`;
    });

    document.getElementById("quiz").innerHTML = html;
}

function answer(i){
    if(i === questions[current].answer){
        score++;
    }
    current++;
    showQuestion();
}

function finish(){
    clearInterval(timer);

    let name = document.getElementById("name").value || "Ẩn danh";

    document.getElementById("result").innerText =
        `${name} đúng ${score}/20`;

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

    rank.slice(0,10).forEach((r,i)=>{
        html += `<li>${i+1}. ${r.name} - ${r.score}/20 - ${r.time}s</li>`;
    });

    document.getElementById("rank").innerHTML = html;
}
