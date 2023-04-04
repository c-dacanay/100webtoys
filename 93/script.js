let facemesh;
let video;
let predictions = [];

function setup() {
  createCanvas(windowWidth, windowHeight * 1.3);
  video = createCapture(VIDEO);
  video.size(windowWidth, windowHeight * 1.3);

  facemesh = ml5.facemesh(video, modelReady);

  // This sets up an event that fills the global variable "predictions"
  // with an array every time new predictions are made
  facemesh.on("predict", results => {
    predictions = results;
  });

  // Hide the video element, and just show the canvas
  video.hide();
}

function modelReady() {
  console.log("Model ready!");
}

function draw() {
  background('rgba(255, 255, 250, .05)')
  drawKeypoints();
}

// A function to draw ellipses over the detected keypoints
function drawKeypoints() {
  for (let i = 0; i < predictions.length; i += 1) {
    const keypoints = predictions[i].scaledMesh;
    console.log(keypoints)

    // Draw facial keypoints.
    for (let j = 0; j < keypoints.length; j += 1) {
      const [x, y] = keypoints[j];

      noFill();
      ellipse((x * 2.25) , (y * 2.25) , 3, 3);
    }
  }
}

