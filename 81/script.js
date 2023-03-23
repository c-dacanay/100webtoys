var circles = document.querySelectorAll('circle');
let power = circles[1];
let oxy = circles[3];
var radius = power.r.baseVal.value;
var circumference = radius * 2 * Math.PI;

//power
power.style.strokeDasharray = `${circumference} ${circumference}`;
power.style.strokeDashoffset = `${circumference}`;
oxy.style.strokeDasharray = `${circumference} ${circumference}`;
oxy.style.strokeDashoffset = `${circumference}`;

//Input
function setProgress(percent) {
  const offset = circumference - percent / 100 * circumference;
  power.style.strokeDashoffset = offset;
}

const input = document.querySelector('input');
setProgress(input.value);

input.addEventListener('change', function(e) {
  if (input.value < 101 && input.value > -1) {
    setProgress(input.value);
  }  
})

let oxygen = 101;

setInterval(reduceOxy, 1000)

function reduceOxy(){
    if (oxygen > 0) {
    oxygen = oxygen - 1;
    let off = circumference - oxygen / 100 * circumference
    oxy.style.strokeDashoffset = off;
    }
}

document.querySelector("button").addEventListener("click", ()=> {
    oxygen = 101;
})



