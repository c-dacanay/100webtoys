const spin = document.getElementById("spin");
const images = document.querySelectorAll(".hexagon img")
const wrapper = document.getElementById("wrapper")
const content = document.getElementById("content")
const title = document.querySelector("#content h1")
const bigimg = document.querySelector("#content img")
const readings = {
  conq: {
    "title": "The Conqueror",
    "poem": "<p>Your god has two names: pride and shame<br> Two snakes devour the same egg</p> <p>Grasp your helm fast in your hands <br> to face the sunset </p> <p>Turn back, charge forward<br> A battle either way</p>"
  }, 
  shaman: {
    "title": "The Shaman",
    "poem": "<p>Who looks outside dreams<br>Who looks inside awakes</p><p>Surrender yourself to smallness<br>and in surrender is freedom<p><p>A straight line shall break, so curve it<br>All fate lies in the bones of a spine</p>"
  },
  scholar: {
    "title": "The Scholar",
    "poem": "<p>Shadows are cast on walls<br> and you hold the light</p><p>In the future, lights will be<br>remembered as divine beings<p><p>What is beyond any boundary?<br>Again, another sky</p>"
  },
  heretic: {
    "title": "The Heretic",
    "poem": "<p>The smell of a tortoise boiling<br>It cries under the cauldron's lid</p><p>Surrender yourself to smallness<br>and in surrender is freedom<p><p>A straight line shall break, so curve it<br>All fate lies in the bones of a spine</p>"
  },
  sham: {
    "title": "The Shaman",
    "poem": "<p>Who looks outside dreams<br>Who looks inside awakes</p><p>Surrender yourself to smallness<br>and in surrender is freedom<p><p>A straight line shall break, so curve it<br>All fate lies in the bones of a spine</p>"
  },
  sham: {
    "title": "The Shaman",
    "poem": "<p>Who looks outside dreams<br>Who looks inside awakes</p><p>Surrender yourself to smallness<br>and in surrender is freedom<p><p>A straight line shall break, so curve it<br>All fate lies in the bones of a spine</p>"
  }
}

images.forEach(img => {
  img.addEventListener('click', (e) => {
    const target = e.target;
    const type = target.classList;
    console.log(target)
    images.forEach(i => {
      i.style.opacity = 0;
    })
    target.style.opacity = 1;
    wrapper.style.backgroundColor = "black";

    //set content stuff
    content.style.display = "flex";
    bigimg.src = target.src;
    setTimeout(() => {
      content.style.opacity = 1;
    }, 250)

    if (type == "top") {
      //conquereor
      console.log('hi')
    } else if (type == "top-left") {
      //maker
    } else if (type == "top-right") {
      //fire lol
    } else if (type == "bottom-left") {
      //shaman
    } else if (type == "bottom-right") {
      // wanderer
    } else {
      // scholar
    }
  });
});

function closeReading() {
  content.style.opacity = 0;
  setTimeout(() => {
    content.style.display = "none";
  }, 2000)
  images.forEach(i => {
    i.style.opacity = .2;
  })
}
document.addEventListener('mousemove', e => {
  let rect = spin.getBoundingClientRect();
  let x = (e.clientX - rect.left) / rect.width;
  let y = (e.clientY - rect.top) / rect.height;
  let rotation = Math.atan2(y, x) * (180/Math.PI) - 90;

  spin.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
});