let questions=[
{q:"PM2.5 là gì?",o:["Khí","Bụi mịn","Nước","Oxy"],a:1},
{q:"Nhựa phân hủy?",o:["10","50","500","1"],a:2},
{q:"Ô nhiễm nước do?",o:["Mưa","CN","Gió","Đất"],a:1},
{q:"Hiệu ứng nhà kính?",o:["Lạnh","Nóng","Mưa","Gió"],a:1},
{q:"Năng lượng sạch?",o:["Than","Dầu","Mặt trời","Khí"],a:2},
{q:"Rừng mất gây?",o:["CO2 tăng","Ko gì","Mưa","Gió"],a:0},
{q:"Động vật chết do?",o:["Nước","Nhựa","Gió","Lạnh"],a:1},
{q:"Giảm rác tốt nhất?",o:["Đốt","Tái chế","Vứt","Chôn"],a:1},
{q:"Khí độc?",o:["CO2","O2","N2","H2"],a:0},
{q:"Biện pháp tốt nhất?",o:["Trồng cây","Xả rác","Đốt","Phá"],a:0}
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

let earth=50;
function playGame(v){
earth+=v*10;
if(earth>100) earth=100;
if(earth<0) earth=0;

earthBar.style.width=earth+"%";

if(earth>=80) gameResult.innerText="🌱 Đang hồi phục!";
else if(earth<=30) gameResult.innerText="💀 Nguy hiểm!";
}

function commit(){
let name=document.getElementById("name").value;
commitResult.innerText="🌍 "+name+" đã cam kết sống xanh!";
}
