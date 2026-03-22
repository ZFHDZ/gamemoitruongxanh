// 1. Progress Bar
window.onscroll = function() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("pb").style.width = scrolled + "%";
};

// 2. Game Choice
function ecoChoice(type) {
    const feedback = document.getElementById('game-feedback');
    if(type === 'coal') {
        feedback.innerHTML = "<h3 style='color: #ff4444'>❌ SAI LẦM! Ngân sách tăng nhưng chỉ số ô nhiễm khiến dân cư rời đi.</h3>";
    } else {
        feedback.innerHTML = "<h3 style='color: #5efc82'>✅ TUYỆT VỜI! Đây là đầu tư cho tương lai 50 năm tới.</h3>";
    }
}

// 3. Hiệu ứng hiện dần khi cuộn trang
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.chapter').forEach(c => observer.observe(c));
