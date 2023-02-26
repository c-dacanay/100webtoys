let button = document.getElementById("butt")
let wrapper = document.getElementById("wrapper")
console.log(button)

button.addEventListener("click", nice)

function nice() {
    for (let i = 0; i < 100; i++) {
    setTimeout(() => {
        const para = document.createElement("h1");
    para.innerText = "nice" + ` `;
    wrapper.appendChild(para);
    }, 100 * i)
    }
}