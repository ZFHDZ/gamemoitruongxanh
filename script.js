// Cập nhật thanh tiến trình theo độ cuộn
window.onscroll = function() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
};

// Logic Trò chơi
let stats = { budget: 1000, eco: 30, health: 50 };

function handleEvent(choice) {
    if (choice === 1) { stats.budget -= 300; stats.eco += 30; stats.health += 10; }
    else if (choice === 2) { stats.budget -= 50; stats.eco += 5; }
    else { stats.budget += 200; stats.eco -= 20; stats.health -= 30; }

    document.getElementById('budget').innerText = stats.budget;
    document.getElementById('eco').innerText = stats.eco;
    document.getElementById('health').innerText = stats.health;

    if(stats.eco <= 0) alert("Môi trường sụp đổ! Bạn đã thất bại.");
    if(stats.budget <= 0) alert("Thành phố phá sản!");
}
