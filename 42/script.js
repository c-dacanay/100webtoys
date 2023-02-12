let letter = document.getElementById("letter");

document.addEventListener('keydown', (e) => {
    if (letter.classList.contains('fire')) {
        letter.classList.remove('fire')
    }
    let key = e.key;

    if (key != "Backspace" && key != "Enter" && key != "Control" && key != "Tab" && key != "Alt" && key != "Meta" && key != "CapsLock" && key != "Shift" && key != "ArrowUp" && key != "ArrowDown" && key != "ArrowLeft" && key != "ArrowRight") {
    letter.innerHTML += key;
    }

    if (key === "Backspace") {
        letter.innerHTML = letter.innerHTML.substring(0,letter.innerHTML.length-1);
    }

    if (key === "Enter") {
        letter.classList.add("fire")

    for (let i = 0; i < letter.innerHTML.length; i++) {
        setTimeout(()=> {
            letter.innerHTML = letter.innerHTML.substring(0,letter.innerHTML.length-1);  
        }, 100 * i)
    }
    }
})