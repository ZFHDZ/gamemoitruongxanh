// QUIZ
let questions = [
    {q:"PM2.5 là gì?", options:["Khí sạch","Bụi siêu mịn","Nước","Oxy"], answer:1},
    {q:"Nhựa phân hủy?", options:["10 năm","50 năm","500 năm","1 năm"], answer:2},
    {q:"Nguồn ô nhiễm nước?", options:["Mưa","Công nghiệp","Gió","Đất"], answer:1},
    {q:"Hiệu ứng nhà kính?", options:["Lạnh","Nóng lên","Gió","Mưa"], answer:1},
    {q:"Năng lượng sạch?", options:["Than","Dầu","Mặt trời","Khí"], answer:2}
];

let quiz = document.getElementById("quiz");

questions.forEach((q,i)=>{
    let html = `<p>${q.q}</p>`;
    q.options.forEach((o,j)=>{
        html += `<input type="radio" name="q${i}" value="${j}"> ${o}<br>`;
    });
    quiz.innerHTML += html;
});

function submitQuiz(){
    let score=0;
    questions.forEach((q,i)=>{
        let ans=document.querySelector(`input[name="q${i}"]:checked`);
        if(ans && ans.value==q.answer) score++;
    });
    document.getElementById("result").innerText=
    "Điểm của bạn: "+score+"/"+questions.length;
}

// GAME
let earth = 50;

function playGame(val){
    earth += val*10;

    if(earth > 100) earth = 100;
    if(earth < 0) earth = 0;

    document.getElementById("earthBar").style.width = earth + "%";

    if(earth >= 80){
        document.getElementById("gameResult").innerText="🌱 Trái Đất đang hồi phục!";
    } else if(earth <= 30){
        document.getElementById("gameResult").innerText="💀 Nguy hiểm!";
    }
}
