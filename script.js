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
const trashData = [
    { n: "Vỏ cam héo", t: "organic" }, 
    { n: "Chai nhựa trà sữa", t: "inorganic" },
    { n: "Lá cây khô", t: "organic" }, 
    { n: "Lon nước ngọt", t: "inorganic" },
    { n: "Cơm thừa", t: "organic" }, 
    { n: "Túi nilon", t: "inorganic" },
    { n: "Bã cà phê", t: "organic" }, 
    { n: "Pin cũ (Rác độc hại)", t: "inorganic" },
    { n: "Rau cải hỏng", t: "organic" }, 
    { n: "Mảnh thủy tinh", t: "inorganic" }
];

let tIdx = 0;

function loadTrash() {
    const trashItem = document.getElementById('trash-item');
    if (tIdx < trashData.length) {
        trashItem.innerText = trashData[tIdx].n;
        trashItem.style.display = "block";
    } else {
        trashItem.innerText = "BẠN ĐÃ PHÂN LOẠI XONG!";
        trashItem.draggable = false;
    }
}

function allow(e) { e.preventDefault(); }

function drag(e) {
    e.dataTransfer.setData("text", e.target.id);
}

function drop(e, type) {
    e.preventDefault();
    if (tIdx < trashData.length) {
        if (trashData[tIdx].t === type) {
            tIdx++;
            document.getElementById('sort-progress').innerText = `Tiến độ: ${tIdx}/10`;
            loadTrash();
        } else {
            alert("Rác này không thuộc thùng này! Hãy thử lại.");
        }
    }
}

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
