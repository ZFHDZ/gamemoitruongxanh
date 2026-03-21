function scrollToContent(){
document.getElementById("main").scrollIntoView({behavior:"smooth"});
}

// QUIZ
let questions=[
{q:"PM2.5 là gì?",o:["Khí","Bụi mịn","Nước","Oxy"],a:1},
{q:"Nhựa phân hủy?",o:["10","50","500","1"],a:2}
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
result.innerText="Điểm: "+score;
}
