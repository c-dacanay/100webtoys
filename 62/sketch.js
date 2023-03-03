let fireworks = [];
let gravity;

function setup() {
  createCanvas(windowWidth, windowHeight);
  gravity = createVector(0, 0.15);
  background(0);


}

function draw() {

  noStroke();
  fill(255);
  textSize(20)
  text('Type for fireworks', 30, 50);
  blendMode(MULTIPLY)
  background(0, 10);
  
  blendMode(ADD);
  for (let i = fireworks.length - 1; i >= 0; i--)  {
        // clear();;
    fireworks[i].update();
    fireworks[i].show();

    console.log(fireworks.length);
    if (fireworks[i].done()) {
      fireworks.splice(i, 1);
    }
  }

}

function keyTyped() {

    // background(0);
    fireworks.push(new Firework());

  
}