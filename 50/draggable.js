let cmag = document.getElementById("c-mag")
let magnets = document.querySelectorAll(".magnet")

// big thanks to max bittker again for (I think) writing this original code :)

let activeElement = null;
let offset_x;
let offset_y;
let last_z = 1;

cmag.addEventListener("mousedown", function (ev) {
  ev.preventDefault();
  activeElement = ev.target;
  console.log(activeElement)

  let bounds = ev.target.getBoundingClientRect();

if (activeElement.className === "magnet") {
  activeElement.style.position = "absolute";
    }
  offset_x = ev.clientX - bounds.left;
  offset_y = ev.clientY - bounds.top;
  activeElement.style.zIndex = last_z;
  last_z++;
});

cmag.addEventListener("mouseup", function (ev) {
  activeElement = null;
});

cmag.addEventListener("mousemove", function (ev) {
  let x = ev.clientX - offset_x;
  let y = ev.clientY - offset_y;
  if (activeElement) {
    activeElement.style.left = x + "px";
    activeElement.style.top = y + "px";
  }
});
