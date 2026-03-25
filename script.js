// --- HIỆU ỨNG CHO 10 MỤC NỘI DUNG ---

document.addEventListener('DOMContentLoaded', () => {
    // 1. Bộ đếm rác thải nhựa thời gian thực (Mục 1)
    let plasticWaste = 0;
    const wasteElement = document.getElementById('plastic-counter');
    if (wasteElement) {
        setInterval(() => {
            plasticWaste += 0.08; // Giả lập 0.08kg mỗi giây
            wasteElement.innerText = plasticWaste.toFixed(2) + " kg";
        }, 1000);
    }

    // 2. Hiệu ứng biểu đồ tự mọc (Mục 6)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bars = entry.target.querySelectorAll('.stat-bar');
                bars.forEach(bar => {
                    const targetH = bar.style.getPropertyValue('--h');
                    bar.style.height = targetH;
                });
            }
        });
    }, { threshold: 0.5 });

    const chartSection = document.querySelector('#data-visual');
    if (chartSection) observer.observe(chartSection);
});
/* =========================================
   === JAVASCRIPT XỬ LÝ 3 TRÒ CHƠI ===
   ========================================= */

// --- KHỞI TẠO TẤT CẢ GAME KHI TRANG TẢI XONG ---
document.addEventListener('DOMContentLoaded', () => {
    initQuiz();
    initSort();
    initMemory();
});


// =========================================
// === GAME 1: TRẮC NGHIỆM ĐA LĨNH VỰC ===
// =========================================
const quizData = [
    { q: "Năm 2026, lượng rác thải sinh hoạt Việt Nam phát sinh bao nhiêu triệu tấn/năm?", a: ["15T", "20T", "25T", "30T"], c: 2 },
    { q: "Loại bụi mịn nào là kẻ giết người thầm lặng tại các đô thị?", a: ["PM1.0", "PM2.5", "PM5.0", "PM10"], c: 1 },
    { q: "Lộ trình Việt Nam đạt phát thải ròng bằng '0' (Net Zero) vào năm nào?", a: ["2030", "2040", "2050", "2060"], c: 2 },
    { q: "Ống hút nhựa mất bao nhiêu năm để phân hủy?", a: ["50 năm", "100 năm", "200 năm", "500 năm"], c: 2 },
    { q: "Túi nilon mất bao nhiêu năm để phân hủy?", a: ["100 năm", "300 năm", "500 năm", "1000 năm"], c: 2 },
    { q: "Điểm nóng môi trường nào đang bị san hô chết trắng?", a: ["Hà Nội", "Miền Trung", "Miền Tây", "TP.HCM"], c: 1 },
    { q: "Một người Việt trung bình phát thải bao nhiêu tấn CO2/năm?", a: ["1.5T", "2.5T", "3.5T", "4.5T"], c: 2 },
    { q: "Vỏ trái cây, thức ăn thừa thuộc loại rác nào?", a: ["Hữu cơ", "Vô cơ", "Tái chế", "Nguy hại"], c: 0 },
    { q: "Cam kết giảm phát thải khí nhà kính toàn cầu thuộc thỏa thuận nào?", a: ["Kyoto", "Paris", "Montreal", "Tokyo"], c: 1 },
    { q: "Màu sắc đặc trưng của sự sống và bảo vệ môi trường là?", a: ["Đỏ", "Xanh dương", "Xanh lá", "Vàng"], c: 2 }
];

let currentQuestionIndex = 0;
let score = 0;
let quizCompleted = false;

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const countEl = document.getElementById('q-count');
const scoreEl = document.getElementById('q-score');
const nextBtn = document.getElementById('next-btn');
const restartQuizBtn = document.getElementById('restart-quiz');

function initQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    quizCompleted = false;
    nextBtn.style.display = 'none';
    restartQuizBtn.style.display = 'none';
    optionsEl.style.display = 'grid';
    loadQuestion();
}

