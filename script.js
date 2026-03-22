// GAME 1: MANAGEMENT
let oxy = 100, money = 500, happy = 100;
function choice(c) {
    if(c === 1) { oxy -= 20; money += 200; happy -= 10; }
    else { oxy += 10; money -= 150; happy += 20; }
    updateStats();
    document.getElementById('game-event').innerText = "Sự kiện: Một khu rừng mới cần được bảo tồn. Chi phí 200$.";
}
function updateStats() {
    document.getElementById('stat-oxy').innerText = oxy;
    document.getElementById('stat-money').innerText = money;
    document.getElementById('stat-happy').innerText = happy;
    if(oxy <= 0) alert("Thế giới hết oxy! Bạn đã thua.");
}

// GAME 2: ARCADE (HỨNG RÁC)
let score = 0;
let playerPos = 50;
let itemPos = 0;
let itemType = 'o'; // o: hữu cơ, p: nhựa

function startArcade() {
    setInterval(() => {
        itemPos += 5;
        if(itemPos > 400) {
            checkCatch();
            resetItem();
        }
        document.getElementById('falling-item').style.top = itemPos + "px";
    }, 50);
}

document.addEventListener('keydown', (e) => {
    if(e.key === 'a') playerPos -= 5;
    if(e.key === 'd') playerPos += 5;
    document.getElementById('player').style.left = playerPos + "%";
});

function resetItem() {
    itemPos = 0;
    const items = ['🍎', '🍾', '🍌', '🥫'];
    const rand = Math.floor(Math.random() * items.length);
    document.getElementById('falling-item').innerText = items[rand];
    itemType = (rand === 0 || rand === 2) ? 'o' : 'p';
    document.getElementById('falling-item').style.left = Math.random() * 90 + "%";
}

function checkCatch() {
    // Logic kiểm tra vị trí người chơi hứng đúng loại rác
    score += 10;
    document.getElementById('score').innerText = score;
}
