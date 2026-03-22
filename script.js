// 1. Scroll Reveal
const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('active'); });
});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// 2. City Builder Game
let points = 100;
function build(type) {
    const map = document.getElementById('city-map');
    const budget = document.getElementById('budget');
    if(type === 'factory' && points >= 50) {
        points -= 50; map.innerHTML += " 🏭";
    } else if(type === 'park' && points >= 30) {
        points -= 30; map.innerHTML += " 🌳";
    } else if(type === 'solar' && points >= 40) {
        points -= 40; map.innerHTML += " ☀️";
    } else {
        alert("Không đủ điểm Eco!");
    }
    budget.innerText = points;
}

// 3. Pledge System
function addPledge() {
    const name = document.getElementById('userName').value;
    if(!name) return;
    const list = document.getElementById('pledge-list');
    const tag = document.createElement('span');
    tag.className = 'pledge-tag';
    tag.innerText = "🌱 " + name + " cam kết sống xanh";
    list.appendChild(tag);
    document.getElementById('userName').value = "";
}

// 4. Drag & Drop (Phân loại rác - Giữ nguyên logic cũ nhưng gọn hơn)
function allow(ev) { ev.preventDefault(); }
function drag(ev) { ev.dataTransfer.setData("text", ev.target.id); }
function drop(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    const el = document.getElementById(data);
    if(ev.target.dataset.type === el.dataset.type) {
        ev.target.appendChild(el);
        el.style.display = "none";
    } else { alert("Sai thùng rác rồi!"); }
}
