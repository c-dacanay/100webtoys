let range = document.getElementById("range");
let num = document.getElementById("num");
let check = document.querySelectorAll('input[type="checkbox"]')

function numUpdate() {
    if (num.value > 100) {
    num.style.marginTop = "100 em";
    } else {
    num.style.marginTop = num.value + "em";
    }
}

function rangeUpdate() {
  range.style.transform = "rotate(".concat(-range.value, "deg)");
  range.style.margin = range.value / 90 + "px";
}

function checkUpdate() {
    if (this.checked) {
        setTimeout(() => {
            this.checked = false;
        }, 1000)
    }
}

console.log(check)
check.forEach(c => {
    c.addEventListener("input", checkUpdate)
    console.log('yo')
})

num.addEventListener("input", numUpdate)
range.addEventListener("input", rangeUpdate);
