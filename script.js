// TRÒ CHƠI SINH TỒN ECO-GAME
const canvas = document.getElementById('ecoGame');
const ctx = canvas.getContext('2d');
const oxyEl = document.getElementById('oxy-level');
const treeEl = document.getElementById('trees');

let oxy = 100;
let trees = 0;
let gameActive = false;

function startGame() {
    if(gameActive) return;
    gameActive = true;
    oxy = 100;
    trees = 0;
    document.getElementById('start-btn').innerText = "ĐANG GIẢI CỨU...";
    gameLoop();
}

function gameLoop() {
    if(!gameActive) return;
    
    // Xóa màn hình
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Giảm oxy theo thời gian
    oxy -= 0.1;
    oxyEl.innerText = Math.floor(oxy);
    
    // Vẽ "Rác" (Màu đỏ)
    ctx.fillStyle = "#ff3b30";
    ctx.fillRect(Math.random() * canvas.width, Math.random() * canvas.height, 10, 10);
    
    // Vẽ "Mầm xanh" (Click để trồng)
    canvas.onclick = (e) => {
        trees++;
        oxy += 2;
        if(oxy > 100) oxy = 100;
        treeEl.innerText = trees;
        ctx.fillStyle = "#34c759";
        ctx.beginPath();
        ctx.arc(e.offsetX, e.offsetY, 15, 0, Math.PI * 2);
        ctx.fill();
    };

    if(oxy <= 0) {
        gameActive = false;
        alert("GAME OVER! Bạn đã trồng được " + trees + " cây.");
        document.getElementById('start-btn').innerText = "CHƠI LẠI";
    } else {
        requestAnimationFrame(gameLoop);
    }
}
