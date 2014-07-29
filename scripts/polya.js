
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
    return [i, urn.slice(0,i).concat(urn[i]+beta).concat(urn.slice(i+1, urn.length))];
};

function print_urn() {
    var urn_string = "";
    urn.forEach(function (element, index) {
	var dashes = "◉".repeat(element);
	urn_string += dashes.fontcolor(colours[index % colours.length]);
	urn_string += "<br>"
    });
    urn_graphic.innerHTML = urn_string;
};

function reset(e) {
    urn = initial_urn;
    print_urn();
};

function changeValues(e) {
    alpha = parseInt(alphaSlider.value);
    document.getElementById("alpha-output").innerHTML = alpha;
    beta = parseInt(betaSlider.value);
    document.getElementById("beta-output").innerHTML = beta;
    n = parseInt(nSlider.value);
    document.getElementById("n-output").innerHTML = n;
    initial_urn = Array(n+1).join().split('').map(function(){return alpha})
    reset();
}

function addInteractivity () {
    document.getElementById("reset").addEventListener("click", reset); 
    document.getElementById("draw").addEventListener("click", 
      function (e) {
	  var i_urn = polya_draw_from(urn);
          urn = i_urn[1];
          print_urn();
      }
    );
    alphaSlider.addEventListener("change", changeValues);
    betaSlider.addEventListener("change", changeValues);
    nSlider.addEventListener("change", changeValues);
}

function setSlidersToInitialValues () {
    /* Update slider values with the ones specified above */
    alphaSlider.value = alpha;
    document.getElementById("alpha-output").innerHTML = alpha;
    betaSlider.value = beta;
    document.getElementById("beta-output").innerHTML = beta;
    nSlider.value = n;
    document.getElementById("n-output").innerHTML = n;
}

function init () {
    setSlidersToInitialValues();
    initial_urn = Array(n+1).join().split('').map(function(){return alpha})
    urn = initial_urn;
    print_urn();
    addInteractivity();
}


var initial_urn;
var urn;

var alpha = 1;
var beta = 1;
var n = 2;

/* dom references */
var urn_graphic = document.getElementById("urn");
var alphaSlider = document.querySelector(".alpha-slider");
var betaSlider = document.querySelector(".beta-slider");
var nSlider = document.querySelector(".n-slider");

var colours = ["Red", "Green", "Yellow", "Blue", "Orange", "Purple"]

init();

