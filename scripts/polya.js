var ALPHA = 1;
var BETA = 1;
var ITERATIONS = 8;
var INTERVAL = 0.05;

var colours = ["Red", 
	       "Green", 
	       "Yellow", 
	       "Blue", 
	       "Orange", 
	       "Purple"]

var urn = [1,1];
urn = [1,2,3];


function proportional_random(counts) {
    var s = counts.reduce(function(a, b) { return a + b; }, 0);
    var r = Math.floor(Math.random() * (s+1));
    function greater(n, i, sofar, arr) {
	if (sofar + arr[0] >= n) {
	    return i;
	} else {
	    return greater(n, i+1, sofar+arr[0], arr.slice(1, arr.length));
	}
    };
    return greater(r, 0, 0, counts);
};

function polya_draw_from(urn) {
    var i = proportional_random(urn);
    return [i, urn.slice(0,i).concat(urn[i]+BETA).concat(urn.slice(i+1, urn.length))];
};

function print_urn(e) {
    var urn_string = "";
    urn.forEach(function (element, index) {
	var dashes = "◉".repeat(element);
	urn_string += dashes.fontcolor(colours[index % colours.length]);
	urn_string += "<br>"
    });
    var urn_graphic = document.getElementById("urn");
    urn_graphic.innerHTML = urn_string;
};

function change_word(e) {
    var word = document.getElementById("word");
    word.innerHTML = "Hello, world!";
    word.innerHTML = proportional_random(urn);
};

document.getElementById("our-button").addEventListener("click", change_word);
document.getElementById("print-urn").addEventListener("click", 
  function (e) {
      print_urn(e);
  }
);

