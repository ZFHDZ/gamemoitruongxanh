// 1. Hiệu ứng Glow chuột
const glow = document.querySelector('.cursor-glow');
document.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
});

// 2. Thanh tiến trình Scroll
window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.querySelector(".scroll-bar").style.width = scrolled + "%";
});

// 3. Game Logic
let state = { oxy: 50, money: 1000 };

function play(choice) {
    const scenario = document.getElementById('scenario');
    if (choice === 1) {
        if(state.money >= 300) {
            state.money -= 300;
            state.oxy += 20;
            scenario.innerText = "Robot đã dọn sạch kênh! Oxy tăng mạnh.";
        } else {
            scenario.innerText = "Bạn không đủ tiền!";
        }
    } else {
        state.money -= 50;
        state.oxy += 5;
        scenario.innerText = "Người dân bắt đầu có ý thức hơn. Chậm nhưng chắc.";
    }
    
    document.getElementById('oxy').innerText = state.oxy;
    document.getElementById('money').innerText = state.money;
    
    if(state.oxy >= 100) alert("CHÚC MỪNG! HÀNH TINH ĐÃ ĐƯỢC CỨU!");
}

// 4. Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
