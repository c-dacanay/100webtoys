let worlds = document.querySelectorAll(".world")
let portal = document.getElementById("portal")
let noise = document.getElementById("stick")
let currentworld = 0;

window.addEventListener("load", (e)=> {
    worlds[currentworld].classList.add("active")
    console.log('load')
})


portal.addEventListener("click", nextWorld)


function nextWorld() {
    worlds.forEach(world => {
        world.classList.remove("active")
    })
    if (currentworld < worlds.length -1) {
        currentworld++
    } else {
        currentworld = 0;
    }
    worlds[currentworld].classList.add("active")
}

addEventListener('mousemove', (e) => {
    let windowHeight = window.innerHeight
    let windowWidth = window.innerWidth

    let mousex = Math.abs(-1+(e.x/windowWidth) * 2)
    let mousey = Math.abs(1-(e.y/windowHeight) * 2)

    console.log(mousex, mousey)
    noise.style.opacity = .7 - (Math.max(mousex));
    // console.log(e)
});