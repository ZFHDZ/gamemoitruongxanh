// Hiệu ứng hiện dần khi cuộn chuột (Scroll Reveal)
const scrollReveal = () => {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        const revealPoint = 150;
        if (revealTop < windowHeight - revealPoint) {
            el.classList.add('active');
        }
    });
};

window.addEventListener('scroll', scrollReveal);

// Game 1 logic
function check(isCorrect) {
    const fb = document.getElementById('feedback');
    if(isCorrect) {
        fb.innerHTML = "🎉 Tuyệt vời! Bạn có kiến thức rất tốt.";
        fb.style.color = "#40916c";
    } else {
        fb.innerHTML = "❌ Đừng buồn, con số thực tế là hơn 1 triệu loài.";
        fb.style.color = "#d90429";
    }
}

// Game 2 logic (Drag & Drop)
function allow(ev) { ev.preventDefault(); }
function drag(ev) { ev.dataTransfer.setData("text", ev.target.id); }
function drop(ev) {
    ev.preventDefault();
    const id = ev.dataTransfer.getData("text");
    const item = document.getElementById(id);
    const bin = ev.target;
    
    if(bin.dataset.type === item.dataset.type) {
        bin.appendChild(item);
        item.style.margin = "0";
        item.style.fontSize = "12px";
    } else {
        alert("Phân loại nhầm rồi, hãy thử lại!");
    }
}
