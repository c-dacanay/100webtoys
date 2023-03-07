document.addEventListener('DOMContentLoaded', init, false);

function init(){

// TODOS: 
// Hover to get POI title on SVJ
// Dossier Button
// Dossier information


const poiButton = document.getElementById('poi');
const dosButton = document.getElementById('details')
const pins = document.getElementById('pins');
const dossier = document.getElementById('dossier')
const navbar = document.getElementById('nav')
const districts = document.getElementsByClassName('districts');
const dnames = ['The Keep / Celosia`s Pin', 'The Basket / Kalanchoe`s Garden', 'Inner Celosia', 'Port Town', 'North Primrose', 'South Primrose', 'Highlands', 'Three Points', 'Long Acres', 'Eastfarns']
let subtitle = document.getElementById('subject')
let pinned = false;
let doss = false;

poiButton.addEventListener('click', () => {
    if (pinned) {
        pins.style.display = "none"
        pinned = false;
    } else {
        pins.style.display = "block"
        pinned = true;
    }
})

dosButton.addEventListener('click', () => {
        if (doss) {
            dossier.style.display = "none"
            navbar.style.display = "none"
            doss = false;
        } else {
            dossier.style.display = "block"
            navbar.style.display = "flex"
            doss = true;
        }
    })
    


let sections = document.getElementsByClassName('section');
//mouse over sections
for (var i = 0; i < sections.length; i++) {
    sections[i].addEventListener('mouseenter', mouseOverEffect);
    sections[i].addEventListener('click', findDossier);
}

function findDossier(){
    let id = this.id
    if (!doss) {
        dossier.style.display = "block"
        navbar.style.display = "flex"
        doss = true;
    } 
    window.location.hash = `#d`+ id;

}
function mouseOverEffect() {
    let id = this.id
    for (var i = 0; i < sections.length; i++) {
    sections[i].classList.remove('highlight')
    }
    this.classList.add("highlight");
    changeSubtitle(id)
}

function changeSubtitle(id){
    let a = id;
    subtitle.innerHTML = '>> ' + dnames[a-1]
}

}

