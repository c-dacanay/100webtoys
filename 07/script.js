let sketchbook = document.getElementById("sketchbook");
let paper = document.getElementById("paper");
let imgsize = 100;
let imgSrc = ["src/s0.svg", 'src/s1.svg', 'src/s2.svg', 'src/s3.svg', 'src/s4.svg']
let currentStamp = 0;

window.addEventListener("load", init);

function init() {
    let buttons = document.querySelectorAll("button");
    buttons.forEach(e => {
        e.addEventListener("click", changeStamp)
    })

  document.onclick = stamp;
}

function stamp(e) {
    let x = e.clientX;
    let y = e.clientY;
    // check if stamp is on paper
    //this doesn't work if your screen starts smaller and you expand... it's fine
    if (y < paper.scrollHeight && x < paper.scrollWidth) {
        //create a new image for each stamp
        let stamp = new Image(imgsize, imgsize);
        stamp.src = imgSrc[currentStamp];
        stamp.classList = "stamp"
        // center the stamp on the mouse
        stamp.style.left = (x - imgsize/1.7) + 'px';
        stamp.style.top = (y - imgsize/1.70) + 'px';
        paper.appendChild(stamp)
        console.log(x, y)
    } else {
        console.log("too far")
    }

}

function changeStamp() {
    //this is sus but it works.
    currentStamp = this.title;
}