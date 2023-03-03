let video; //get our video feed
let poseNet; //variable for our posenet model
let poses = []; //array to hold all our poses
let pointX = 0;
let pointY = 0;
let emojis = ['❤️', '✨', '🌸', '❌', '🌚', '👁', '🔥', '💧', '⏱']
let status = 0;
let c;
let button;



function setup(){
	  c = createCanvas(window.innerWidth, window.innerHeight * 1.3);
    video = createCapture(VIDEO);
    video.size(width, height);
    poseNet = ml5.poseNet(video, modelReady);
    textSize(width / 12)
    textAlign(CENTER, CENTER)
    button = createButton('Button');
    button.mousePressed(link)

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
    image(video, 0, 0, width, height);
    drawKeypoints();
}

function drawKeypoints() {

    // Loop through all the poses detected
    for (let i = 0; i < poses.length; i++) {
      

      // For each pose detected, loop through all the keypoints
      let pose = poses[i].pose;

      for (let j = 0; j < pose.keypoints.length; j++) {
        // A keypoint is an object describing a body part (like rightArm or leftShoulder)
        if (pose.keypoints[j].score > .9) {

          button.position(pose.nose.x - 200, pose.nose.y - 255)

        }
      }
    }
  }

  function link() {
    window.open('https://twitter.com/alexwidua/status/1630998774247030786?s=20');

  }