let panes = [
    document.getElementById("top"), 
    document.getElementById("bottom"),
    document.getElementById("left"), 
    document.getElementById("right")
]

let frameSize = [
    //top, bottom, left, right
    [50, 50, 50, 50], //frame 0
    [10, 15, 5, 65], //frame 1
    [10, 15, 65, 5], //frame 2
    [0, 0, 0, 0] //frame 7
]

let questions = document.querySelectorAll(".question")
let memory = document.getElementById("answer")

questions.forEach(q =>
    q.addEventListener("click", answer)
)

function answer() {
    //close the frame
    let next = 0;
    changeFrame(0)

    setTimeout(() => {
    if (this.id == 'first') {
        memory.innerHTML = "I felt it against my face.<br> It used to smell."
        next = 1;
    } else if (this.id == 'second'){
        memory.innerHTML = "A little. <br> Isn't that where the birds used to live?"
        next = 2;
    } else {
        memory.innerHTML = "It was hard and soft beneath my feet.<br> That was a long time ago.<br> I still remember it though."
        next = 3;
    }}, 1000)

    setTimeout(() => {
        memory.innerHTML = ""
        changeFrame(next)
    }, 5000)
}

function changeFrame(frame) {
    let f = frame;
    panes[0].style.height = frameSize[f][0] + `vh`;
    panes[1].style.height = frameSize[f][1] + `vh`;
    panes[2].style.width = frameSize[f][2] + `vw`;
    panes[3].style.width = frameSize[f][3] + `vw`;
    // console.log(f, panes[1], frameSize[f][0])
    if (f == 3) {
        setTimeout(()=> {
            questions.forEach(q => {
                q.style.display = "none"
            })
        })
    }
}