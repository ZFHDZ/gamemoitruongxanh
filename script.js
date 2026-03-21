function scrollToMain(){
document.getElementById("main").scrollIntoView({behavior:"smooth"});
}

// QUIZ 10 CÂU
let questions=[
{q:"PM2.5 là gì?",o:["Khí","Bụi mịn","Nước","Oxy"],a:1},
{q:"Nhựa phân hủy?",o:["10","50","500","1"],a:2},
{q:"Ô nhiễm nước?",o:["Mưa","CN","Gió","Đất"],a:1},
{q:"Hiệu ứng nhà kính?",o:["Lạnh","Nóng","Gió","Mưa"],a:1},
{q:"Năng lượng sạch?",o:["Than","Dầu","Mặt trời","Khí"],a:2},
{q:"Rừng mất gây?",o:["CO2 tăng","Không gì","Gió","Mưa"],a:0},
{q:"Động vật chết do?",o:["Nước","Nhựa","Gió","Lạnh"],a:1},
{q:"Giảm rác tốt nhất?",o:["Đốt","Tái chế","Chôn","Xả"],a:1},
{q:"Khí gây hại?",o:["CO2","O2","N2","H2"],a:0},
{q:"Biện pháp tốt?",o:["Trồng cây","Xả rác","Đốt","Phá"],a:0}
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
result.innerText="Điểm: "+score+"/10";
}

// GAME DRAG
let items=document.querySelectorAll(".item");
let bins=document.querySelectorAll(".bin");

items.forEach(item=>{
item.addEventListener("dragstart",e=>{
e.dataTransfer.setData("id",item.id);
});
});

bins.forEach(bin=>{
bin.addEventListener("dragover",e=>e.preventDefault());

bin.addEventListener("drop",e=>{
let id=e.dataTransfer.getData("id");

if(
(id==="banana" && bin.dataset.type==="organic") ||
((id==="bottle"||id==="cup") && bin.dataset.type==="plastic")
){
gameResult.innerText="✔ Đúng!";
}else{
gameResult.innerText="❌ Sai!";
}
});
});
