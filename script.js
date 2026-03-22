// Cập nhật Progress Bar theo cuộn trang
window.onscroll = function() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
};

// Logic Game ECO-ADMIN
let stats = {
    budget: 1000,
    eco: 20,
    health: 50
};

function handleGame(choice) {
    const title = document.getElementById('event-title');
    const desc = document.getElementById('event-desc');

    if (choice === 1) {
        stats.budget -= 300; stats.eco += 30; stats.health += 10;
        title.innerText = "KẾT QUẢ: Thành công rực rỡ!";
        desc.innerText = "Nhà máy điện rác đã đi vào hoạt động, thành phố sạch đẹp hơn hẳn.";
    } else if (choice === 2) {
        stats.budget -= 50; stats.eco += 5;
        title.innerText = "KẾT QUẢ: Giải pháp tạm thời.";
        desc.innerText = "Rác đã được dọn nhưng hệ thống xử lý gốc rễ vẫn chưa có.";
    } else {
        stats.budget += 200; stats.eco -= 20; stats.health -= 20;
        title.innerText = "HẬU QUẢ: Khủng hoảng y tế!";
        desc.innerText = "Tiền nhiều hơn nhưng dịch bệnh từ bãi rác khiến dân cư khốn đốn.";
    }

    // Cập nhật hiển thị
    document.getElementById('budget').innerText = stats.budget;
    document.getElementById('eco').innerText = stats.eco;
    document.getElementById('health').innerText = stats.health;

    // Kiểm tra điều kiện thua/thắng
    if(stats.eco <= 0) alert("Môi trường sụp đổ! Bạn đã thất bại.");
    if(stats.budget <= 0) alert("Thành phố phá sản!");
}
