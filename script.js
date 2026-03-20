// ===== DATA =====
let questions = [
{q:"Rác nào tái chế?",a:["Pin","Nhựa","Thức ăn","Lá"],c:1},
{q:"CO2 gây gì?",a:["Nóng lên","Lạnh","Mưa","Gió"],c:0},
{q:"Năng lượng sạch?",a:["Than","Dầu","Mặt trời","Gas"],c:2},
{q:"Rác hữu cơ?",a:["Pin","Nhựa","Thức ăn","Kim loại"],c:2}
];

let facts = [
"Nhựa mất 100+ năm phân hủy",
"Trái đất nóng lên do CO2",
"Trồng cây giúp giảm ô nhiễm",
"Tái chế giúp tiết kiệm tài nguyên"
];

// ===== GAME =====
let score=0, combo=0, time=60, timer;

function start(){
    score=0; combo=0; time=60;
    nextQ();
    timer=setInterval(()=>{
        time--;
        document.getElementById("timer").innerText="⏳ "+time;
        if(time<=0) end();
    },1000);
}

function nextQ(){
    let q = questions[Math.floor(Math.random()*questions.length)];
    
    // random bonus
    let isBonus = Math.random()<0.2;
    
    let html = `<h3>${isBonus?"⚡ "+q.q:q.q}</h3>`;
    
    q.a.forEach((opt,i)=>{
        html += `<button onclick="ans(${i},${q.c},${isBonus})">${opt}</button>`;
    });

    document.getElementById("quiz").innerHTML = html;

    // fact
    document.getElementById("fact").innerText =
        "💡 "+facts[Math.floor(Math.random()*facts.length)];
}

function ans(i,c,isBonus){
    let buttons = document.querySelectorAll("#quiz button");

    if(i===c){
        combo++;
        let point = isBonus ? 5 : (combo>=5?3:combo>=3?2:1);
        score += point;

        document.body.style.background="green";
        playSound(true);
    }else{
        combo=0;
        document.body.style.background="red";
        playSound(false);
    }

    document.getElementById("combo").innerText = "🔥 Combo: "+combo;

    setTimeout(()=>{
        document.body.style.background="";
        nextQ();
    },300);
}

function playSound(correct){
    let audio = new Audio(correct?
    "https://www.soundjay.com/buttons/sounds/button-3.mp3":
    "https://www.soundjay.com/buttons/sounds/button-10.mp3");
    audio.play();
}

function end(){
    clearInterval(timer);

    let name = document.getElementById("name").value || "Ẩn danh";

    let badge = score>30?"🌱 Chiến binh xanh":
                score>15?"🍃 Bảo vệ môi trường":
                "🙂 Người mới";

    document.getElementById("result").innerText =
        `${name}: ${score} điểm - ${badge}`;

    // rank
    let rank = JSON.parse(localStorage.getItem("rank"))||[];
    rank.push({name,score});
    rank.sort((a,b)=>b.score-a.score);
    localStorage.setItem("rank",JSON.stringify(rank));

    showRank();

    // history
    let his = JSON.parse(localStorage.getItem("his"))||[];
    his.unshift({name,score});
    localStorage.setItem("his",JSON.stringify(his));
    showHis();
}

function showRank(){
    let r = JSON.parse(localStorage.getItem("rank"))||[];
    document.getElementById("rank").innerHTML =
        r.slice(0,10).map((x,i)=>`<li>${i+1}. ${x.name} - ${x.score}</li>`).join("");
}

function showHis(){
    let h = JSON.parse(localStorage.getItem("his"))||[];
    document.getElementById("history").innerHTML =
        h.slice(0,10).map(x=>`<li>${x.name} - ${x.score}</li>`).join("");
}
