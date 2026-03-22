// Hiệu ứng hiện dần khi cuộn
const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('active'); });
}, {threshold: 0.1});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Game 1: Quiz
function ans(isCorrect, btn) {
    if(isCorrect) {
        btn.style.background = "#00ff66";
        alert("CHÍNH XÁC! 60 mét sẽ nhấn chìm hầu hết các thành phố ven biển.");
    } else {
        btn.style.background = "#ff4444";
    }
}

// Game 2: City Builder
let oxy = 20; let points = 0;
function build(type) {
    const canvas = document.getElementById('canvas');
    if(type === 'tree') {
        oxy += 5; canvas.innerHTML += "🌳";
        document.getElementById('ox').innerText = oxy + "%";
    } else {
        points += 10; canvas.innerHTML += "☀️";
        document.getElementById('pts').innerText = points;
    }
    if(oxy > 50) canvas.style.background = "#d8f3dc";
}

// Game 3: Drag & Drop
function allow(ev) { ev.preventDefault(); }
function drag(ev) { ev.dataTransfer.setData("text", ev.target.id); }
function drop(ev) {
    ev.preventDefault();
    const id = ev.dataTransfer.getData("text");
    const item = document.getElementById(id);
    if(ev.target.dataset.type === item.dataset.type) {
        ev.target.appendChild(item);
        item.style.scale = "0.5";
    } else { alert("Nhầm rồi!"); }
}

// Cam kết
function makePledge() {
    const name = document.getElementById('pName').value;
    if(!name) return;
    const tag = document.createElement('span');
    tag.innerHTML = ` 🌱 ${name} |`;
    tag.style.color = "#00ff66";
    document.getElementById('pTags').appendChild(tag);
    document.getElementById('pName').value = "";
}
