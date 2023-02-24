let range = document.getElementById("range")
let msg = document.getElementById("info")
let wrapper = document.getElementById("wrapper")

Now = new Date();
Hour = Now.getHours();
Minutes = Now.getMinutes()

range.value = Hour;

msg.innerHTML = Hour + ':' + Minutes;
wrapper.style.backgroundPositionX = -Hour * 10;


range.addEventListener("input", rangeUpdate)

function rangeUpdate() {
    wrapper.style.backgroundPositionX  = -range.value * 5 + '%';
    msg.innerHTML = range.value + ':' + Minutes;
}