let spanish = document.querySelectorAll(".spanish");
let english = document.querySelectorAll(".english");
let translation = document.querySelectorAll("h4");
let isSpanish = true;

translation[0].addEventListener("click", () => {
    if (isSpanish) {
        spanish.forEach(item => {
            item.style.opacity = 0;
            setTimeout(() => {
                item.style.display = 'none';
            }, 1000)

        })
        setTimeout(() => {
            english.forEach(item => {
                item.style.display = 'block';
                item.style.opacity = 1;
            })
        }, 1000)
        isSpanish = false;
    } else {
        english.forEach(item => {
            item.style.opacity = 0;
            setTimeout(() => {
                item.style.display = 'none';
            }, 1000)

        })
        setTimeout(() => {
            spanish.forEach(item => {
                item.style.opacity = 1;
                item.style.display = 'block';
            })
        }, 1000)
        isSpanish = false;
        isSpanish = true;
    }
})