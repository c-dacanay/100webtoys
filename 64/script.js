let door = document.getElementById("door")
let dindex = 0;
// let doors = 6; //numbers of doors

door.addEventListener("click", changeDoor)

function changeDoor() {
    door.style.opacity = 0;
    dindex++
    if (dindex > 5) {
        console.log('reset')
        dindex = 0;
    }

    document.getElementById(dindex).scrollIntoView({behavior:"smooth"});
    setTimeout(() => {
        door.src = `./src/d` + dindex + `.svg`
        door.style.opacity = 1;
    }, 1000)


}