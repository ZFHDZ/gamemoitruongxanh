// Quiz logic
function check(isCorrect) {
    const res = document.getElementById('result');
    if(isCorrect) {
        res.innerHTML = "✅ Chính xác! Việt Nam là một trong những nước xả rác nhựa ra biển nhiều nhất thế giới.";
        res.style.color = "green";
    } else {
        res.innerHTML = "❌ Chưa đúng, con số thực tế là Thứ 4.";
        res.style.color = "red";
    }
}

// Drag & Drop
function allow(ev) { ev.preventDefault(); }
function drag(ev) { ev.dataTransfer.setData("text", ev.target.id); }
function drop(ev) {
    ev.preventDefault();
    const id = ev.dataTransfer.getData("text");
    const el = document.getElementById(id);
    if(ev.target.dataset.type === el.dataset.type) {
        ev.target.appendChild(el);
        el.style.fontSize = "12px";
    } else {
        alert("Nhầm thùng rồi!");
    }
}
