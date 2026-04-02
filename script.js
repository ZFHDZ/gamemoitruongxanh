<section id="games" class="section glass">
    <h2 style="text-align: center; color: #27ae60; margin-bottom: 30px;">07. TRUNG TÂM TRÒ CHƠI TRÍ TUỆ XANH</h2>

    <div class="game-box" id="quiz-area" style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 15px; margin-bottom: 20px;">
        <h3 style="color: #f1c40f;">🎮 Trò 1: Trắc Nghiệm Đa Lĩnh Vực</h3>
        <p>Câu hỏi <span id="q-count">1</span>/10 | Điểm: <span id="q-score">0</span></p>
        <p id="question" style="font-size: 1.2rem; margin: 15px 0; font-weight: bold;"></p>
        <div id="options" class="grid-options"></div>
    </div>

    <div class="game-box" style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 15px; margin-bottom: 20px;">
        <h3 style="color: #3498db;">♻️ Trò 2: Phân Loại Rác (Kéo & Thả)</h3>
        <p id="sort-progress">Tiến độ: 0/10</p>
        <div style="display: flex; justify-content: space-around; align-items: center; margin-top: 20px;">
            <div id="trash-item" draggable="true" ondragstart="drag(event)" 
                 style="padding: 15px 25px; background: #e67e22; color: white; border-radius: 8px; cursor: grab; font-weight: bold;">
                Đang tải rác...
            </div>
            
            <div id="organic-bin" ondrop="drop(event, 'organic')" ondragover="allow(event)" 
                 style="width: 150px; height: 150px; border: 3px dashed #2ecc71; display: flex; flex-direction: column; align-items: center; justify-content: center; border-radius: 10px;">
                <span style="font-size: 2rem;">🍎</span>
                <p>Rác Hữu Cơ</p>
            </div>

            <div id="inorganic-bin" ondrop="drop(event, 'inorganic')" ondragover="allow(event)" 
                 style="width: 150px; height: 150px; border: 3px dashed #95a5a6; display: flex; flex-direction: column; align-items: center; justify-content: center; border-radius: 10px;">
                <span style="font-size: 2rem;">🥤</span>
                <p>Rác Vô Cơ</p>
            </div>
        </div>
    </div>

    <div class="game-box" style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 15px;">
        <h3 style="color: #9b59b6;">🧠 Trò 3: Trí Nhớ Siêu Phàm</h3>
        <div id="memory-board" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; max-width: 400px; margin: 20px auto;"></div>
        <button onclick="initMemory()" style="display: block; margin: 10px auto; padding: 10px 20px; cursor: pointer; border-radius: 5px; border: none; background: #27ae60; color: white;">Làm mới thẻ</button>
    </div>
</section>

