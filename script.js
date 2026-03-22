const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const startBtn = document.getElementById('startBtn');
const scoreEl = document.getElementById('score');
const oxyEl = document.getElementById('oxy');

let score = 0;
let oxy = 100;
let gameActive = false;
let trash = [];

startBtn.addEventListener('click', () => {
    gameActive = true;
    score = 0;
    oxy = 100;
    trash = [];
    startBtn.style.display = 'none';
    gameLoop();
});

function createTrash() {
    if (Math.random() < 0.05) {
        trash.push({
            x: Math.random() * canvas.width,
            y: 0,
            size: 20,
            speed: 2 + Math.random() * 3
        });
    }
}

canvas.addEventListener('mousedown', (e) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    trash = trash.filter(t => {
        const dist = Math.hypot(t.x - mouseX, t.y - mouseY);
        if (dist < t.size) {
            score += 10;
            scoreEl.innerText = score;
            return false;
        }
        return true;
    });
});

function gameLoop() {
    if (!gameActive) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    oxy -= 0.1;
    oxyEl.innerText = Math.floor(oxy);

    createTrash();

    trash.forEach((t, index) => {
        t.y += t.speed;
        ctx.fillStyle = "#e74c3c";
        ctx.beginPath();
        ctx.arc(t.x, t.y, t.size/2, 0, Math.PI * 2);
        ctx.fill();

        if (t.y > canvas.height) {
            trash.splice(index, 1);
            oxy -= 5;
        }
    });

    if (oxy <= 0) {
        gameActive = false;
        alert("Hết Oxy! Bạn đã thu gom được " + score + " điểm rác thải.");
        startBtn.style.display = 'block';
        startBtn.innerText = "CHƠI LẠI";
    } else {
        requestAnimationFrame(gameLoop);
    }
}
