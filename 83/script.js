let tbuttons = document.querySelectorAll(".text-button");
let content = document.querySelectorAll(".man")

tbuttons.forEach(b => {
  b.addEventListener("click", () => {
    content.forEach(c => {
      c.classList.add('hide')
    })
    content[b.id].classList.remove('hide')
    content[b.id].classList.add('open')
  })
  
});