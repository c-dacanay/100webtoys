
function init() {
  let l1Img = document.getElementById("layer1");
  let l1Input = document.getElementById("l1-input");

  let l2Img = document.getElementById("layer2");
  let l2Input = document.getElementById("l2-input");

  let l3Img = document.getElementById("layer3");
  let l3Input = document.getElementById("l3-input");

  let credits = document.getElementById("credits")

  let colors = ['#FFFFF1','#292B2C', '#E298E4', '#2e94b0', '#7B67F3', '#B6FF8E', '#FBFF7B','#FA5F66']

  //set opacity
  l1Img.style.opacity = l1Input.value;
  l2Img.style.opacity = l2Input.value;
  l3Img.style.opacity = l3Input.value;

  //set colors
  l1kids = l1Img.children;
  l2kids = l2Img.children;
  l3kids = l3Img.children;

  kidArray = [l1kids, l2kids, l3kids];

  //pick random colors out of the array and color the kids
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < kidArray[i].length; j++) {
      let layer = kidArray[i]
      let ranColor = colors[Math.floor(Math.random(0, 7) * colors.length)];
      kidArray[i][j].style.fill = ranColor;
    }
  }

  function checkCredits() {
    if (l1Input.value == 0 && l2Input.value == 0 && l3Input.value == 0) {
      credits.style.display = "block";
    } else {
      credits.style.display = "none";
    }
  }

  function update() {
    l1Img.style.opacity = l1Input.value;
    l2Img.style.opacity = l2Input.value;
    l3Img.style.opacity = l3Input.value;
    checkCredits();
  }

  function click() {
    l1Img.classList.toggle('paused');
    l2Img.classList.toggle('paused');
    l3Img.classList.toggle('paused');
  }

  function stopEvent(ev) {
    ev.stopPropagation();
    console.log('stopped');
  }

  //listen for clicks, but not on the sliders
  document.body.addEventListener("mousedown", click);
  l1Input.addEventListener("mousedown", stopEvent, false);
  l2Input.addEventListener("mousedown", stopEvent, false);
  l3Input.addEventListener("mousedown", stopEvent, false);

  //update inputs
  l1Input.addEventListener("input", update);
  l2Input.addEventListener("input", update);
  l3Input.addEventListener("input", update);

}

window.addEventListener("load", init);