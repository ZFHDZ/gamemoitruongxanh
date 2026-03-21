body{
    margin:0;
    font-family:Arial;
    background:#e8f5e9;
    text-align:center;
}

header{
    background:#1b5e20;
    color:white;
    padding:20px;
}

.hero{
    background:url("https://images.unsplash.com/photo-1501004318641-b39e6451bec6");
    background-size:cover;
    padding:120px;
    color:white;
    font-size:24px;
}

section{
    padding:40px;
}

.dark{
    background:#2e7d32;
    color:white;
}

.grid{
    display:flex;
    justify-content:center;
    gap:20px;
    flex-wrap:wrap;
}

.card{
    background:white;
    color:black;
    width:300px;
    border-radius:15px;
    overflow:hidden;
    box-shadow:0 5px 15px rgba(0,0,0,0.2);
}

.card img{
    width:100%;
    height:200px;
    object-fit:cover;
}

.actions{
    list-style:none;
    font-size:20px;
}

button{
    padding:10px 20px;
    margin:5px;
    border:none;
    border-radius:10px;
    background:#2e7d32;
    color:white;
    cursor:pointer;
}

button:hover{
    background:#66bb6a;
    transform:scale(1.1);
}

footer{
    background:#1b5e20;
    color:white;
    padding:20px;
}
