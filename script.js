let questions=[
{q:"PM2.5 là gì?",o:["Khí","Bụi mịn","Nước","Oxy"],a:1},
{q:"Nhựa tồn tại bao lâu?",o:["1 năm","10 năm","100-500 năm","1 ngày"],a:2},
{q:"Nguyên nhân chính?",o:["Con người","Gió","Mưa","Nắng"],a:0},
{q:"Hiệu ứng nhà kính?",o:["Nóng lên","Lạnh đi","Mưa","Gió"],a:0},
{q:"Năng lượng sạch?",o:["Than","Dầu","Mặt trời","Khí"],a:2},
{q:"Phá rừng gây?",o:["CO2 tăng","Ko gì","Gió","Mưa"],a:0},
{q:"Động vật chết do?",o:["Nhựa","Nước","Gió","Lạnh"],a:0},
{q:"Giảm rác?",o:["Đốt","Tái chế","Chôn","Xả"],a:1},
{q:"Khí độc?",o:["CO2","O2","N2","H2"],a:0},
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

let total=0;
function answer(v){
total+=v;
if(total>=2) gameResult.innerText="🌱 Bạn bảo vệ môi trường tốt!";
else if(total<=-2) gameResult.innerText="💀 Bạn cần thay đổi!";
else gameResult.innerText="⚖ Trung bình";
}
