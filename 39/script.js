let colors = ['#FFFFF1','#292B2C', '#E298E4', '#2e94b0', '#7B67F3', '#B6FF8E', '#FBFF7B','#FA5F66']

document.addEventListener('keydown', (e) => {
    console.log('god')
    createCircle();
})

function createCircle() {
  var el = document.createElement("div");
    el.className = "circle"; 
    el.style.border = '80px solid ' + randomColor(100);
    document.body.appendChild(el);
    setTimeout(function(){
        document.body.removeChild(el); // removes circle to prevent too many divs from being created
    },1000)
}

function randomColor(){ 
    return colors[getRandom(0, colors.length)]
}


function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
    }