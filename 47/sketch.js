//Code augmented from Daniel Shiffman: http://natureofcode.com
//Separation Via Reynolds: http://www.red3d.com/cwr/steer/

let vehicles = [];
let stars = [];
let sep = 7;
let seek = 10;
let desire = 12;
let fear = 20;
let origin;
let lamp, bg, fg;
let light = 20;
let lightSpeed = 1;
let bugspray = false;

function preload(){
  lamp = loadImage('lamp.gif');
  bg = loadImage('background.gif');
  fg = loadImage('foreground.gif');
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  
  for (let i = 0; i < 200; i++) {
    stars.push(new Star());
  }

  for (let i = 0; i < 8; i++) {
    if (random(1) > .5) {
      origin = -30;
    } else {
      origin = width + 30;
    }
    vehicles.push(new Vehicle(origin, random(height)));
  }

}


function draw() {
  image(bg, width/2, height/2, width, height); 
  
  if(bugspray && frameCount % 120 == 0){
    bugspray = false;
  }
  
  if(frameCount % 3 == 0){
  light+= lightSpeed;
  lightSpeed = bounce(light, 20, 40, lightSpeed);
  }

  //new fireflies every two seconds
  if (frameCount % 120 == 0 && vehicles.length < 150) {
    if (random(1) > .5) {
      origin = -30;
    } else {
      origin = width + 30;
    }
    vehicles.push(new Vehicle((origin), random(height)));
  }

  for (let s of stars) {
    s.draw();
  }
  
  fill(237, 183, 202)
  //this is the moon
  ellipse(width*.18, height * .2, 180);

  image(fg, width/2, height/2, width, height); 
  image(lamp, width/2, height*.7, 150, 260);

  //little pulse
  blendMode(ADD);
  fill(237, 183, 202, 30)
  
  for (let i = 1; i < 5; i++){
  ellipse(width / 2, height * .72, light * i)
  }
  
  
  blendMode(BLEND);
  for (let v of vehicles) {
    v.applyBehaviors(vehicles);
    v.update();
    v.display();
  }
}

function mousePressed(){
  bugspray = !bugspray;
}

function bounce(pos, low, high, speed){
  if (pos < low || pos > high){
    return speed*= -1;
  } else {
    return speed;
  }
}

class Star {
  constructor() {
    this.x = random(width);
    this.y = random(height * .7);
    this.size = random(0.25, 4);
    this.offset = random(3)
    this.twinkle = random(PI);
  }

  draw() {
    fill(237, 183, 202)
    this.twinkle += 0.05;
    var scale = this.size + sin(this.twinkle + this.offset) * 2;
    noStroke();
    ellipse(this.x, this.y, scale, scale);
  }
}