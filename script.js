// Hiệu ứng Reveal khi cuộn trang
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Game logic đơn giản nhưng feedback xịn
function check(isCorrect) {
    const fb = document.getElementById('feedback');
    if(isCorrect) {
        fb.innerHTML = "✨ TUYỆT VỜI! Bạn đã nắm rõ con số.";
        fb.className = "correct-pulse";
    } else {
        fb.innerHTML = "❌ THỬ LẠI! Con số thực tế đáng sợ hơn.";
    }
}

// Drag & Drop
function allow(ev) { ev.preventDefault(); }
function drag(ev) { ev.dataTransfer.setData("text", ev.target.id); }
function drop(ev) {
    ev.preventDefault();
    const id = ev.dataTransfer.getData("text");
    const el = document.getElementById(id);
    const targetBin = ev.target.closest('.bin');
    
    if(targetBin.dataset.type === el.dataset.type) {
        targetBin.appendChild(el);
        el.style.display = "none";
        alert("XỬ LÝ THÀNH CÔNG!");
    }
}

// Xử lý Loader
window.addEventListener('load', () => {
    document.querySelector('.loader').style.display = 'none';
});
