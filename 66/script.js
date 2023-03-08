// Based of The Nature of Code Mutual Attraction sketch

let movers = [];
let G = 2;
let sound;
function preload() {
  sound = loadSound('./src/peppermint-bark.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  amplitude = new p5.Amplitude();
  colorMode(HSB, 100);
  sound.loop();
}

function draw() {
  background(0, 0, 100, 80);
  let level = amplitude.getLevel();

  console.log(level)
  if (level > .2) {
    G = G * -1;
  }

  if (level > .1) {
    newMovers();
  }

  for (let i = 0; i < movers.length; i++) {
    for (let j = 0; j < movers.length; j++) {
      if (i !== j) {
        let force = movers[j].attract(movers[i]);
        movers[i].applyForce(force);
      }
      if (movers.length > 60) {
        movers.splice(0, 1);
      }
    }

    movers[i].update();
    movers[i].display();
  }
}

function newMovers() {
  for (let i = 0; i < 1; i++) {
    movers.push(new Mover(random(width * .2, width * .8), random(height * .2, height * .7), random(height / 500, height / 150)));
  }
}
