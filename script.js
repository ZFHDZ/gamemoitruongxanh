// 1. Cập nhật thanh tiến trình cuộn
window.onscroll = function() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.querySelector(".reading-progress").style.width = scrolled + "%";
};

// 2. Quiz Logic
function quiz(val) {
    const res = document.getElementById('quiz-res');
    if(val === 450) {
        res.innerHTML = "🎯 CHÍNH XÁC! Một con số khủng khiếp đối với một vật dụng nhỏ bé.";
        res.style.color = "#10b981";
    } else {
        res.innerHTML = "❌ SAI RỒI! Hãy nhìn lại con số 450 năm.";
        res.style.color = "#ef4444";
    }
}

// 3. Drag & Drop Phân loại rác
function allow(ev) { ev.preventDefault(); }
function drag(ev) { ev.dataTransfer.setData("text", ev.target.id); }
function drop(ev) {
    ev.preventDefault();
    const id = ev.dataTransfer.getData("text");
    const el = document.getElementById(id);
    const targetType = ev.target.getAttribute('data-type');
    if(el.getAttribute('data-type') === targetType) {
        ev.target.appendChild(el);
        el.style.fontSize = "12px";
    } else {
        alert("Phân loại sai sẽ gây khó khăn cho việc tái chế!");
    }
}
