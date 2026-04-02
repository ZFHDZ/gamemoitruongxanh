// ==========================================
// --- TRÒ 1: TRẮC NGHIỆM ĐA LĨNH VỰC ---
// ==========================================
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
            if (i === q.c) {
                qScore++;
                document.getElementById('q-score').innerText = qScore;
            }
            qIdx++;
            showQuiz();
        };
        opts.appendChild(btn);
    });
}

function resetQuiz() {
    qIdx = 0; qScore = 0;
    document.getElementById('q-score').innerText = "0";
    showQuiz();
}

// ==========================================
// --- TRÒ 2: PHÂN LOẠI RÁC (KÉO & THẢ) ---
// ==========================================
<div id="game-sort-container" class="glass" style="background: rgba(255,255,255,0.95); padding: 30px; border-radius: 25px; border: 2px solid #27ae60;">
    <style>
        /* Tên trò chơi nổi bật */
        .game-badge {
            display: inline-block;
            background: #27ae60;
            color: white;
            padding: 5px 20px;
            border-radius: 50px;
            font-size: 0.9rem;
            font-weight: bold;
            margin-bottom: 10px;
        }
        .game-title { 
            text-align: center; 
            color: #1e8449; 
            margin-bottom: 5px; 
            font-weight: 900; 
            font-size: 1.8rem;
            text-transform: uppercase;
        }
        .game-subtitle {
            text-align: center;
            color: #666;
            font-size: 0.9rem;
            margin-bottom: 20px;
        }

        .progress-bar-container { width: 100%; background: #eee; height: 12px; border-radius: 10px; margin-bottom: 20px; overflow: hidden; }
        #progress-fill { width: 0%; height: 100%; background: #2ecc71; transition: 0.4s; }
        
        .trash-display {
            height: 120px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(46, 204, 113, 0.1);
            border-radius: 20px;
            margin-bottom: 25px;
            border: 2px dashed #27ae60;
        }

        #current-trash {
            padding: 15px 30px;
            background: #f1c40f;
            color: #333;
            font-size: 1.2rem;
            font-weight: 900;
            border-radius: 12px;
            cursor: grab;
            box-shadow: 0 6px 15px rgba(0,0,0,0.1);
        }

        .bins-row { display: flex; justify-content: space-between; gap: 20px; }
        .bin-box {
            flex: 1;
            height: 180px;
            border-radius: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            transition: 0.3s;
            border: 4px solid transparent;
        }
        .bin-box i { font-size: 3rem; margin-bottom: 10px; pointer-events: none; }
        .bin-box span { font-weight: 900; pointer-events: none; }

        .bin-org { background: #d4edda; color: #155724; border-color: #c3e6cb; }
        .bin-inorg { background: #fff3cd; color: #856404; border-color: #ffeeba; }

        .drag-over { transform: scale(1.05); background: #fff !important; border-style: dashed; }
        .wrong { animation: shake 0.4s ease-in-out; border-color: #e74c3c !important; }
        @keyframes shake { 0%, 100% {transform: x(0);} 25% {transform: translateX(-8px);} 75% {transform: translateX(8px);} }
    </style>

    <div style="text-align: center;">
        <div class="game-badge">LEVEL: EASY</div>
        <h2 class="game-title">TRÒ CHƠI 02: HIỆP SĨ PHÂN LOẠI</h2>
        <p class="game-subtitle">Kéo rác vào đúng thùng để làm sạch môi trường!</p>
    </div>
    
    <div class="progress-bar-container">
        <div id="progress-fill"></div>
    </div>

    <div class="trash-display">
        <div id="current-trash" draggable="true" ondragstart="event.dataTransfer.setData('text', event.target.id)">
            Đang tải rác...
        </div>
    </div>

    <div class="bins-row">
        <div class="bin-box bin-org" id="organic" ondragover="event.preventDefault()" ondrop="handleDrop(event, 'organic')" ondragenter="this.classList.add('drag-over')" ondragleave="this.classList.remove('drag-over')">
            <i>🍎</i>
            <span>RÁC HỮU CƠ</span>
        </div>
        <div class="bin-box bin-inorg" id="inorganic" ondragover="event.preventDefault()" ondrop="handleDrop(event, 'inorganic')" ondragenter="this.classList.add('drag-over')" ondragleave="this.classList.remove('drag-over')">
            <i>🥤</i>
            <span>RÁC VÔ CƠ</span>
        </div>
    </div>

    <script>
        const trashes = [
            { n: "🍐 Vỏ trái cây", t: "organic" }, { n: "🥤 Ly nhựa trà sữa", t: "inorganic" },
            { n: "🍂 Lá khô", t: "organic" }, { n: "🥫 Lon nhôm", t: "inorganic" },
            { n: "🍚 Cơm nguội", t: "organic" }, { n: "🛍️ Túi nilon", t: "inorganic" },
            { n: "☕ Bã trà", t: "organic" }, { n: "🔋 Pin cũ", t: "inorganic" }
        ];
        let idx = 0;

        function updateUI() {
            const el = document.getElementById('current-trash');
            if (idx < trashes.length) {
                el.innerText = trashes[idx].n;
                document.getElementById('progress-fill').style.width = (idx / trashes.length * 100) + "%";
            } else {
                el.innerText = "🏆 CHIẾN THẮNG!";
                el.style.background = "#27ae60"; el.style.color = "white";
                document.getElementById('progress-fill').style.width = "100%";
            }
        }

        function handleDrop(e, type) {
            e.preventDefault();
            const bin = e.currentTarget;
            bin.classList.remove('drag-over');
            if (idx < trashes.length) {
                if (trashes[idx].t === type) {
                    idx++; updateUI();
                    bin.style.transform = "scale(1.1)";
                    setTimeout(() => bin.style.transform = "scale(1)", 200);
                } else {
                    bin.classList.add('wrong');
                    setTimeout(() => bin.classList.remove('wrong'), 400);
                }
            }
        }
        updateUI();
    </script>
</div>

// ==========================================
// --- TRÒ 3: TRÍ NHỚ SIÊU PHÀM (LẬT THẺ) ---
// ==========================================
const icons = ['🌿','🌿','♻️','♻️','🌍','🌍','☀️','☀️','💧','💧','🍃','🍃','🔋','🔋','🚲','🚲'];
let flippedCards = [];
let matchedCount = 0;

function initMemory() {
    const board = document.getElementById('memory-board');
    board.innerHTML = '';
    flippedCards = [];
    matchedCount = 0;
    
    // Trộn thẻ ngẫu nhiên
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
                
                if (flippedCards.length === 2) {
                    setTimeout(checkMatch, 600);
                }
            }
        };
        board.appendChild(card);
    });
}

function checkMatch() {
    const [c1, c2] = flippedCards;
    if (c1.dataset.icon === c2.dataset.icon) {
        matchedCount += 2;
        if (matchedCount === icons.length) {
            alert("Tuyệt vời! Bạn có trí nhớ rất tốt về môi trường.");
        }
    } else {
        c1.classList.remove('flipped');
        c2.classList.remove('flipped');
    }
    flippedCards = [];
}

// Khởi chạy khi tải trang
window.onload = () => {
    showQuiz();
    loadTrash();
    initMemory();
};
