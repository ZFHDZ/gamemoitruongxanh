// TRÒ CHƠI 1: TRẮC NGHIỆM 10 CÂU
const questions = [
    { q: "Rác thải nhựa mất bao lâu để phân hủy?", a: ["10 năm", "50 năm", "450-500 năm", "Vĩnh viễn"], c: 2 },
    { q: "Net Zero là mục tiêu vào năm nào?", a: ["2030", "2050", "2045", "2060"], c: 1 },
    { q: "Bụi PM2.5 là gì?", a: ["Bụi to", "Bụi mịn", "Cát", "Phấn hoa"], c: 1 },
    { q: "Ống hút nào tốt nhất?", a: ["Nhựa", "Tre/Cỏ", "Sắt", "Cả b và c"], c: 3 },
    { q: "Nguyên nhân gây hiệu ứng nhà kính?", a: ["Oxy", "CO2", "Nitơ", "Argon"], c: 1 },
    { q: "Ngày môi trường thế giới?", a: ["1/1", "5/6", "10/10", "2/9"], c: 1 },
    { q: "Làng ung thư do ô nhiễm gì?", a: ["Tiếng ồn", "Nguồn nước", "Ánh sáng", "Sóng từ"], c: 1 },
    { q: "Loại rác nào tái chế được?", a: ["Lá cây", "Chai nhựa", "Thức ăn thừa", "Khăn giấy ướt"], c: 1 },
    { q: "Vi nhựa có trong đâu?", a: ["Muối biển", "Cá", "Nước uống", "Tất cả"], c: 3 },
    { q: "Hành động sống xanh?", a: ["Vứt rác bừa bãi", "Trồng cây", "Dùng túi nilon", "Phá rừng"], c: 1 }
];

let qIdx = 0; let score = 0;
function showQuiz() {
    const q = questions[qIdx];
    document.getElementById('question').innerText = q.q;
    const opts = document.getElementById('options');
    opts.innerHTML = '';
    q.a.forEach((opt, i) => {
        const b = document.createElement('button');
        b.innerText = opt;
        b.style = "display:block; width:100%; margin:5px 0; padding:10px; border:none; border-radius:5px; cursor:pointer; font-weight:bold;";
        b.onclick = () => {
            if(i === q.c) score++;
            qIdx++;
            if(qIdx < 10) showQuiz();
            else document.getElementById('quiz-content').innerHTML = `<h3>Xong! Điểm của bạn: ${score}/10</h3>`;
            document.getElementById('quiz-progress').innerText = `Câu: ${qIdx+1}/10 | Điểm: ${score}`;
        };
        opts.appendChild(b);
    });
}
showQuiz();

// TRÒ CHƠI 2: PHÂN LOẠI RÁC
const trashList = [
    { n: "Vỏ chuối", t: "organic" }, { n: "Vỏ chai nhựa", t: "inorganic" },
    { n: "Lá cây khô", t: "organic" }, { n: "Lon nước ngọt", t: "inorganic" },
    { n: "Cơm thừa", t: "organic" }, { n: "Túi nilon", t: "inorganic" },
    { n: "Bã trà", t: "organic" }, { n: "Pin cũ", t: "inorganic" },
    { n: "Xương cá", t: "organic" }, { n: "Mảnh chai vỡ", t: "inorganic" }
];
let tIdx = 0;
function loadTrash() {
    if(tIdx < 10) {
        const el = document.getElementById('trash-current');
        el.innerText = trashList[tIdx].n;
        el.draggable = true;
        el.ondragstart = (e) => e.dataTransfer.setData("trash", tIdx);
    } else {
        document.getElementById('trash-current').innerText = "HOÀN THÀNH!";
    }
}
function allowDrop(e) { e.preventDefault(); }
function dropTrash(e, type) {
    e.preventDefault();
    const idx = e.dataTransfer.getData("trash");
    if(trashList[idx].t === type) {
        tIdx++;
        document.getElementById('sort-progress').innerText = `Tiến độ: ${tIdx}/10`;
        loadTrash();
    } else { alert("Sai rồi!"); }
}
loadTrash();
