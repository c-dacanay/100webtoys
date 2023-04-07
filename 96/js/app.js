console.log("app");
let colors = ['#E298E4', '#2e94b0', '#7B67F3', '#B6FF8E', '#FBFF7B','#FA5F66']

$(document).ready(function() {

    function loadGrammar(name) {
        $("#output").html("");

        var grammar = tracery.createGrammar(grammars[name]);
        $("#grammar").html(grammar.toText());

        for (var i = 0; i < 4; i++) {

            var s = grammar.flatten("#origin#");
            console.log(s);
            var div = $("<div/>", {
                class : "outputSample",
                html : s
            });
            $("#output").append(div);

            const flowers = document.querySelectorAll('h2');
            flowers.forEach(f => {
                f.style.color = colors[getRandom(0, colors.length)];
            })
        }


    }

    setTimeout(function() {
        loadGrammar("flower");

    }, 10);

    $('#grammarSelect').on('change', function() {
        loadGrammar(this.value);
    });
});

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}




let fillcol = colors[getRandom(0, colors.length)];
let flowers = []
let size = 150;

function setup() {
    canvas = createCanvas(size, 600);
    canvas.parent(document.getElementById("flowers"))
    angleMode(DEGREES);
    for (let i = 0; i < 4; i++) {
        flowers.push(new Flower(getRandom(0,10), getRandom(0, 100), colors[getRandom(0, colors.length)], size * i))
    }
  }
  
  function draw() {
    for (let f of flowers) {
        f.display();
    }
  }



  class Flower {
    constructor(n, d, color, pos) {
        this.n = n;
        this.d = d;
        this.color = color;
        this.pos = pos;
        // console.log(pos)
    }

    display() {
        noFill()
        push()
        translate(80, this.pos + size/2);
        // console.log(width/2, this.pos)
        beginShape();
        stroke(this.color);
        strokeWeight(1.5);
        fill('white')
        ellipse(0, 0, 10, 10)
        fill('black')
           for (let i = 0; i<=360; i++){
               let k = i*this.d;
               let r = width/3*sin(this.n*k);
               let x = r*cos(k);
               let y = r*sin(k);
               vertex(x,y);
           }
    endShape(CLOSE);
           pop()
    }
  }