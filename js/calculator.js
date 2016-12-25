
(function(){

"use strict";


var lefty = document.getElementById("displayLeft");
var middle = document.getElementById("displayMiddle");
var righty = document.getElementById("displayRight");
var operators = document.getElementsByClassName("operator");
var numberPad = document.getElementsByClassName("numPad");
var equation = document.getElementById("evaluate");
var posOrNeg = document.getElementById("posNeg");
var decimal = document.getElementById('decimal');
var clear = document.getElementById('clears')


clear.addEventListener('click', function () {
    lefty.value = ("");
    middle.value = ("");
    righty.value = ("");
});

for (var i = 0; i < numberPad.length; i++) {
    numberPad[i].addEventListener('click', function() {
        if (middle.value == "") {
            lefty.value = (lefty.value + this.innerHTML)
        } else if (middle.value == "=") {
            lefty.value = ("");
            middle.value = ("");
            righty.value = ("");
            lefty.value = (lefty.value + this.innerHTML)
        } else {
            righty.value = (righty.value + this.innerHTML)
        }
    })
}

// -----Zero Button -----//
document.getElementById('zero')
    .addEventListener('click', function() {
        if (middle.value == "") {
            if(lefty.value.charAt(0) != "0") {
                lefty.value = (lefty.value + this.innerHTML)
            }else if (lefty.value.charAt(0) == "0" && lefty.value.charAt(1) > "0") {
                lefty.value = (lefty.value + this.innerHTML)
            }
        } else if(middle.value == "="){
            lefty.value = ("");
            middle.value = ("");
            righty.value = ("");
            lefty.value = (lefty.value + this.innerHTML)
        }else {
            if(righty.value.charAt(0) != "0") {
                righty.value = (righty.value + this.innerHTML)
            }else if (righty.value.charAt(0) == "0" && righty.value.charAt(1) > "0") {
                righty.value = (righty.value + this.innerHTML)
            }
        }
    });


// ----- Operators -----//
for (var j = 0; j < operators.length; j++) {
    operators[j].addEventListener('click', function () {
        var RV = parseFloat(righty.value);
        var LV = parseFloat(lefty.value);
        middle.value = this.innerHTML;
        if (lefty.value != "" && righty.value != "" && middle.value != "") {
            if(middle.value == "+"){
                lefty.value = RV + LV;
                righty.value = "";
            }else if(middle.value == "-"){
                lefty.value = LV - RV;
                righty.value = "";
            }else if(middle.value == "x"){
                lefty.value = RV * LV;
                righty.value = "";
            }else if(middle.value == "÷"){
                lefty.value = RV / LV;
                righty.value = "";
            }
        }
    })
}


// ----- Evaluate the numbers -----//
equation.addEventListener('click', function () {
    var RV = parseFloat(righty.value);
    var LV = parseFloat(lefty.value);
    switch (middle.value) {
        case "+":
            lefty.value = RV + LV;
            break;
        case "-":
            lefty.value = LV - RV;
            break;
        case "x":
            lefty.value = RV * LV;
            break;
        case "÷":
            lefty.value = RV / LV;
            break;
    }
    righty.value = "";
    middle.value = "=";
});


// ------ Decimal -- only occurs once---- //
decimal.addEventListener('click', function() {
    if (middle.value == "") {
        if(lefty.value % 1 == 0) {
            lefty.value = (lefty.value + this.innerHTML);
        }
    } else {
        if(righty.value % 1 == 0) {
            righty.value = (righty.value + this.innerHTML);
        }
    }
});


// ------ Convert number to Positive or Negative -----//
posOrNeg.addEventListener('click', function () {
    if (middle.value == "") {
        if(Math.abs(lefty.value) == lefty.value){
            lefty.value = -Math.abs(lefty.value)
        }else {
            lefty.value = Math.abs(lefty.value)
        }
    }else {
        if (Math.abs(righty.value) == righty.value) {
            righty.value = -Math.abs(righty.value)
        } else {
            righty.value = Math.abs(righty.value)
        }
    }
});

})();
