const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const oxyEl = document.getElementById('oxy');
const scoreEl = document.getElementById('score');
const startBtn = document.getElementById('startBtn');

let oxy = 100; let score = 0; let trash = []; let gameActive = false;

startBtn.addEventListener('click', () => {
    gameActive = true; oxy = 100; score = 0; trash = [];
    startBtn.style.display = 'none';
    animate();
});

canvas.addEventListener('mousedown', (e) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    trash = trash.filter(t => {
        if (Math.hypot(t.x - mouseX, t.y - mouseY) < 25) {
            score += 10; scoreEl.innerText = score; return false;
        }
        return true;
    });
});

function animate() {
    if (!gameActive) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    oxy -= 0.08; oxyEl.innerText = Math.floor(oxy);
    if (Math.random() < 0.04) trash.push({ x: Math.random() * canvas.width, y: -20, s: 2 + Math.random() * 2 });
    trash.forEach((t, i) => {
        t.y += t.s;
        ctx.fillStyle = '#ff4757';
        ctx.beginPath(); ctx.arc(t.x, t.y, 10, 0, Math.PI * 2); ctx.fill();
        if (t.y > canvas.height) { trash.splice(i, 1); oxy -= 5; }
    });
    if (oxy <= 0) {
        gameActive = false; alert("GAME OVER! Bạn cứu được " + score + " điểm xanh.");
        startBtn.style.display = 'inline-block';
    } else { requestAnimationFrame(animate); }
}
