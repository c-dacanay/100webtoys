let slides = document.querySelectorAll("p")
let selected = 0;
let msg = document.getElementById("msg")
let silence = ["zzrrt...", "bzzt...", "...scccccsh", "...bbbnnn", "zzzzssss..."]
console.log(slides)

document.body.addEventListener("wheel", function(e){
    if (e.deltaY < 0 && selected > 0){
        selected -= 1
      } else if (selected < slides.length - 1){
        selected += 1
      }
    console.log(e.deltaY, selected)
    changeSlide(e)
  })


function changeSlide(e) {
// remove the previous class
slides.forEach( s => {
    if (s.classList.contains("selected")) {
        s.classList.remove("selected")
    }
})
//check which is selected
slides[selected].classList.add("selected")

if (selected == 2) {
    msg.innerHTML = "...oey Melvin, we're meeting in Tusc..."
} else if (selected == 7) {
    msg.innerHTML = "...870° N. 105.9378° W. Repeat: 35.6870° N, 10..."
} else if (selected == 20) {
    msg.innerHTML = "...lds, flu, and infections. Coneflowers can be yellow and pur... "
} else if (selected == 26) {
    msg.innerHTML = "...found in Grand Teton with multiple ra..."
}
 else {
msg.innerHTML = silence[getRandom(0, silence.length)]
}
}


function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}