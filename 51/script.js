let msg = document.getElementById("msg");
let img = document.getElementById("image");

Now = new Date();
Hour = Now.getHours();
if (Hour < 5) {
    msg.innerHTML ="stars are out. make a wish."
    img.src = "./src/g4.gif"
} else if(Hour < 12){
    msg.innerHTML ="good morning! did you catch the sunrise?"
    img.src = "./src/g1.gif"
} else if(Hour < 18){
    msg.innerHTML ="good afternoon! have you taken a break?"
img.src = "./src/g2.gif"
} else if (Hour < 24) {
    msg.innerHTML ="good evening. hope you had a good day."
    img.src = "./src/g3.gif"
}