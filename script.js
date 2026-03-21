let questions=[
{q:"Nhựa tồn tại bao lâu?",o:["1 năm","10 năm","100-500 năm","1 ngày"],a:2},
{q:"PM2.5 là gì?",o:["Khí","Bụi mịn","Nước","Oxy"],a:1}
];

let quiz=document.getElementById("quiz");

questions.forEach((q,i)=>{
let html=`<p>${q.q}</p>`;
q.o.forEach((op,j)=>{
html+=`<input type="radio" name="q${i}" value="${j}">${op}<br>`;
});
quiz.innerHTML+=html;
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
function choose(v){
total+=v;
if(total>=2) result.innerText="🌱 Bạn đang sống xanh!";
else if(total<=-2) result.innerText="💀 Bạn cần thay đổi!";
}
