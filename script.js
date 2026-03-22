const questions = [
    { q: "Rác thải nhựa mất bao lâu để phân hủy?", a: ["10 năm", "100 năm", "450-500 năm", "Không bao giờ"], c: 2 },
    { q: "Mục tiêu Net Zero 2050 là gì?", a: ["Phát thải bằng 0", "Không dùng xe máy", "Tắt điện cả ngày", "Trồng 1 tỷ cây"], c: 0 },
    { q: "Bụi mịn PM2.5 gây hại nhất cho cơ quan nào?", a: ["Tim", "Phổi", "Gan", "Não"], c: 1 },
    { q: "Nhóm tình nguyện nào dọn rác ở kênh rạch TP.HCM?", a: ["Hà Nội Xanh", "Sài Gòn Xanh", "Biệt Đội Xanh", "Thanh Niên Xanh"], c: 1 },
    { q: "Khí thải chính gây hiệu ứng nhà kính?", a: ["Oxy", "CO2", "Nitơ", "Argon"], c: 1 },
    { q: "Mỗi năm Việt Nam thải ra bao nhiêu rác nhựa?", a: ["1.8 triệu tấn", "500 nghìn tấn", "10 triệu tấn", "100 nghìn tấn"], c: 0 },
    { q: "Loại rác nào có thể làm phân bón?", a: ["Hộp xốp", "Vỏ trái cây", "Pin", "Chai thủy tinh"], c: 1 },
    { q: "Ngày Môi trường Thế giới là ngày nào?", a: ["1/6", "5/6", "22/4", "10/10"], c: 1 },
    { q: "Vi nhựa được tìm thấy ở đâu?", a: ["Muối biển", "Hải sản", "Máu người", "Tất cả các ý trên"], c: 3 },
    { q: "Năng lượng nào là năng lượng tái tạo?", a: ["Than đá", "Dầu mỏ", "Điện gió", "Khí đốt"], c: 2 }
];

let currentIdx = 0; let score = 0;
function showQuiz() {
    const q = questions[currentIdx];
    document.getElementById('question').innerText = q.q;
    const opts = document.getElementById('options');
    opts.innerHTML = '';
    q.a.forEach((opt, i) => {
        const b = document.createElement('button');
        b.innerText = opt;
        b.onclick = () => {
            if(i === q.c) score++;
            currentIdx++;
            if(currentIdx < 10) showQuiz();
            else document.getElementById('quiz-area').innerHTML = `<h3>Xong! Điểm của bạn: ${score}/10</h3>`;
            document.getElementById('quiz-info').innerText = `Câu: ${currentIdx+1}/10 | Điểm: ${score}`;
        };
        opts.appendChild(b);
    });
}
showQuiz();

const trashList = [
    { n: "Vỏ cam/quýt", t: "organic" }, { n: "Chai nhựa nước suối", t: "inorganic" },
    { n: "Lá cây quét sân", t: "organic" }, { n: "Vỏ lon bia", t: "inorganic" },
    { n: "Cơm nguội thừa", t: "organic" }, { n: "Túi nilon siêu thị", t: "inorganic" },
    { n: "Xương gà", t: "organic" }, { n: "Pin đồng hồ cũ", t: "inorganic" },
    { n: "Rau củ bị héo", t: "organic" }, { n: "Mảnh sành vỡ", t: "inorganic" }
];
let tIdx = 0;
function loadTrash() {
    if(tIdx < 10) {
        const el = document.getElementById('trash-item');
        el.innerText = trashList[tIdx].n;
        el.draggable = true;
        el.ondragstart = (e) => e.dataTransfer.setData("trash", tIdx);
    } else { document.getElementById('trash-item').innerText = "BẠN ĐÃ PHÂN LOẠI XONG!"; }
}
function allow(e) { e.preventDefault(); }
function drop(e, type) {
    const idx = e.dataTransfer.getData("trash");
    if(trashList[idx].t === type) {
        tIdx++;
        document.getElementById('sort-progress').innerText = `Tiến độ: ${tIdx}/10`;
        loadTrash();
    } else { alert("Sai rồi! Rác này không thuộc loại thùng này."); }
}
loadTrash();