function loadQuestion() {
    optionsEl.innerHTML = '';
    nextBtn.style.display = 'none';
    const currentQ = quizData[currentQuestionIndex];
    questionEl.innerText = `Câu ${currentQuestionIndex + 1}: ${currentQ.q}`;
    countEl.innerText = currentQuestionIndex + 1;
    scoreEl.innerText = score;

    currentQ.a.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('option-btn');
        button.onclick = () => checkAnswer(index, button);
        optionsEl.appendChild(button);
    });
}

function checkAnswer(selectedIndex, selectedBtn) {
    if (quizCompleted) return;
    const correctIndex = quizData[currentQuestionIndex].c;
    const allButtons = optionsEl.querySelectorAll('.option-btn');

    // Vô hiệu hóa tất cả các nút để ko bấm lại
    allButtons.forEach(btn => btn.disabled = true);

    if (selectedIndex === correctIndex) {
        score++;
        selectedBtn.classList.add('correct');
    } else {
        selectedBtn.classList.add('wrong');
        allButtons[correctIndex].classList.add('correct'); // Hiển thị câu đúng
    }

    scoreEl.innerText = score;
    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        nextBtn.style.display = 'block';
    } else {
        endQuiz();
    }
}

function endQuiz() {
    quizCompleted = true;
    questionEl.innerText = `Hoàn thành! Bạn đạt ${score}/${quizData.length} điểm.`;
    optionsEl.style.display = 'none';
    restartQuizBtn.style.display = 'block';
}


// =========================================
// === GAME 2: PHÂN LOẠI RÁC THẦN TỐC ===
// =========================================
const trashItems = [
    { n: "Vỏ chuối 🍌", t: "organic" },
    { n: "Báo cũ 📰", t: "organic" },
    { n: "Chai nhựa 🍼", t: "inorganic" },
    { n: "Túi nilon 🛍️", t: "inorganic" },
    { n: "Cơm thừa 🍚", t: "organic" },
    { n: "Vỏ lon 🥤", t: "inorganic" },
    { n: "Lá cây 🍂", t: "organic" },
    { n: "Pin cũ 🔋", t: "inorganic" },
    { n: "Bã trà 🍵", t: "organic" },
    { n: "Mảnh gương 🪞", t: "inorganic" }
];

let currentTrashIndex = 0;
let sortCorrect = 0;
let sortWrong = 0;
const totalTrash = trashItems.length;

const trashItemEl = document.getElementById('trash-item');
const progressSortEl = document.getElementById('sort-progress');
const wrongSortEl = document.getElementById('sort-wrong');
const restartSortBtn = document.getElementById('restart-sort');

function initSort() {
    currentTrashIndex = 0;
    sortCorrect = 0;
    sortWrong = 0;
    progressSortEl.innerText = sortCorrect;
    wrongSortEl.innerText = sortWrong;
    restartSortBtn.style.display = 'none';
    loadTrash();
}

function loadTrash() {
    if (currentTrashIndex < totalTrash) {
        trashItemEl.innerText = trashItems[currentTrashIndex].n;
        trashItemEl.style.display = 'block';
    } else {
        endSort();
    }
}

function allowDrop(ev) {
    ev.preventDefault();
    ev.target.closest('.bin').classList.add('hover');
}

function drag(ev) {
    ev.dataTransfer.setData("text", trashItems[currentTrashIndex].t);
}

// Hàm xử lý khi thả rác
function drop(ev, binType) {
    ev.preventDefault();
    const draggedTrashType = ev.dataTransfer.getData("text");
    const binEl = ev.target.closest('.bin');
    binEl.classList.remove('hover');

    if (draggedTrashType === binType) {
        sortCorrect++;
        trashItemEl.style.transform = 'scale(0) rotate(360deg)';
        setTimeout(() => {
            currentTrashIndex++;
            loadTrash();
            trashItemEl.style.transform = 'scale(1)';
        }, 300);
    } else {
        sortWrong++;
        trashItemEl.style.transform = 'translateX(20px)';
        setTimeout(() => trashItemEl.style.transform = 'translateX(0)', 100);
        setTimeout(() => trashItemEl.style.transform = 'translateX(-20px)', 200);
        setTimeout(() => trashItemEl.style.transform = 'translateX(0)', 300);
    }
    progressSortEl.innerText = sortCorrect;
    wrongSortEl.innerText = sortWrong;
}

