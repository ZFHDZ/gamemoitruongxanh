const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
let oxy = 100;
let score = 0;
let trash = [];
let gameActive = false;

function startGame() {
    gameActive = true; oxy = 100; score = 0; trash = [];
    animate();
}

canvas.addEventListener('mousedown', (e) => {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    trash = trash.filter(t => {
        if (Math.hypot(t.x - x, t.y - y) < 20) {
            score += 10;
            document.getElementById('score').innerText = score;
            return false;
        }
        return true;
    });
});

function animate() {
    if (!gameActive) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    oxy -= 0.1;
    document.getElementById('oxy').innerText = Math.floor(oxy);

    if (Math.random() < 0.03) trash.push({ x: Math.random() * canvas.width, y: 0, s: 2 });
    
    trash.forEach((t, i) => {
        t.y += t.s;
        ctx.fillStyle = 'red';
        ctx.beginPath(); ctx.arc(t.x, t.y, 10, 0, Math.PI*2); ctx.fill();
        if (t.y > canvas.height) { trash.splice(i, 1); oxy -= 5; }
    });

    if (oxy <= 0) { gameActive = false; alert("Game Over! Điểm của bạn: " + score); }
    else requestAnimationFrame(animate);
}
