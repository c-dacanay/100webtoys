let slides = document.querySelectorAll("p")
let selected = 0;
let msg = document.getElementById("msg")
let listenBtn = document.getElementById("listen")
let listening = false;
let silence = ["zzrrt...", "bzzt...", "...scccccsh", "...bbbnnn", "zzzzssss..."]
let programming = null;
let content = document.getElementById("content")
let stopBtn = document.getElementById("stop")
let p = document.getElementById("text");
let Hour = new Date().getHours();

// check the wheel
document.body.addEventListener("wheel", function(e){
    if (e.deltaY < 0 && selected > 0){
        selected -= 1
      } else if (selected < slides.length - 1){
        selected += 1
      }
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

if (selected == 5 || selected == 21 || selected == 28) {
    msg.style.display = "none";
    listenBtn.style.display = "block";
    setButton();
} else {
    if (listenBtn.style.display == "block") {
        listenBtn.style.display = "none";
        msg.style.display = "block";
    }
    msg.innerHTML = silence[getRandom(0, silence.length)]
}
}

// Button

listenBtn.addEventListener("click", hear)

function setButton() {
    listening = true;
    if (Hour > 12 ) {
        // Italo Calvino
        programming = 0;
    } else {
        // Jazz
        programming = 1;
    }
}

function hear() {
    content.style.width = '35vw';
    content.style.height = '50vh';
    setTimeout(() => {
        stopBtn.style.display = "block";
        p.style.display = "block";
    }, 1100)

    if (programming == 0) {
        p.innerHTML = `Diamond life lover boy<br>
        He moves in space with minimum waste and maximum joy<br>
        City lights and business nights<br>
        When you require streetcar desire for higher heights<br><br>
        
        No place for beginners or sensitive hearts<br>
        The sentiment is left to chance<br>
        No place to be ending but somewhere to start<br><br>
        
        No need to ask<br>
        He's a smooth operator<br>
        Smooth operator<br>
        Smooth operator<br>
        <a href="https://www.youtube.com/watch?v=4TYv2PhG89A" target="_blank">Smooth operator</a>`
    } else {
        p.innerHTML = `It will perhaps please you to know that, as regards the famous italcalvinian dualism, the agronomist is about to lose out, and the poet will emerge as the clear winner. My revision for the exams is still today in a deplorable state and offers no hope of recovery. The Easter holidays, which were filled with the pleasures of cheerful cycling trips along the Via Aurelia and daring but unsuccessful pursuits of Riviera Amazons, have long disappeared. The poet, on the other hand, has been more productive: he has finished the famous Brezza di terra (Land Breeze) and would now do well to go off and hide. The work is solemn rubbish and I don’t think I’ll have the courage to present it, not even in Florence. Rhetoric, artifice, and trite Pirandellian ideas grafted onto pompous D’Annunzian language. But also daring, warmth, enthusiasm and, what counts above all, real poetry.`
    }
    content.prepend(p)
}

stopBtn.addEventListener("click", stopListening)

function stopListening() {
    listening = false;
    content.style.width = '0px';
    content.style.height = '0px';
    stopBtn.style.display = "none";
    p.style.display = "none";
}


function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}