function endSort() {
    trashItemEl.style.display = 'none';
    restartSortBtn.style.display = 'block';
    if (sortWrong === 0) {
        trashItemEl.style.display = 'block';
        trashItemEl.innerText = "🌟 Tuyệt vời! Bạn là chuyên gia phân loại rác! 🌟";
    } else {
        trashItemEl.style.display = 'block';
        trashItemEl.innerText = "Cố gắng lên nhé! Đã phân loại xong.";
    }
}


// =========================================
// === GAME 3: TRÍ NHỚ SIÊU PHÀM ===
// =========================================
const memoryCards = ['🌳', '🌳', '🌊', '🌊', '🌬️', '🌬️', '🐋', '🐋', '⚡', '⚡', '🚮', '🚮', '🧴', '🧴', '🚭', '🚭'];
let flippedCards = [];
let matchedPairs = 0;
let moves = 0;
let isBoardLocked = false;

const boardEl = document.getElementById('memory-board');
const pairsEl = document.getElementById('mem-pairs');
const movesEl = document.getElementById('mem-moves');
const restartMemBtn = document.getElementById('restart-mem');

// Shuffle thẻ bài
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function initMemory() {
    boardEl.innerHTML = '';
    flippedCards = [];
    matchedPairs = 0;
    moves = 0;
    pairsEl.innerText = matchedPairs;
    movesEl.innerText = moves;
    restartMemBtn.style.display = 'none';
    isBoardLocked = false;
    
    const shuffledCards = shuffle([...memoryCards]); // Nhân đôi mảng thẻ
    shuffledCards.forEach(card => createCard(card));
}

function createCard(icon) {
    const cardEl = document.createElement('div');
    cardEl.classList.add('memory-card');
    cardEl.setAttribute('data-icon', icon);
    
    // Mặt sau thẻ (phía trên)
    const backEl = document.createElement('div');
    backEl.classList.add('back');
    backEl.innerText = '❓';
    
    // Mặt trước thẻ (hình môi trường)
    const frontEl = document.createElement('div');
    frontEl.classList.add('front');
    frontEl.innerText = icon;
    
    cardEl.appendChild(backEl);
    cardEl.appendChild(frontEl);
    
    cardEl.onclick = () => flipCard(cardEl);
    boardEl.appendChild(cardEl);
}

function flipCard(card) {
    if (isBoardLocked || card === flippedCards[0] || card.classList.contains('matched')) return;
    
    card.classList.add('flip');
    flippedCards.push(card);
    
    if (flippedCards.length === 2) {
        moves++;
        movesEl.innerText = moves;
        checkMatch();
    }
}

function checkMatch() {
    const icon1 = flippedCards[0].getAttribute('data-icon');
    const icon2 = flippedCards[1].getAttribute('data-icon');
    
    if (icon1 === icon2) {
        matchedPairs++;
        pairsEl.innerText = matchedPairs;
        flippedCards[0].classList.add('matched');
        flippedCards[1].classList.add('matched');
        flippedCards = [];
        if (matchedPairs === memoryCards.length / 2) endMemory();
    } else {
        isBoardLocked = true;
        setTimeout(() => {
            flippedCards[0].classList.remove('flip');
            flippedCards[1].classList.remove('flip');
            flippedCards = [];
            isBoardLocked = false;
        }, 1000);
    }
}

function endMemory() {
    restartMemBtn.style.display = 'inline-block';
}
