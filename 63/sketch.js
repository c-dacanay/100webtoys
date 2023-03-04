let rotation = 0.005;
let setRedSpecularColor = true;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  normalMaterial();
  setAttributes('perPixelLighting', true);
}

function draw() {
  background(255, 255, 250);

  let dirX = (mouseX / width - 0.5) * 2;
  let dirY = (mouseY / height - 0.5) * 2;
  directionalLight(250, 250, 250, -dirX, -dirY, -1);
  
  rotateX(frameCount * rotation); 
  rotateY(frameCount * rotation);
  rotateZ(frameCount * rotation);
  
  orbitControl(.5);

  let trans = 200;
  
  for (let i = -3; i < 6; i++)
    for (let j = -3; j < 6; j++)
      for (let k = -3; k < 6; k++) {
        translate(trans * i, trans * j, trans * k);
        fill(160 + i * 20, 160 + j * 20, 160 + k * 20);      
        cone(40, 30*i, 8)
        translate(-trans * i, -trans * j, -trans * k);
      }
}

function mousePressed(){
rotation = rotation*-1;
}