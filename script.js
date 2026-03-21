let habitScore = 0;

// ===== KIỂM TRA =====
function addScore(v){
    habitScore += v;
}

function showResult(){
    let text = "";

    if(habitScore >= 3){
        text = "🌱 Bạn sống rất xanh!";
    }else if(habitScore == 2){
        text = "⚠ Bạn cần cải thiện!";
    }else{
        text = "❌ Bạn cần thay đổi!";
    }

    document.getElementById("result").innerText = text;
}

// ===== CAM KẾT =====
function commit(){
    let name = document.getElementById("name").value;
    document.getElementById("commitMsg").innerText =
        "🌍 " + name + " đã cam kết bảo vệ môi trường!";
}

// ===== GAME =====
let questions = [
{q:"Hành động nào tốt?",a:["Xả rác","Trồng cây"],c:1},
{q:"Cái nào gây ô nhiễm?",a:["Xe máy","Cây"],c:0},
{q:"Nên dùng gì?",a:["Túi nilon","Túi vải"],c:1}
];

let score = 0;
let time = 15;
let timer;

function startGame(){
    score = 0;
    time = 15;

    nextQ();

    timer = setInterval(()=>{
        time--;
        document.getElementById("timer").innerText = "⏳ "+time;

        if(time<=0){
            clearInterval(timer);
            document.getElementById("score").innerText =
                "Điểm: " + score;
        }
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

function answer(i,c){
    if(i===c) score++;
    nextQ();
}
