let decor = ['✦','❉','✵','✧','❉','✺','✶','❀','✥','❁','❊','⚘']
let colors = ['#E298E4', '#2e94b0', '#7B67F3', '#B6FF8E', '#FBFF7B','#FA5F66']

let squares = document.querySelectorAll(".square");
let main = document.getElementById("main");

let dec1;
let dec2;
let dec3;

let bg1;
let bg2;
let bg3;

let ps;

window.addEventListener("load", (e) => {
    dec1 = decor[getRandom(0, decor.length -1)];
    dec2 = decor[getRandom(0, decor.length -1)];
    dec3 = decor[getRandom(0, decor.length -1)];

    bg1 = colors[getRandom(0, colors.length -1)];
    bg2 = colors[getRandom(0, colors.length -1)];
    bg3 = colors[getRandom(0, colors.length -1)];
    buildSquare();
    addClicks();
    
})

function buildSquare() {
    for (let i = 0; i < squares.length; i++) {
        if (i  %  3 == 0 || i % 3 == 1 || i % 3 == 2) {
            squares[i].style.backgroundColor = bg1;
            squares[i].innerHTML = `<p>` + dec1 + `</p>`;
            squares[i].classList.add("three")
        }
        if (i  %  2 == 0) {
            squares[i].style.backgroundColor = bg2;
            squares[i].innerHTML = `<p>` + dec2 + `</p>`;
            squares[i].classList.add("two")
        }
        if (i  %  4 == 0) {
            squares[i].style.backgroundColor = bg3;
            squares[i].innerHTML = `<p>` + dec3 + `</p>`;
            squares[i].classList.add("four")
        }
    }
    
    main.style.backgroundColor = bg1;
    main.innerHTML = `<p>` + dec1 + `</p>`;
    main.classList.add("three")
}

function addClicks() {
    squares.forEach(el => 
        el.addEventListener("click", changeDec))
}


function changeDec() {
    console.log(this.classList)
    if (this.classList.contains("four")) {
        dec3 = decor[getRandom(0, decor.length -1)];
        bg3 = colors[getRandom(0, colors.length -1)];
        buildSquare();     
    } else if (this.classList.contains("two")) {
        dec2 = decor[getRandom(0, decor.length -1)];
        bg2 = colors[getRandom(0, colors.length -1)];
        buildSquare();    
    } else {
        dec1 = decor[getRandom(0, decor.length -1)];
        bg1 = colors[getRandom(0, colors.length -1)];
        buildSquare();    
    }
}
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}