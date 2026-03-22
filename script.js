let questions=[
{q:"Nhựa phân hủy bao lâu?",o:["1 năm","10 năm","100-500 năm","1000 năm"],a:2},
{q:"PM2.5 là gì?",o:["Khí","Bụi mịn","Nước","Oxy"],a:1},
{q:"Nguyên nhân chính?",o:["Con người","Mưa","Gió","Nắng"],a:0}
];

let box=document.getElementById("quizBox");

questions.forEach((q,i)=>{
let html=`<p>${q.q}</p>`;
q.o.forEach((op,j)=>{
html+=`<input type="radio" name="q${i}" value="${j}">${op}<br>`;
});
box.innerHTML+=html;
});

function submitQuiz(){
let score=0;
questions.forEach((q,i)=>{
let ans=document.querySelector(`input[name=q${i}]:checked`);
if(ans && ans.value==q.a) score++;
});
document.getElementById("score").innerText="Điểm: "+score;
}

let total=0;
function play(v){
total+=v;
if(total>=2) result.innerText="🌱 Bạn đang bảo vệ Trái Đất!";
else if(total<=-2) result.innerText="💀 Bạn đang gây hại!";
}
