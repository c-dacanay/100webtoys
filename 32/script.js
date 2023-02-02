let islands = document.getElementsByClassName('island')
let dreams = document.getElementsByClassName('dream')
let focus = false;
let sky = document.querySelector('img')

for (let i=0; i < islands.length; i++) {
	islands[i].addEventListener('mouseenter', islandhover);
	islands[i].addEventListener('mouseleave', islandleave);
    islands[i].addEventListener('click', seeisland);
}

function clearislands() {
    for (let i=0; i < islands.length; i++) {
		islands[i].classList.add('quiet')
	}
}

function seeisland() {
	let dream = document.getElementById(`d`+ this.id);
    console.log(dream.id)
    if (focus) {
        focus = false;
    } else {
    clearislands();
    this.classList.remove('quiet')
    this.classList.add('highlight')
    focus = true;
    }
}

function islandhover() {
    if (focus) {
        return
    } else {
	let dream = document.getElementById(`d`+ this.id);
    clearislands();
	this.classList.remove('quiet')
	this.classList.add('highlight')
	dream.classList.add('dreaming')
    }
}

function islandleave() {
    if (focus) {
        return
    } else {
	let dream = document.getElementById(`d`+ this.id);
	dream.classList.remove('dreaming')
	this.classList.remove('highlight')

	for (let i=0; i < islands.length; i++) {
		islands[i].classList.remove('quiet')
	}
    }
}