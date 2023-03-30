const red = document.getElementById('red');
const face = document.getElementById('face');
const eye = document.getElementById('eye');
const eyeImages = ['./src/eye0.png', './src/eye1.png', './src/eye2.png', './src/eye3.png'];
const hiddenDiv = document.getElementById('hidden-div');
const hiddenText = document.getElementById('hidden-text');

let index = 0;
let interval;

red.addEventListener('click', () => {
  // Start the interval to switch eye images
  eye.style.opacity = 1;
  interval = setInterval(() => {
    eye.src = eyeImages[index];
    eye.style.paddingLeft = 25 * index + 'px';
    index++;
    // Stop the interval and hide the Red div after showing the last eye image
    if (index === eyeImages.length) {
      clearInterval(interval);
      setTimeout(() => {
        red.style.display = 'none';
        eye.style.display = 'none';
        hiddenDiv.style.display = 'block';
        setTimeout(() => {
            displayLetters('what do you want?', hiddenText, 0);
        }, 1000)
      }, 1000)

    }
  }, 250); // half second delay between each image change
});

function displayLetters(text, element, index) {
    if (index === text.length) {
      return;
    }
    const letter = text[index];
    // element.textContent = ''; // Clear the existing text in the element
    element.textContent += letter;
    setTimeout(() => {
      displayLetters(text, element, index + 1);
    }, 100);
  }