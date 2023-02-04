document.onclick = showCoords;

function showCoords(event) {
    const distanceFromTop = window.scrollY;
    const distanceFromLeft = window.scrollX;
    var cX = event.clientX;
    var sX = event.screenX;
    var cY = event.clientY;
    var sY = event.screenY;
    var coords1 = "client - X: " + cX + ", Y coords: " + cY;
    var coords2 = "screen - X: " + sX + ", Y coords: " + sY;
    // console.log(coords1)
    console.log(distanceFromLeft + cX, distanceFromTop + cY)
    
    // document.getElementById("demo").innerHTML = coords1 + "<br>" + coords2;
}