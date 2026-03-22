// Progress bar
window.onscroll = () => {
    let scrolled = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    document.querySelector(".reading-progress").style.width = scrolled + "%";
}

// Game 1: Strategy
let money = 500, oxy = 50;
function play(choice) {
    if(choice === 1) { money -= 100; oxy += 20; }
    else if(choice === 2) { money += 200; oxy -= 30; }
    else { money -= 50; oxy += 10; }
    
    document.getElementById('money').innerText = money;
    document.getElementById('oxy').innerText = oxy;
    
    if(oxy <= 0) alert("Thành phố diệt vong vì ô nhiễm!");
    if(money <= 0) alert("Thành phố phá sản!");
}

// Game 2: Arcade (Hứng rác)
let basketPos = 50;
let trashPos = 0;
let trashLeft = Math.random() * 90;

document.addEventListener('keydown', (e) => {
    if(e.key === 'a' && basketPos > 0) basketPos -= 5;
    if(e.key === 'd' && basketPos < 95) basketPos += 5;
    document.getElementById('basket').style.left = basketPos + "%";
});

function gameLoop() {
    trashPos += 2;
    if(trashPos > 100) {
        trashPos = 0;
        trashLeft = Math.random() * 90;
    }
    document.getElementById('trash').style.top = trashPos + "%";
    document.getElementById('trash').style.left = trashLeft + "%";
    requestAnimationFrame(gameLoop);
}
gameLoop();
