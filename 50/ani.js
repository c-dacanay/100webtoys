let cani = document.getElementById("c-ani")
let tiles = document.querySelectorAll('.tile');

cani.addEventListener("click", () => {
	let src = getRandom(0, 40)
    tiles.forEach(tile => {
        tile.style.background = `url(../img/${src}.JPG)`;
    })
    document.body.background = `url(../img/${src}.JPG)`;
})