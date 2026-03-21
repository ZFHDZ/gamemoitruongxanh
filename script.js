body {
margin:0;
font-family:sans-serif;
}

/* HERO */
.hero {
height:100vh;
background:url("https://images.unsplash.com/photo-1446776811953-b23d57bd21aa") center/cover;
position:relative;
}

.overlay {
background:rgba(0,0,0,0.5);
color:white;
height:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
}

/* LAYOUT */
.container {
padding:60px;
text-align:center;
}

.cards {
display:flex;
gap:20px;
justify-content:center;
flex-wrap:wrap;
}

.card {
width:300px;
background:white;
box-shadow:0 5px 15px rgba(0,0,0,0.2);
border-radius:10px;
overflow:hidden;
}

.card img {
width:100%;
height:180px;
object-fit:cover;
}

.dark {
background:#2c3e50;
color:white;
padding:60px;
text-align:center;
}

.green {
background:#27ae60;
color:white;
padding:60px;
text-align:center;
}

.grid2 {
display:grid;
grid-template-columns:1fr 1fr;
gap:20px;
}

/* GAME */
.game-area {
display:flex;
justify-content:center;
gap:20px;
margin-top:20px;
}

.item {
font-size:40px;
cursor:grab;
}

.bin {
padding:20px;
background:#27ae60;
color:white;
border-radius:10px;
}
