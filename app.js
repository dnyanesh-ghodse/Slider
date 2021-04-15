const img = document.querySelector(".img");
const next = document.getElementById("next");
const prev = document.getElementById("prev");


var images = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFuZHNjYXBlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFuZHNjYXBlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60",
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bGFuZHNjYXBlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60"
]


var i = 2;
img.style.backgroundImage = `url(${images[i]})`;

console.log(img.src);
function prv(){
    i--;
    if(i <= 0){
        i = images.length -1;
    }
    img.style.backgroundImage = `url(${images[i]})`;
}

prev.addEventListener("click",prv);

function nxt(){
    i++;
    if(i >= images.length - 1){
         i = 0;
    }
    img.style.backgroundImage = `url(${images[i]})`;
}

next.addEventListener("click",nxt);