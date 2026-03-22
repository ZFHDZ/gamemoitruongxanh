// 1. Custom Cursor Logic
const cursor = document.querySelector('.custom-cursor');
document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

document.addEventListener('mousedown', () => cursor.style.transform = "scale(0.8)");
document.addEventListener('mouseup', () => cursor.style.transform = "scale(1)");

// 2. Counter Animation for Dashboard
function animateCounter(id, target) {
    let count = 0;
    let obj = document.getElementById(id);
    let speed = target / 100;
    
    let timer = setInterval(() => {
        count += speed;
        if (count >= target) {
            obj.innerText = target.toLocaleString();
            clearInterval(timer);
        } else {
            obj.innerText = Math.floor(count).toLocaleString();
        }
    }, 20);
}

// Chạy counter khi scroll đến section
let started = false;
window.onscroll = () => {
    let statsSection = document.getElementById('stats');
    if (window.scrollY + window.innerHeight > statsSection.offsetTop && !started) {
        animateCounter('count1', 1200000000); // 1.2 tỷ tấn rác
        animateCounter('count2', 2000000);   // 2 triệu TNV
        animateCounter('count3', 50000000);  // 50 triệu cây
        started = true;
    }
};

// 3. Simulation Game v2.0
let gameState = { money: 1500, health: 40, support: 60 };

function gameLogic(choice) {
    const msg = document.getElementById('game-message');
    
    if (choice === 1) {
        gameState.money -= 500; gameState.health += 30;
        msg.innerText = "HỆ THỐNG: Nhà máy Plasma đã đi vào hoạt động. Không khí thành phố sạch hơn 30%!";
    } else if (choice === 2) {
        gameState.money -= 100; gameState.health += 10; gameState.support -= 20;
        msg.innerText = "BÁO CÁO: Lệnh cấm nhựa gây ra biểu tình từ các doanh nghiệp, nhưng môi trường đang hồi phục.";
    } else {
        gameState.money -= 50; gameState.support += 20;
        msg.innerText = "SỰ KIỆN: Đại nhạc hội thu hút hàng triệu người tham gia. Chỉ số ủng hộ tăng vọt!";
    }

    updateUI();
}

function updateUI() {
    document.getElementById('money').innerText = gameState.money;
    document.getElementById('health').innerText = gameState.health;
    document.getElementById('support').innerText = gameState.support;

    if(gameState.health >= 80) alert("CHIẾN THẮNG: Bạn đã kiến tạo một hành tinh xanh!");
    if(gameState.money <= 0) alert("THẤT BẠI: Ngân sách cạn kiệt, thành phố sụp đổ.");
}
