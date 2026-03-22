// --- TRÒ CHƠI 1: TRẮC NGHIỆM 10 CÂU ---
const questions = [
    { q: "Rác thải nhựa mất bao lâu để phân hủy?", a: ["10-20 năm", "50 năm", "450-500 năm", "1000 năm"], c: 2 },
    { q: "Việt Nam cam kết phát thải ròng bằng 0 (Net Zero) vào năm nào?", a: ["2030", "2040", "2050", "2060"], c: 2 },
    { q: "Nguồn ô nhiễm chính gây bụi mịn PM2.5 ở đô thị là gì?", a: ["Nấu ăn", "Khói xe và xây dựng", "Điều hòa nhiệt độ", "Rác hữu cơ"], c: 1 },
    { q: "Mỗi năm Việt Nam thải ra bao nhiêu triệu tấn rác thải nhựa?", a: ["0.5 triệu", "1.8 triệu", "5 triệu", "10 triệu"], c: 1 },
    { q: "Loại túi nào giúp bảo vệ môi trường nhất?", a: ["Túi vải dùng nhiều lần", "Túi nilon đen", "Túi nilon trắng", "Túi giấy dùng 1 lần"], c: 0 },
    { q: "Ô nhiễm nguồn nước gây ra hậu quả nghiêm trọng nhất là gì?", a: ["Gây ồn", "Làng ung thư", "Hỏng thiết bị điện", "Nóng lên toàn cầu"], c: 1 },
    { q: "Hình thức xử lý rác hiện đại nhất hiện nay là gì?", a: ["Chôn lấp", "Vứt ra sông", "Đốt rác phát điện", "Ủ phân"], c: 2 },
    { q: "Ngày Môi trường Thế giới là ngày nào?", a: ["1/6", "5/6", "10/10", "25/12"], c: 1 },
    { q: "Vi nhựa được tìm thấy ở đâu?", a: ["Trong nước biển", "Trong hải sản", "Trong máu người", "Tất cả các ý trên"], c: 3 },
    { q: "Hành động nào sau đây là 'Sống Xanh'?", a: ["Dùng nhiều đồ nhựa", "Phân loại rác", "Lãng phí điện", "Vứt rác ra đường"], c: 1 }
];

let currentIdx = 0; let quizScore = 0;
function showQuiz() {
    const q = questions[currentIdx];
    document.getElementById('question').innerText = q.q;
    const optDiv = document.getElementById('options');
    optDiv.innerHTML = '';
    q.a.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.innerText = opt;
        btn.onclick = () => {
            if(i === q.c) quizScore++;
            currentIdx++;
            if(currentIdx < 10) showQuiz();
            else document.getElementById('quiz-content').innerHTML = `<h3>Kết thúc! Bạn đạt ${quizScore}/10 điểm.</h3>`;
            document.getElementById('quiz-progress').innerText = `Câu hỏi: ${currentIdx+1}/10 | Điểm: ${quizScore}`;
        };
        optDiv.appendChild(btn);
    });
}
showQuiz();

// --- TRÒ CHƠI 2: PHÂN LOẠI RÁC ---
const trashItems = [
    { n: "Vỏ chuối", t: "organic" }, { n: "Chai nước suối", t: "inorganic" },
    { n: "Lá cây khô", t: "organic" }, { n: "Vỏ lon nước ngọt", t: "inorganic" },
    { n: "Bã cà phê", t: "organic" }, { n: "Túi nilon siêu thị", t: "inorganic" },
    { n: "Xương cá", t: "organic" }, { n: "Mảnh sành vỡ", t: "inorganic" },
    { n: "Rau thừa", t: "organic" }, { n: "Hộp xốp", t: "inorganic" }
];

let trashIdx = 0;
function loadTrash() {
    if(trashIdx < 10) {
        const el = document.getElementById('trash-current');
        el.innerText = trashItems[trashIdx].n;
        el.draggable = true;
        el.ondragstart = (e) => e.dataTransfer.setData("trash", trashIdx);
    } else {
        document.getElementById('trash-current').innerText = "HOÀN THÀNH!";
    }
}

function allowDrop(e) { e.preventDefault(); }
function dropTrash(e, type) {
    e.preventDefault();
    const idx = e.dataTransfer.getData("trash");
    if(trashItems[idx].t === type) {
        trashIdx++;
        document.getElementById('sort-progress').innerText = `Tiến độ: ${trashIdx}/10`;
        loadTrash();
    } else {
        alert("Sai rồi! Hãy chọn lại.");
    }
}
loadTrash();
