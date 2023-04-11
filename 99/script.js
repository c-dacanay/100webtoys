const compost = document.querySelector('#compost');
const letters = compost.textContent.split('');

console.log(letters)
let dayCount = 0;
let intervalID = setInterval(() => {
  if (dayCount < 100) {
    for (i = 0; i > (letters.length/100); i++ ) {
    const randomIndex = Math.floor(Math.random() * letters.length);
    letters[randomIndex] = `.`;
    compost.textContent = letters.join('');
    dayCount++;
    }
  }
}, 1000 * 60 * 60 * 24); 