console.log("app");
let colors = ['#FFFFF1','#292B2C', '#E298E4', '#2e94b0', '#7B67F3', '#B6FF8E', '#FBFF7B','#FA5F66']

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