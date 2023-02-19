let ctype = document.getElementById("c-type")
let stars = ['❀', '✥', '❁', '❊', '⚘', '✦', '❉', '✵', '✧', '❉', '✺', '✶', '⎌', '☄', '⥉'];
document.addEventListener('keydown', (e) => {
    createCircle();
})

function createCircle() {
  var el = document.createElement("div");
    el.className = "type"; 
    el.innerHTML = stars[getRandom(0, stars.length-1)];
    el.style.color = randomColor();
    ctype.appendChild(el);
    setTimeout(function(){
        ctype.removeChild(el); // removes circle to prevent too many divs from being created
    }, 2000)
}

function randomColor(){ 
    return colors[getRandom(0, colors.length)]
}


function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}