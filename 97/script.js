// Select the image element
const image = document.querySelector('img');

// Calculate the quadrant height
const quadrantHeight = window.innerHeight / 4;

// Add event listener for mousemove
window.addEventListener('mousemove', (event) => {
  // Get the mouse Y position
  const mouseY = event.clientY;

  // Calculate the current quadrant index
  const quadrantIndex = Math.floor(mouseY / quadrantHeight);

  // Change the image source based on the quadrant index
  switch (quadrantIndex) {
    case 0:
      image.src = '../src/g1.gif';
      break;
    case 1:
      image.src = '../src/g2.gif';
      break;
    case 2:
      image.src = '../src/g3.gif';
      break;
    case 3:
      image.src = '../src/g4.gif';
      break;
    default:
      break;
  }
});


