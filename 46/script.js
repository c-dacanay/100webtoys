let video; //get our video feed
let poseNet; //variable for our posenet model
let poses = []; //array to hold all our poses
let pointX = 0;
let pointY = 0;
let emojis = ['❤️', '✨', '🌸', '❌', '🌚', '👁', '🔥', '💧', '⏱']
let status = 0;
let c;
//body parts
let nose;
let leftEye;
let rightEye;




function setup(){
	  c = createCanvas(window.innerWidth, window.innerHeight * 1.3);
    video = createCapture(VIDEO);
    video.size(width, height);
    poseNet = ml5.poseNet(video, modelReady);
    textSize(width / 12)
    textAlign(CENTER, CENTER)
   // fills poses with an array whenever pose detected
   poseNet.on('pose', function(results) {
      poses = results;
    });

   video.hide();
}

function modelReady() {
    select('#status').html('Model Loaded');
}

function draw(){
    background(200);
    image(video, 0, 0, width, height);
    drawKeypoints();
}

function defineParts() {
    //check that pose came in
    if (poses.length > 0) {
      rightWrist = poses[0].pose.rightWrist;
      leftWrist = poses[0].pose.leftWrist;
    }
  }

  function drawKeypoints() {
    // Loop through all the poses detected
    for (let i = 0; i < poses.length; i++) {

      // For each pose detected, loop through all the keypoints
      let pose = poses[i].pose;


      for (let j = 0; j < pose.keypoints.length; j++) {
        // A keypoint is an object describing a body part (like rightArm or leftShoulder)
        if (pose.keypoints[j].score > 0.75) {
          
        // ellipse(pose.leftEye.x, pose.leftEye.y - 50, 10, 10);
        // ellipse(pose.rightEye.x, pose.rightEye.y - 50, 10, 10);
        text(emojis[status], pose.leftEye.x, pose.leftEye.y - (width * .04))
        text(emojis[status], pose.rightEye.x, pose.rightEye.y - (width * .04))

        }
      }
    }
  }


  document.getElementById("camera").addEventListener("click", click)
document.getElementById("back").addEventListener("click", backward)
document.getElementById("forward").addEventListener("click", forward)
function click() {
  saveCanvas(c, 'memoji', 'jpg');
}

function backward() {
  if (status > 0) {
    status -= 1;
    } else {
      status = emojis.length -1;
    }
}

function forward() {
  if (status < emojis.length -1) {
  status += 1;
  } else {
    status = 0;
  }
}