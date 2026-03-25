// --- TRÒ 1: TRẮC NGHIỆM ---
const quizData = [
    { q: "Rác thải nhựa mất bao lâu để phân hủy?", a: ["10 năm", "100 năm", "500 năm"], c: 2 },
    { q: "Net Zero 2050 là mục tiêu về?", a: ["Rác thải", "Phát thải khí nhà kính", "Trồng rừng"], c: 1 }
];
let curQ = 0;
function loadQuiz() {
    const q = quizData[curQ];
    document.getElementById('question').innerText = q.q;
    const optBox = document.getElementById('options');
    optBox.innerHTML = '';
    q.a.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.innerText = opt;
        btn.onclick = () => {
            if(i === q.c) alert("Chính xác!");
            curQ = (curQ + 1) % quizData.length;
            loadQuiz();
        };
        optBox.appendChild(btn);
    });
}

// --- TRÒ 2: PHÂN LOẠI ---
function drag(ev) { ev.dataTransfer.setData("text", ev.target.innerText); }
function allow(ev) { ev.preventDefault(); }
function drop(ev, type) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    if((data === "Vỏ Chuối" && type === 'organic') || (data === "Chai Nhựa" && type === 'inorganic')) {
        alert("Đúng rồi!");
        document.getElementById('trash-item').innerText = "Chai Nhựa";
    } else {
        alert("Thử lại nhé!");
    }
}

// --- TRÒ 3: TRÍ NHỚ ---
const icons = ['🌿','🌿','🌍','🌍','♻️','♻️','🔋','🔋'];
function initMemory() {
    const board = document.getElementById('memory-board');
    icons.sort(() => Math.random() - 0.5).forEach(icon => {
        const card = document.createElement('div');
        card.className = 'm-card';
        card.innerText = icon;
        card.onclick = () => card.classList.toggle('flipped');
        board.appendChild(card);
    });
}

window.onload = () => { loadQuiz(); initMemory(); };
