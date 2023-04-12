let containers = document.querySelectorAll(".container");
let allBtn = document.getElementById("all-btn")
let favBtn = document.getElementById("f-btn")
let cBtn = document.getElementById("c-btn")
let vBtn = document.getElementById("v-btn")
let sBtn = document.getElementById("s-btn")
let total = document.getElementById("total")
let preview = document.getElementById("preview")

allBtn.addEventListener("click", () => {
    checkDays('number')
    total.innerHTML = '100 webtoys made with consistent daily effort';
})

favBtn.addEventListener("click", () => {
    checkDays('fav')
    total.innerHTML = '14 favorite webtoys';
})

cBtn.addEventListener("click", () => {
    checkDays('curious')
    total.innerHTML = '30 curious webtoys allowed me to explore something new';
})
vBtn.addEventListener("click", () => {
    checkDays('viable')
    total.innerHTML = '25 viable webtoys revealed potential for future iteration and play';
})

sBtn.addEventListener("click", () => {
    checkDays('surprising')
    total.innerHTML = '19 surprising webtoys contain something unexpected';
})

// for (c = 0; c < containers.length; c++) {
//     let int = c;
//     console.log('doin it')
//     const link = containers[c].querySelector('a')
//     const img = `./docs/${c}.gif`;

//     containers[c].addEventListener('mouseover', (int) => {
//         console.log(int, 'hi')
//     })
// }

containers.forEach((container, index) => {
    const link = container.querySelector('a');
    const imagePath = `docs/${index + 1}.gif`;
  
    if (!link) {
      console.warn(`No preview link found for container ${index}`);
      return;
    }
  
    link.addEventListener('mouseover', () => {
      console.log(`Container ${index} clicked`);
      preview.style.backgroundImage = `url(${imagePath})`;
    });

    link.addEventListener('mouseleave', () => {
        preview.style.backgroundImage = 'none';
    })
  });

function checkDays(type) {
    clearBtns();
    containers.forEach(container => {
    if (container.innerHTML.includes(type)) {
        container.style.display = 'flex';
    } else {
        container.style.display = 'none';
    }

    if (type == 'number') {
        allBtn.style.backgroundColor = 'black'
        allBtn.style.color = 'white'
        console.log('hey')
    } if (type == 'fav') {
        favBtn.style.backgroundColor = '#2e94b0';
    } if (type == 'curious') {
        cBtn.style.backgroundColor = '#7B67F3';
    } if (type == 'viable') {
        vBtn.style.backgroundColor = '#FA5F66';
    } if (type == 'surprising') {
        sBtn.style.backgroundColor = '#E298E4';
    }
});
}

function clearBtns() {
    console.log('clear btns')
    allBtn.style.backgroundColor = '#fffffa';
    allBtn.style.color = 'black'
    favBtn.style.backgroundColor = '#fffffa';
    vBtn.style.backgroundColor = '#fffffa';
    sBtn.style.backgroundColor = '#fffffa';
    cBtn.style.backgroundColor = '#fffffa';
}