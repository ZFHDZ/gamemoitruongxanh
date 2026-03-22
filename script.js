// 1. Progress Bar Update
window.onscroll = () => {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.querySelector(".reading-progress").style.width = scrolled + "%";
};

// 2. Game Multi-Stage Simulation
let stats = { budget: 1000, eco: 30, pop: 100 };

function play(choice) {
    const title = document.getElementById('event-title');
    const desc = document.getElementById('event-desc');

    if (choice === 1) {
        stats.budget -= 400; stats.eco += 40; stats.pop += 10;
        title.innerText = "KẾT QUẢ: Thành phố hồi sinh!";
        desc.innerText = "Cư dân hạnh phúc, rác thải được xử lý triệt để. Bạn có muốn tiếp tục giai đoạn 2: Năng lượng tái tạo?";
    } else if (choice === 2) {
        stats.budget -= 50; stats.eco += 5;
        title.innerText = "KẾT QUẢ: Chỉ là giải pháp tạm thời.";
        desc.innerText = "Bãi rác sẽ đầy lại sau 1 tháng. Bạn cần một chiến lược dài hạn hơn!";
    } else {
        stats.budget += 300; stats.eco -= 30; stats.pop -= 20;
        title.innerText = "HẬU QUẢ: Thành phố chìm trong khói bụi!";
        desc.innerText = "Kinh tế tăng nhưng dịch bệnh khiến dân số sụt giảm nghiêm trọng.";
    }

    // Update Stats
    document.getElementById('budget').innerText = stats.budget;
    document.getElementById('eco').innerText = stats.eco;
    document.getElementById('pop').innerText = stats.pop;

    if(stats.eco <= 0) alert("THẢM HỌA: Môi trường sụp đổ! Trò chơi kết thúc.");
}
