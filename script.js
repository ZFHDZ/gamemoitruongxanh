// ==========================================
// 1. BỘ ĐIỀU KHIỂN CHUYỂN ĐỔI GAME (TAB)
// ==========================================
function switchGame(gameType) {
    // Ẩn tất cả các màn hình game
    document.querySelectorAll('.game-content').forEach(g => g.classList.add('hidden'));
    // Bỏ trạng thái active của các nút
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    
    // Hiện game được chọn
    const selectedGame = document.getElementById(gameType + '-game');
    if (selectedGame) {
        selectedGame.classList.remove('hidden');
        event.currentTarget.classList.add('active');
    }

    // Khởi tạo lại game khi chuyển tab
    if (gameType === 'quiz') startQuiz();
    if (gameType === 'sort') startSortGame();
    if (gameType === 'memory') startMemoryGame();
}

// ==========================================
// 2. LOGIC GAME 1: TRẮC NGHIỆM
// ==========================================
const quizData = [
    { q: "Rác thải nhựa mất bao lâu để phân hủy?", a: ["10 năm", "50 năm", "100-500 năm", "Không bao giờ"], correct: 2 },
    { q: "Loại rác nào có thể tái chế?", a: ["Vỏ trái cây", "Chai nhựa PET", "Giấy ăn bẩn", "Pin cũ"], correct: 1 },
    { q: "PM2.5 là gì?", a: ["Một loại nhựa", "Bụi siêu mịn", "Khí gas", "Tên một loại rừng"], correct: 1 }
];

let currentQ = 0;
let quizScore = 0;

function startQuiz() {
    currentQ = 0;
    quizScore = 0;
    document.getElementById('result-container').classList.add('hidden');
    document.getElementById('question-container').classList.remove('hidden');
    showQuestion();
}

function showQuestion() {
    const data = quizData[currentQ];
    document.getElementById('question').innerText = data.q;
    const btnArea = document.getElementById('answer-buttons');
    btnArea.innerHTML = '';
    data.a.forEach((text, i) => {
        const btn = document.createElement('button');
        btn.innerText = text;
        btn.classList.add('ans-btn');
        btn.onclick = () => {
            if(i === data.correct) quizScore++;
            currentQ++;
            if(currentQ < quizData.length) showQuestion();
            else showQuizResult();
        };
        btnArea.appendChild(btn);
    });
}

function showQuizResult() {
    document.getElementById('question-container').classList.add('hidden');
    document.getElementById('result-container').classList.remove('hidden');
    document.getElementById('score').innerText = quizScore;
}

// ==========================================
// 3. LOGIC GAME 2: PHÂN LOẠI RÁC (Mẫu nhanh)
// ==========================================
function startSortGame() {
    const sortArea = document.getElementById('sort-game');
    sortArea.innerHTML = `
        <h3 style="color:#2ecc71">Kéo rác vào đúng thùng!</h3>
        <div style="display:flex; justify-content:space-around; margin:20px 0;">
            <div id="trash-item" draggable="true" ondragstart="drag(event)" style="padding:10px; background:#fff; color:#000; cursor:grab;">Chai Nhựa</div>
        </div>
        <div style="display:flex; gap:20px; justify-content:center;">
            <div ondrop="drop(event, 'recycled')" ondragover="allowDrop(event)" style="width:100px; height:120px; background:#3498db; border-radius:10px; display:flex; align-items:center; justify-content:center;">Tái Chế</div>
            <div ondrop="drop(event, 'organic')" ondragover="allowDrop(event)" style="width:100px; height:120px; background:#27ae60; border-radius:10px; display:flex; align-items:center; justify-content:center;">Hữu Cơ</div>
        </div>
        <p id="sort-msg" style="margin-top:15px;"></p>
    `;
}

function allowDrop(ev) { ev.preventDefault(); }
function drag(ev) { ev.dataTransfer.setData("text", ev.target.id); }
function drop(ev, type) {
    ev.preventDefault();
    if(type === 'recycled') {
        document.getElementById('sort-msg').innerText = "Chính xác! Chai nhựa là rác tái chế.";
        document.getElementById('sort-msg').style.color = "#2ecc71";
    } else {
        document.getElementById('sort-msg').innerText = "Sai rồi, hãy thử lại!";
        document.getElementById('sort-msg').style.color = "#e74c3c";
    }
}

// ==========================================
// 4. LOGIC GAME 3: TRÍ NHỚ (Mẫu nhanh)
// ==========================================
function startMemoryGame() {
    const memArea = document.getElementById('memory-game');
    memArea.innerHTML = `
        <h3 style="color:#f1c40f">Tìm cặp hình giống nhau</h3>
        <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap:10px; margin-top:15px;">
            <div onclick="this.innerText='♻️'" style="height:60px; background:rgba(255,255,255,0.1); display:flex; align-items:center; justify-content:center; cursor:pointer;">?</div>
            <div onclick="this.innerText='🌳'" style="height:60px; background:rgba(255,255,255,0.1); display:flex; align-items:center; justify-content:center; cursor:pointer;">?</div>
            <div onclick="this.innerText='♻️'" style="height:60px; background:rgba(255,255,255,0.1); display:flex; align-items:center; justify-content:center; cursor:pointer;">?</div>
        </div>
        <p style="font-size:0.8rem; margin-top:10px;">(Nhấn vào ô để lật hình)</p>
    `;
}

// Khởi tạo mặc định khi load trang
window.onload = () => {
    startQuiz();
};
