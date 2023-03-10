let penSize = 15;
let penState = 0;
let fog;

function preload(){
  
  fog = loadImage('fog.png')
  

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 255, 250);
  strokeWeight(penSize);
  imageMode(CENTER);
}

function draw() {

  if (mouseIsPressed) {
      stroke(255, 255, 250)
	    line(mouseX, mouseY, pmouseX, pmouseY);    
  }
  tint(255, 15)
  image(fog, random(0, windowWidth), random(0, windowHeight) , windowWidth, windowHeight);
}

function keyPressed() {
	if (keyCode == LEFT_ARROW && penSize > 1) {
    penSize -= 1;
  }
  
  if (keyCode == RIGHT_ARROW) {
		penSize += 1;
  }
    
  strokeWeight(penSize);
}
      

      
      
      
      
      