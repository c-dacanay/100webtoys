// document.onclick = showCoords;

// function showCoords(event) {
//     const distanceFromTop = window.scrollY;
//     const distanceFromLeft = window.scrollX;
//     var cX = event.clientX;
//     var cY = event.clientY;

//     console.log("top", distanceFromTop + cY, "left", distanceFromLeft + cX,)

// }


let img = document.getElementById('img')

window.addEventListener("load", () => {
    window.scroll({
        top: 380,
        left: 200,
        behavior: 'smooth'
      });
    console.log('hey')
})

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

function changeFrame(top, bottom, left, right, s, t) {
    console.log(s)
    window.scroll({
        left: s,
        top: t
    })

    img.classList.add('grey')

    panes[0].style.height = top + `vh`;
    panes[1].style.height = bottom + `vh`;
    panes[2].style.width = left + `vw`;
    panes[3].style.width = right + `vw`;

    setTimeout(()=> {
        img.classList.remove('grey')
    }, 1000)

}