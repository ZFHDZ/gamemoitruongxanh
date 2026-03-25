// --- TRÒ 1: TRẮC NGHIỆM ---
const questions = [
    { q: "Rác thải nhựa mất bao lâu để phân hủy?", a: ["10 năm", "100 năm", "450-500 năm", "Không bao giờ"], c: 2 },
    { q: "Khí thải gây hiệu ứng nhà kính mạnh nhất?", a: ["Oxy", "CO2", "Nitơ", "Argon"], c: 1 },
    { q: "Mục tiêu Net Zero của Việt Nam vào năm nào?", a: ["2030", "2045", "2050", "2060"], c: 2 }
];
let qIdx = 0, score = 0;
function showQuiz() {
    if(qIdx >= questions.length) {
        document.getElementById('quiz-area').innerHTML = `<h3>Hoàn thành! Điểm: ${score}/${questions.length}</h3>`;
        return;
    }
    const q = questions[qIdx];
    document.getElementById('question').innerText = q.q;
    document.getElementById('q-count').innerText = qIdx + 1;
    const opts = document.getElementById('options');
    opts.innerHTML = '';
    q.a.forEach((opt, i) => {
        const b = document.createElement('button');
        b.innerText = opt;
        b.onclick = () => { if(i === q.c) score++; qIdx++; document.getElementById('q-score').innerText = score; showQuiz(); };
        opts.appendChild(b);
    });
}

// --- TRÒ 2: PHÂN LOẠI RÁC ---
const trashList = [
    { n: "Vỏ cam", t: "organic" }, { n: "Chai nhựa", t: "inorganic" },
    { n: "Lá cây", t: "organic" }, { n: "Túi nilon", t: "inorganic" }
];
let tIdx = 0;
function loadTrash() {
    const el = document.getElementById('trash-item');
    if(tIdx < trashList.length) { el.innerText = trashList[tIdx].n; }
    else { el.innerText = "XONG!"; el.draggable = false; }
}
function allow(e) { e.preventDefault(); }
function drop(e, type) {
    if(trashList[tIdx].t === type) { 
        tIdx++; 
        document.getElementById('sort-progress').innerText = `Tiến độ: ${tIdx}/${trashList.length}`; 
        loadTrash(); 
    } else { alert("Nhầm thùng rồi bạn ơi!"); }
}

// --- TRÒ 3: TRÍ NHỚ ---
const icons = ['🌿','🌿','♻️','♻️','🌍','🌍','☀️','☀️','💧','💧','🍃','🍃','🔋','🔋','🚲','🚲'];
let flipped = [];
function initMemory() {
    const board = document.getElementById('memory-board'); board.innerHTML = ''; flipped = [];
    icons.sort(() => Math.random() - 0.5).forEach(icon => {
        const card = document.createElement('div'); card.className = 'm-card'; card.dataset.v = icon;
        card.onclick = () => {
            if(flipped.length < 2 && !card.innerText) {
                card.innerText = icon; card.classList.add('flipped'); flipped.push(card);
                if(flipped.length === 2) {
                    setTimeout(() => {
                        if(flipped[0].dataset.v !== flipped[1].dataset.v) { flipped.forEach(c => {c.innerText=''; c.classList.remove('flipped');}); }
                        flipped = [];
                    }, 600);
                }
            }
        };
        board.appendChild(card);
    });
}

window.onload = () => { showQuiz(); loadTrash(); initMemory(); };
