const questions = [
    { q: "Rác thải nhựa mất bao lâu để phân hủy?", a: ["10 năm", "50 năm", "500 năm", "Vĩnh viễn"], c: 2 },
    { q: "Net Zero là vào năm nào?", a: ["2030", "2050", "2045", "2060"], c: 1 },
    { q: "Bụi PM2.5 là gì?", a: ["Bụi to", "Bụi mịn", "Cát", "Lông thú"], c: 1 },
    { q: "Cái gì gây hiệu ứng nhà kính?", a: ["Oxy", "CO2", "Nitơ", "Vàng"], c: 1 },
    { q: "Sài Gòn Xanh là nhóm gì?", a: ["Ca hát", "Tình nguyện dọn rác", "Nấu ăn", "Đua xe"], c: 1 },
    { q: "Việt Nam thải ra bao nhiêu rác nhựa/năm?", a: ["1.8 triệu tấn", "100 tấn", "1 tỷ tấn", "10 tấn"], c: 0 },
    { q: "Ngày môi trường?", a: ["1/1", "5/6", "10/10", "2/9"], c: 1 },
    { q: "Hành động nào đúng?", a: ["Xả rác", "Phân loại rác", "Chặt cây", "Đốt nhựa"], c: 1 },
    { q: "Nguồn nước nhiễm độc gây ra?", a: ["Cận thị", "Ung thư", "Hói đầu", "Đau chân"], c: 1 },
    { q: "Chúng ta cần làm gì?", a: ["Kệ nó", "Bảo vệ cây xanh", "Dùng thêm nhựa", "Xả rác thêm"], c: 1 }
];

let current = 0; let score = 0;
function showQuiz() {
    const q = questions[current];
    document.getElementById('question').innerText = q.q;
    const opts = document.getElementById('options');
    opts.innerHTML = '';
    q.a.forEach((opt, i) => {
        const b = document.createElement('button');
        b.innerText = opt;
        b.onclick = () => {
            if(i === q.c) score++;
            current++;
            if(current < 10) showQuiz();
            else document.getElementById('quiz-area').innerHTML = `Xong! Bạn đạt ${score}/10`;
            document.getElementById('quiz-info').innerText = `Câu: ${current+1}/10 | Điểm: ${score}`;
        };
        opts.appendChild(b);
    });
}
showQuiz();

const trashList = [
    { n: "Vỏ chuối", t: "organic" }, { n: "Chai nhựa", t: "inorganic" },
    { n: "Lá khô", t: "organic" }, { n: "Lon nhôm", t: "inorganic" },
    { n: "Bã trà", t: "organic" }, { n: "Túi nilon", t: "inorganic" },
    { n: "Cơm thừa", t: "organic" }, { n: "Pin", t: "inorganic" },
    { n: "Xương gà", t: "organic" }, { n: "Hộp xốp", t: "inorganic" }
];
let tIdx = 0;
function loadTrash() {
    if(tIdx < 10) {
        const el = document.getElementById('trash-item');
        el.innerText = trashList[tIdx].n;
        el.draggable = true;
        el.ondragstart = (e) => e.dataTransfer.setData("t", tIdx);
    } else { document.getElementById('trash-item').innerText = "XONG!"; }
}
function allow(e) { e.preventDefault(); }
function drop(e, type) {
    const idx = e.dataTransfer.getData("t");
    if(trashList[idx].t === type) { tIdx++; loadTrash(); }
    else { alert("Sai rồi!"); }
}
loadTrash();
