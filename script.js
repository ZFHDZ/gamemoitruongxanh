// 1. Cập nhật thanh tiến trình cuộn
window.onscroll = () => {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.querySelector(".scroll-progress").style.width = scrolled + "%";
};

// 2. Logic Game Eco-Leader
let budget = 1000, environment = 30;

function choice(type) {
    if(type === 1) { budget -= 200; environment += 20; }
    else if(type === 2) { budget -= 50; environment += 5; }
    else { budget += 100; environment -= 15; }
    
    document.getElementById('budget').innerText = budget;
    document.getElementById('env').innerText = environment;
    
    if(environment >= 80) alert("Chúc mừng! Bạn đã cứu được thành phố!");
    if(environment <= 0) alert("Thảm họa! Môi trường đã bị hủy diệt hoàn toàn!");
}
