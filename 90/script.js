const spin = document.getElementById("spin");
const images = document.querySelectorAll(".hexagon img")
const wrapper = document.getElementById("wrapper")
const content = document.getElementById("content")
const title = document.querySelector("#content h1")
const poem = document.querySelector("#content p")
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
    "poem": "<p>The smell of a tortoise boiling<br>It cries under the cauldron's lid</p><p>Your inheritance lies in a tomb<br>There is a past that is rightfully yours</p><p>Fear and hope created gods<br>Rid yourself of both</p>"
  },
  wayfarer: {
    "title": "The Wayfarer",
    "poem": "<p>Bring a bell for the spirits<br>and a bone for the dogs</p><p>Keep your name behind your teeth<br>Death is yet another city to see</p><p>As the sun folds time between seasons<br>you fold time with breaths</p>"
  },
  maker: {
    "title": "The Maker",
    "poem": "<p>Count grains of sand to measure the sea<br>Number the stars the measure the earth</p><p>Your dreams are myths with familiar skins<br>All you must learn has been learned before</p><p>If you do not wish for things to change<br>time shall do it for you</p>"
  }
}

images.forEach(img => {
  img.addEventListener('click', (e) => {
    const target = e.target;
    const type = target.classList;
    console.log(type)
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
      title.innerHTML = readings.conq.title;
      poem.innerHTML = readings.conq.poem;
      //conquereor
    } else if (type == "left-top") {
      title.innerHTML = readings.maker.title;
      poem.innerHTML = readings.maker.poem;
      //maker
    } else if (type == "right-top") {
      title.innerHTML = readings.heretic.title;
      poem.innerHTML = readings.heretic.poem;
      //fire lol
    } else if (type == "left-bottom") {
      title.innerHTML = readings.shaman.title;
      poem.innerHTML = readings.shaman.poem;
      //shaman
    } else if (type == "right-bottom") {
      title.innerHTML = readings.wayfarer.title;
      poem.innerHTML = readings.wayfarer.poem;
      // wanderer
    } else {
      title.innerHTML = readings.scholar.title;
      poem.innerHTML = readings.scholar.poem;
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