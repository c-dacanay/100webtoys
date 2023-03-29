const keys = document.querySelectorAll('.key');
const door = document.getElementById("door");
let currentK = 0;

keys.forEach(key => {
  key.addEventListener('click', () => {
    currentK = key.id;
    const cursor = `url(./src/key${key.id}.svg), auto`;
    document.body.style.cursor = cursor;
  });
});

door.addEventListener("click", () => {
    console.log(currentK)
    if (currentK == 2) {
        door.classList.add("open")
    } else {
        door.classList.add("wiggle")
        setTimeout(() => {
            door.classList.remove("wiggle")
        }, "1000")
    }
})
