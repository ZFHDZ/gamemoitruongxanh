// 1. Progress Bar
window.onscroll = () => {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.querySelector(".scroll-watcher").style.width = scrolled + "%";
};

// 2. Game Logic "Thị trưởng Eco"
let oxy = 50;
let happiness = 50;

function handleGame(choice) {
    const eventCard = document.getElementById('current-event');
    if (choice === 'money') {
        oxy -= 20; happiness += 10;
        eventCard.innerHTML = "<h3>HỆ QUẢ!</h3><p>Tiền nhiều hơn nhưng thành phố bắt đầu ngập trong khói bụi.</p>";
    } else {
        oxy += 20; happiness -= 10;
        eventCard.innerHTML = "<h3>KẾT QUẢ!</h3><p>Rừng được giữ lại. Oxy tăng vọt nhưng kinh tế tăng trưởng chậm.</p>";
    }
    document.getElementById('oxy-lvl').innerText = oxy + "%";
    document.getElementById('hp-lvl').innerText = happiness + "%";
    
    if(oxy <= 0) alert("Thành phố diệt vong do thiếu Oxy!");
}

// 3. Cam kết
function addPledge() {
    const name = document.getElementById('userName').value;
    if(!name) return;
    const wall = document.getElementById('pledge-wall');
    const badge = document.createElement('span');
    badge.style.display = 'inline-block';
    badge.style.margin = '10px';
    badge.style.padding = '10px 20px';
    badge.style.background = '#00ff88';
    badge.style.color = '#000';
    badge.style.borderRadius = '50px';
    badge.innerText = "🍃 " + name;
    wall.appendChild(badge);
    document.getElementById('userName').value = "";
}
