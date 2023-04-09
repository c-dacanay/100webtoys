// 2D Water Ripples
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/102-2d-water-ripple.html
// https://youtu.be/BZUdGqeOD0w
// https://editor.p5js.org/codingtrain/sketches/tYXtzNSl

// Algorithm: https://web.archive.org/web/20160418004149/http://freespace.virgin.net/hugo.elias/graphics/x_water.htm

let cols;
let rows;
let current; // = new float[cols][rows];
let previous; // = new float[cols][rows];

let dampening = .99;

function setup() {
  pixelDensity(1);
  createCanvas(windowWidth, windowHeight);
  cols = width;
  rows = height;
  // The following line initializes a 2D cols-by-rows array with zeroes
  // in every array cell, and is equivalent to this Processing line:
  // current = new float[cols][rows];
  current = new Array(cols).fill(0).map(n => new Array(rows).fill(0));
  previous = new Array(cols).fill(0).map(n => new Array(rows).fill(0));
}

function mouseDragged() {
    previous[mouseX][mouseY] = 7000;
}

function mousePressed() {
    previous[mouseX][mouseY] = 7000;
}
function draw() {
  background('#292B2C');

  loadPixels();
  for (let i = 1; i < cols - 1; i++) {
    for (let j = 1; j < rows - 1; j++) {
      current[i][j] =
        (previous[i - 1][j] +
          previous[i + 1][j] +
          previous[i][j - 1] +
          previous[i][j + 1]) /
          2 -
        current[i][j];
      current[i][j] = current[i][j] * dampening;

      let index = (i + j * cols) * 4;
      pixels[index + 0] = current[i][j];
      pixels[index + 1] = current[i][j];
      pixels[index + 2] = current[i][j];
    }
  }
  updatePixels();

  let temp = previous;
  previous = current;
  current = temp;
}