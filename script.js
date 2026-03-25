// Chuyển Tab Game
function openGame(ev, id) {
    document.querySelectorAll('.game-pane').forEach(p => p.classList.add('hidden'));
    document.querySelectorAll('.tab-link').forEach(t => t.classList.remove('active'));
    document.getElementById(id).classList.remove('hidden');
    ev.currentTarget.classList.add('active');
    if(id === 'quiz-area') startQuiz();
    if(id === 'memory-area') startMemory();
}

// Quiz Logic
const quizItems = [
    {q: "Rác nhựa phân hủy trong bao lâu?", a: ["10 năm", "100-500 năm", "Không bao giờ", "50 năm"], c: 1},
    {q: "PM2.5 là gì?", a: ["Khí gas", "Bụi mịn", "Vi khuẩn", "Một loại nhựa"], c: 1}
];
let curQ = 0;
function startQuiz() {
    curQ = 0; showQ();
}
function showQ() {
    const q = quizItems[curQ];
    document.getElementById('q-txt').innerText = q.q;
    const opt = document.getElementById('q-options');
    opt.innerHTML = '';
    q.a.forEach((t, i) => {
        const b = document.createElement('button');
        b.innerText = t;
        b.className = 'tab-link'; 
        b.onclick = () => { if(i === q.c) alert('Đúng!'); curQ++; if(curQ < quizItems.length) showQ(); else alert('Xong!'); };
        opt.appendChild(b);
    });
}

// Drag & Drop
function allow(ev) { ev.preventDefault(); }
function drag(ev) { ev.dataTransfer.setData("text", ev.target.id); }
function drop(ev, type) {
    ev.preventDefault();
    if(type === 'recycled') alert("Chính xác! Bạn là Chiến Binh Xanh.");
    else alert("Sai rồi, chai nhựa tái chế được mà!");
}

// Khởi chạy
window.onload = () => startQuiz();
