// 1. Tạo rác ngẫu nhiên cho Game 1
const ocean = document.getElementById('ocean-canvas');
function spawnTrash() {
    const trashIcons = ['🍾', '🥡', '🛍️', '🥤'];
    const item = document.createElement('div');
    item.className = 'trash-icon';
    item.innerText = trashIcons[Math.floor(Math.random() * trashIcons.length)];
    item.style.left = Math.random() * 90 + '%';
    item.style.top = Math.random() * 80 + '%';
    
    item.onmouseover = function() {
        this.style.transform = 'scale(0)';
        setTimeout(() => this.remove(), 200);
        document.getElementById('trash-count').innerText = 
            parseInt(document.getElementById('trash-count').innerText) + 1;
    };
    ocean.appendChild(item);
}
setInterval(spawnTrash, 1500);

// 2. Drag and Drop Game 2
function allowDrop(ev) { ev.preventDefault(); }
function drag(ev) { ev.dataTransfer.setData("text", ev.target.id); }
function drop(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    const el = document.getElementById(data);
    const binType = ev.target.getAttribute('data-type');
    if(el.getAttribute('data-type') === binType) {
        ev.target.appendChild(el);
        el.style.opacity = '0.5';
    } else {
        alert("Nhầm thùng rồi!");
    }
}

// 3. Cây cam kết
function addLeaf() {
    const name = document.getElementById('pName').value;
    if(!name) return;
    const leaf = document.createElement('div');
    leaf.className = 'leaf';
    leaf.innerText = "🍃 " + name;
    document.getElementById('tree-container').appendChild(leaf);
    document.getElementById('pName').value = "";
}
