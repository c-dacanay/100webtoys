let titles = document.querySelectorAll(".title")
let floors = document.querySelectorAll(".floor")
let musings = document.querySelectorAll(".musing")
let images = document.querySelectorAll("img")
let thinking = false;

for (let i=0; i < floors.length; i++) {
  floors[i].addEventListener('mouseover', remember);
  floors[i].addEventListener('mouseout', forget);
  floors[i].addEventListener('click', wonder)
}

function remember() {
  if (thinking) {
    for (let i = 0; i < titles.length; i++) {
      titles[i].classList.remove("active")
      titles[i].style.opacity = 0;
    }
    for (let i = 0; i < musings.length; i++) {
      console.log(musings[i]);
      musings[i].style.opacity = 0;
    }
    thinking = false;
  }
  let title = document.getElementById(this.id + `t`);
  console.log(title)
  title.style.opacity = 1;

}

function forget() {
  for (let i=0; i < titles.length; i++) {
    if (titles[i].classList.contains('active')) {
      console.log('nope')
    } else {
      titles[i].style.opacity = 0;
    }
  }
}

function wonder() {
    images.forEach((i) => {
        i.style.opacity = 0;
    })
  thinking = true;
  let img = document.getElementById(this.id + `i`);
  let title = document.getElementById(this.id + `t`);
  img.style.opacity = 1;
  title.classList.add("active");
}
