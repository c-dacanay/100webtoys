// d value
let f = 20;
let n;
let d;
let sw = 1;
let play = true;
let nslide = document.getElementById('n-slider');
let dslide = document.getElementById('d-slider');
let nspan = document.getElementById('n');
let dspan = document.getElementById('d');
let playbtn = document.getElementById('play');
let pausebtn = document.getElementById('pause');

function setup() {
  frameRate(3)
  canvas = createCanvas(windowWidth/2, windowWidth/2);
  angleMode(DEGREES);
}

function draw() {
  n = nslide.value;
  d = dslide.value;
  nspan.innerHTML = '(' + n + ')';
  dspan.innerHTML = '('+ d + ')';
  background('#FFFFFA');
  translate(width/2,height/2.5);
  noFill();
  beginShape();
  strokeWeight(sw);
  stroke('#7B67F3');
 	for (let i = 0; i<=360; i++){
 		let k = i*d;
 		let r = width/3*sin(n*k);
 		let x = r*cos(k);
 		let y = r*sin(k);
 		vertex(x,y);
 	}
 	endShape(CLOSE);
  if (play) {
    if (d < 200) {
    dslide.value =+ dslide.value + 1;
    console.log(dslide.value)
    } else {
      dslide.value = 1;
      nslide.value =+ nslide.value + 1;
    }
  }
}

pausebtn.addEventListener('click', () => {
  play = false;
  playbtn.disabled = false;
  pausebtn.disabled = true;
})

playbtn.addEventListener('click', () => {
  play = true;
  playbtn.disabled = true;
  pausebtn.disabled = false;
})

