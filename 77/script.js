let date = document.getElementById("date");
let cmd = document.getElementById("cmd");
var myRec = new p5.SpeechRec();
myRec.interimResults = true; 
myRec.continuous = true; 
let img;
let xloc = 0,
  yloc = 0,
  xspeed = 0,
  yspeed = 0;
function preload() {
  // img = loadImage('./d.png')
  img = loadImage('./d.jpeg')
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  myRec.start();
  myRec.onResult = showResult; 
  date.innerHTML = 134501 + frameCount;
  xloc = width / 2;
  yloc = height / 2;
}

function draw() {
  if (frameCount % 60 == 0) {
  date.innerHTML = 134501 + frameCount;
  }
  image(img, 0, 0, width, height)
  xloc += xspeed;
  yloc += yspeed;
  circle(xloc, yloc, height/50)
}

function showResult() {
    let textRec = myRec.resultString.toLowerCase();
    console.log(textRec)
    let recent = textRec.split(" ").pop();
    cmd.innerHTML = recent;
    print(recent)
  
   if (recent == "up") {
    xspeed = 0;
    yspeed = -0.5;
  }
  if (recent == "down") {
    xspeed = 0;
    yspeed = 0.5;
  }
  if (recent == "left") {
    xspeed = -0.5;
    yspeed = 0;
  }
  if (recent == "right") {
    xspeed = 0.5;
    yspeed = 0;
  }
  if (recent == "stop") {
    xspeed = 0;
    yspeed = 0;
  }
  if (recent == "clear" || recent == "end" || recent == "start" || recent == "and") {
    xspeed = 0;
    yspeed = 0;
    xloc = width / 2;
    yloc = height / 2;
  }
}
