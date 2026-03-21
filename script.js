// ===== QUIZ =====
let questions = [
    {
        q: "Chất gây ô nhiễm nguy hiểm nhất?",
        options: ["O2", "CO2", "PM2.5", "N2"],
        answer: 2
    },
    {
        q: "Nhựa phân hủy bao lâu?",
        options: ["50 năm", "100 năm", "300-500 năm", "1000 năm"],
        answer: 2
    },
    {
        q: "Nguồn ô nhiễm nước lớn nhất?",
        options: ["Mưa", "Công nghiệp", "Gió", "Ánh sáng"],
        answer: 1
    },
    {
        q: "Hiệu ứng nhà kính gây?",
        options: ["Lạnh", "Nóng lên", "Mưa", "Gió"],
        answer: 1
    },
    {
        q: "Năng lượng sạch?",
        options: ["Than", "Dầu", "Mặt trời", "Khí"],
        answer: 2
    }
];

let quizDiv = document.getElementById("quiz");

questions.forEach((q, i) => {
    let html = `<p>${q.q}</p>`;
    q.options.forEach((opt, j) => {
        html += `<input type="radio" name="q${i}" value="${j}">${opt}<br>`;
    });
    quizDiv.innerHTML += html;
});

function submitQuiz() {
    let score = 0;

    questions.forEach((q, i) => {
        let ans = document.querySelector(`input[name="q${i}"]:checked`);
        if (ans && parseInt(ans.value) === q.answer) {
            score++;
        }
    });

    document.getElementById("result").innerText =
        "Bạn đúng " + score + "/" + questions.length;
}

// ===== GAME =====
let gameScore = 0;

function playGame(value) {
    gameScore += value;

    if (gameScore >= 3) {
        document.getElementById("gameResult").innerText =
            "🌱 Trái Đất đang được cứu!";
    } else {
        document.getElementById("gameResult").innerText =
            "💀 Trái Đất đang nguy hiểm!";
    }
}
