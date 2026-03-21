let score = 0;

function answer(v){
score += v;

if(score >= 2){
result.innerText = "🌱 Bạn đang cứu Trái Đất!";
}
else if(score <= -2){
result.innerText = "💀 Bạn đang phá hủy môi trường!";
}
else{
result.innerText = "⚖ Bạn ở mức trung bình";
}
}
