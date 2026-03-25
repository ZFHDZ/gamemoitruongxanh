// ==========================================
// 1. KHỞI TẠO VÀ HIỆU ỨNG CHUNG
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    console.log("Trí Tuệ Xanh đã sẵn sàng!");
    
    // Nút cam kết Mục 10
    const btnCommit = document.getElementById('btn-commit');
    if (btnCommit) {
        btnCommit.addEventListener('click', function() {
            this.innerText = "ĐÃ CAM KẾT ✓";
            this.style.background = "#f1c40f";
            this.style.color = "#000";
            document.getElementById('commit-msg').classList.remove('hidden');
        });
    }

    // Khởi động Game mặc định
    startQuiz();
});

// ==========================================
// 2. CHUYỂN ĐỔI GIỮA CÁC TRÒ CHƠI (TABS)
// ==========================================
function switchGame(event, gameId) {
    // Ẩn tất cả nội dung game
    const contents = document.getElementsByClassName('game-content');
    for (let i = 0; i < contents.length; i++) {
        contents[i].classList.add('hidden');
    }

    // Bỏ trạng thái active của các nút tab
    const tabs = document.getElementsByClassName('tab-btn');
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');
    }

    // Hiện game được chọn và kích hoạt nút
    document.getElementById(gameId).classList.remove('hidden');
    event.currentTarget.classList.add('active');

    // Reset hoặc khởi tạo lại game tương ứng
    if (gameId === 'quiz-ui') startQuiz();
    if (gameId === 'sort-ui') resetSortGame();
    if (gameId === 'memory-ui') startMemoryGame();
}

// ==========================================
// 3. LOGIC GAME 1: TRẮC NGHIỆM (QUIZ)
// ==========================================
const quizData = [
    { q: "Rác nhựa mất bao lâu để phân hủy hoàn toàn?", a: ["10-20 năm", "50 năm", "100-500 năm", "1000 năm"], c: 2 },
    { q: "Loại rác nào sau đây CÓ THỂ tái chế?", a: ["Giấy ăn đã dùng", "Vỏ chai nhựa PET", "Túi nilon bẩn", "Xác động vật"], c: 1 },
    { q: "Bụi mịn PM2.5 gây hại nhất cho cơ quan nào?", a: ["Gan", "Hệ hô hấp & Tim mạch", "Xương khớp", "Hệ tiêu hóa"], c: 1 }
];

let currentIdx = 0;
let quizScore = 0;

function startQuiz() {
    currentIdx = 0;
    quizScore = 0;
    showQuestion();
}

function showQuestion() {
    const qText = document.getElementById('q-text');
    const qOptions = document.getElementById('q-options');
    if (!qText || !qOptions) return;

    const data = quizData[currentIdx];
    qText.innerText = `Câu ${currentIdx + 1}: ${data.q}`;
    qOptions.innerHTML = '';

    data.a.forEach((option, i) => {
        const btn = document.createElement('button');
        btn.innerText = option;
        btn.className = 'ans-btn'; // Đảm bảo class này có trong CSS
        btn.onclick = () => {
            if (i === data.c) quizScore++;
            currentIdx++;
            if (currentIdx < quizData.length) {
                showQuestion();
            } else {
                qText.innerText = `Hoàn thành! Điểm của bạn: ${quizScore}/${quizData.length}`;
                qOptions.innerHTML = `<button class="tab-btn" onclick="startQuiz()">Chơi lại</button>`;
            }
        };
        qOptions.appendChild(btn);
    });
}

// ==========================================
// 4. LOGIC GAME 2: PHÂN LOẠI RÁC
// ==========================================
function resetSortGame() {
    const msg = document.getElementById('sort-ui').querySelector('p');
    if(msg) msg.innerText = "🧴 (Chai nhựa)"; 
}

function checkSort(status) {
    if (status === 'correct') {
        alert("Chính xác! Chai nhựa là rác tái chế.");
    } else {
        alert("Chưa đúng rồi! Hãy suy nghĩ lại nhé.");
    }
}

// ==========================================
// 5. LOGIC GAME 3: TRÍ NHỚ (MEMORY GAME)
// ==========================================
function startMemoryGame() {
    const board = document.getElementById('mem-board');
    if (!board) return;

    const icons = ['♻️', '🌳', '🌊', '♻️', '🌳', '🌊'];
    icons.sort(() => Math.random() - 0.5); // Xáo trộn

    board.innerHTML = '';
    icons.forEach(icon => {
        const card = document.createElement('div');
        card.className = 'mem-card'; // Class này cần định nghĩa trong CSS
        card.style = "height:60px; background:rgba(255,255,255,0.1); display:flex; align-items:center; justify-content:center; cursor:pointer; font-size:1.5rem; border-radius:8px;";
        card.innerText = "?";
        card.onclick = function() {
            this.innerText = icon;
            this.style.background = "rgba(46, 204, 113, 0.4)";
        };
        board.appendChild(card);
    });
}