<style>
    .grid-options { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
    .quiz-btn { padding: 12px; background: rgba(255,255,255,0.2); border: 1px solid white; color: white; border-radius: 8px; cursor: pointer; transition: 0.3s; text-align: left; }
    .quiz-btn:hover { background: #27ae60; }
    .m-card { width: 100%; aspect-ratio: 1/1; background: #34495e; border-radius: 5px; display: flex; align-items: center; justify-content: center; cursor: pointer; font-size: 1.5rem; }
    .m-card.flipped { background: #ecf0f1; }
    .icon-hidden { visibility: hidden; }
    .flipped .icon-hidden { visibility: visible; }
    .game-result { text-align: center; padding: 20px; }
    .btn-reset { padding: 10px 20px; background: #f1c40f; border: none; border-radius: 5px; cursor: pointer; margin-top: 10px; }
</style>

<script>
const questions = [
    { q: "Rác thải nhựa mất bao lâu để phân hủy?", a: ["10 năm", "100 năm", "450-500 năm", "Không bao giờ"], c: 2 },
    { q: "Mục tiêu Net Zero 2050 của Việt Nam là gì?", a: ["Phát thải bằng 0", "Không dùng xe máy", "Tắt điện toàn cầu", "Trồng 1 tỷ cây"], c: 0 },
    { q: "Bụi mịn PM2.5 gây hại trực tiếp nhất cho hệ cơ quan nào?", a: ["Hệ tiêu hóa", "Hệ hô hấp", "Hệ bài tiết", "Hệ vận động"], c: 1 },
    { q: "Nhóm tình nguyện nào nổi tiếng với việc dọn kênh rạch tại TP.HCM?", a: ["Hà Nội Xanh", "Sài Gòn Xanh", "Đội Xanh", "Thanh Niên Xanh"], c: 1 },
    { q: "Khí thải chính gây ra hiệu ứng nhà kính là?", a: ["Oxy", "Nitơ", "Carbon Dioxide (CO2)", "Argon"], c: 2 },
    { q: "Lượng rác thải nhựa phát sinh tại VN năm 2026 ước tính là?", a: ["3.2 triệu tấn", "1.8 triệu tấn", "500 nghìn tấn", "10 triệu tấn"], c: 0 },
    { q: "Loại rác nào sau đây có thể dùng làm phân bón hữu cơ?", a: ["Hộp xốp", "Vỏ trái cây", "Pin cũ", "Thủy tinh"], c: 1 },
    { q: "Ngày Môi trường Thế giới là ngày nào?", a: ["1/6", "5/6", "22/4", "10/10"], c: 1 },
    { q: "Vi nhựa (microplastic) đã được tìm thấy ở đâu?", a: ["Muối biển", "Hải sản", "Máu người", "Tất cả các phương án"], c: 3 },
    { q: "Nguồn năng lượng nào sau đây là năng lượng tái tạo?", a: ["Than đá", "Dầu mỏ", "Điện gió", "Khí đốt"], c: 2 }
];

let qIdx = 0, qScore = 0;

function showQuiz() {
    const quizArea = document.getElementById('quiz-area');
    if (qIdx >= questions.length) {
        quizArea.innerHTML = `<div class="game-result">
            <h3>HOÀN THÀNH BÀI KIỂM TRA!</h3>
            <p>Điểm số của bạn: <strong>${qScore}/${questions.length}</strong></p>
            <button onclick="resetQuiz()" class="btn-reset">Làm lại</button>
        </div>`;
        return;
    }
    const q = questions[qIdx];
    document.getElementById('question').innerText = q.q;
    document.getElementById('q-count').innerText = qIdx + 1;
    const opts = document.getElementById('options');
    opts.innerHTML = '';
    q.a.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.innerText = opt;
        btn.className = "quiz-btn";
        btn.onclick = () => {
            if (i === q.c) { qScore++; document.getElementById('q-score').innerText = qScore; }
            qIdx++; showQuiz();
        };
        opts.appendChild(btn);
    });
}

function resetQuiz() {
    qIdx = 0; qScore = 0;
    const quizArea = document.getElementById('quiz-area');
    quizArea.innerHTML = `
        <h3 style="color: #f1c40f;">🎮 Trò 1: Trắc Nghiệm Đa Lĩnh Vực</h3>
        <p>Câu hỏi <span id="q-count">1</span>/10 | Điểm: <span id="q-score">0</span></p>
        <p id="question" style="font-size: 1.2rem; margin: 15px 0; font-weight: bold;"></p>
        <div id="options" class="grid-options"></div>`;
    showQuiz();
}

const trashData = [
    { n: "Vỏ cam héo", t: "organic" }, { n: "Chai nhựa trà sữa", t: "inorganic" },
    { n: "Lá cây khô", t: "organic" }, { n: "Lon nước ngọt", t: "inorganic" },
    { n: "Cơm thừa", t: "organic" }, { n: "Túi nilon", t: "inorganic" },
    { n: "Bã cà phê", t: "organic" }, { n: "Pin cũ", t: "inorganic" },
    { n: "Rau cải hỏng", t: "organic" }, { n: "Mảnh thủy tinh", t: "inorganic" }
];
let tIdx = 0;
function loadTrash() {
    const trashItem = document.getElementById('trash-item');
    if (tIdx < trashData.length) {
        trashItem.innerText = trashData[tIdx].n;
    } else {
        trashItem.innerText = "XONG!";
    }
}
function allow(e) { e.preventDefault(); }
function drag(e) { e.dataTransfer.setData("text", e.target.id); }
function drop(e, type) {
    e.preventDefault();
    if (tIdx < trashData.length) {
        if (trashData[tIdx].t === type) {
            tIdx++;
            document.getElementById('sort-progress').innerText = `Tiến độ: ${tIdx}/10`;
            loadTrash();
        } else { alert("Sai thùng rồi!"); }
    }
}

const icons = ['🌿','🌿','♻️','♻️','🌍','🌍','☀️','☀️','💧','💧','🍃','🍃','🔋','🔋','🚲','🚲'];
let flippedCards = [];
let matchedCount = 0;
function initMemory() {
    const board = document.getElementById('memory-board');
    board.innerHTML = ''; flippedCards = []; matchedCount = 0;
    const shuffledIcons = [...icons].sort(() => Math.random() - 0.5);
    shuffledIcons.forEach(icon => {
        const card = document.createElement('div');
        card.className = 'm-card';
        card.dataset.icon = icon;
        card.innerHTML = `<span class="icon-hidden">${icon}</span>`;
        card.onclick = () => {
            if (flippedCards.length < 2 && !card.classList.contains('flipped')) {
                card.classList.add('flipped');
                flippedCards.push(card);
                if (flippedCards.length === 2) { setTimeout(checkMatch, 600); }
            }
        };
        board.appendChild(card);
    });
}
function checkMatch() {
    const [c1, c2] = flippedCards;
    if (c1.dataset.icon === c2.dataset.icon) {
        matchedCount += 2;
    } else {
        c1.classList.remove('flipped');
        c2.classList.remove('flipped');
    }
    flippedCards = [];
}

window.onload = () => { showQuiz(); loadTrash(); initMemory(); };
</script>
