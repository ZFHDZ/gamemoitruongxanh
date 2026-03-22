// Game 1: Quiz
function checkQuiz(isCorrect) {
    const feedback = document.getElementById('q-feedback');
    if(isCorrect) {
        feedback.innerHTML = "✅ Chính xác! Đó là lý do chúng ta nên dùng túi vải.";
        feedback.style.color = "green";
    } else {
        feedback.innerHTML = "❌ Chưa đúng rồi, hãy thử lại nhé!";
        feedback.style.color = "red";
    }
}

// Game 2: Drag & Drop
function allowDrop(ev) { ev.preventDefault(); }

function drag(ev) { ev.dataTransfer.setData("text", ev.target.id); }

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var dragEl = document.getElementById(data);
    var targetType = ev.target.getAttribute('data-type');
    var itemType = dragEl.getAttribute('data-type');

    if (targetType === itemType) {
        ev.target.appendChild(dragEl);
        dragEl.style.cursor = "default";
    } else {
        alert("Nhầm thùng rồi bạn ơi!");
    }
}
