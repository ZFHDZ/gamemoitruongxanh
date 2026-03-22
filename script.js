// ECO GAME ENGINE
const canvas = document.getElementById('ecoGame');
const ctx = canvas.getContext('2d');
const oxyEl = document.getElementById('oxy');
const scoreEl = document.getElementById('score');
const startBtn = document.getElementById('start-btn');

let oxy = 100;
let score = 0;
let trashItems = [];
let gameActive = false;

startBtn.addEventListener('click', () => {
    gameActive = true;
    oxy = 100;
    score = 0;
    trashItems = [];
    startBtn.style.display = 'none';
    requestAnimationFrame(update);
});

canvas.addEventListener('mousedown', (e) => {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    trashItems = trashItems.filter(item => {
        const dist = Math.hypot(item.x - x, item.y - y);
        if (dist < 20) {
            score += 1;
            scoreEl.innerText = score;
            return false;
        }
        return true;
    });
});

function update() {
    if (!gameActive) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Giảm Oxy dần
    oxy -= 0.05;
    oxyEl.innerText = Math.floor(oxy);

    // Tạo rác mới
    if (Math.random() < 0.03) {
        trashItems.push({ x: Math.random() * canvas.width, y: -20, speed: 2 + Math.random() * 2 });
    }

    // Vẽ rác
    trashItems.forEach((item, index) => {
        item.y += item.speed;
        ctx.fillStyle = '#ef4444';
        ctx.beginPath();
        ctx.arc(item.x, item.y, 10, 0, Math.PI * 2);
        ctx.fill();

        // Nếu rác chạm đáy
        if (item.y > canvas.height) {
            trashItems.splice(index, 1);
            oxy -= 5;
        }
    });

    if (oxy <= 0) {
        gameActive = false;
        alert("GAME OVER! Bạn đã dọn được " + score + " mảnh rác.");
        startBtn.style.display = 'inline-block';
        startBtn.innerText = "CHƠI LẠI";
    } else {
        requestAnimationFrame(update);
    }
}
