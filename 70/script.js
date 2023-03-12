let eyes = []

// left eye, right eye

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 100);
  let eyeSize = windowWidth / 5;
  eyes.push(new Eye(eyeSize * 1.5, eyeSize, eyeSize));  
  eyes.push(new Eye(eyeSize * 3, eyeSize, eyeSize));  
}

function draw() {
  console.log(frameCount)
  background(0, 0, 100, 80)
    eyes[0].display();
    eyes[1].display();
    // console.log(mouseX, mouseY)
}

// function newMovers() {
//   for (let i = 0; i < 1; i++) {
//     movers.push(new Mover(random(width * .2, width * .8), random(height * .2, height * .7), random(height / 500, height / 150)));
//   }
// }

// function mousePressed() {
//   if (sound.isPlaying() == false) {
//     sound.loop();
//     console.log('play!');
//   } else {
//     sound.pause();
//   }
// }