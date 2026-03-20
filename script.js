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

        // thanh thời gian
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
        html += `<li>🥇 ${i+1}. ${r.name} - ${r.score}/20 - ${r.time}s</li>`;
    });

    document.getElementById("rank").innerHTML = html;
}
