var numSquare = 6;
var colors = [];
var pickedColor;

var square = document.querySelectorAll(".square");
var displayColor = document.getElementById("displayColor");
displayColor.textContent = pickedColor;
var displayMessage = document.getElementById("message");
var h1 = document.querySelector("h1");
var playButton = document.querySelector("#play");
var mode = document.querySelectorAll(".mode");


init();

function init() {

    setUpModeButtons();
    setUpColorsSquares();
    reset();

}

function setUpModeButtons() {
    //mode buttons easy and hard ones
    for (var i = 0; i < mode.length; i++) {
        mode[i].addEventListener("click", function () {
            mode[0].classList.remove("selected");
            mode[1].classList.remove("selected");
            this.classList.add("selected")
            if (this.textContent === "Easy") {
                numSquare = 3;
            } else {
                numSquare = 6;
            }

            reset();
        });
    }
}

function setUpColorsSquares() {
    for (var i = 0; i < square.length; i++) {
        //click and find right color
        square[i].addEventListener("click", function () {
            var clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) {
                displayMessage.textContent = "Correct!";
                playButton.textContent = "Play again?";
                changeColor(clickedColor);
                h1.style.backgroundColor = pickedColor;
                displayMessage.style.backgroundColor = pickedColor;


            }
            else {
                this.style.backgroundColor = "#232323";
                displayMessage.textContent = "Try again";
            }
        })
    }
}

function reset() {
    // colors in array from randommaker()
    colors = randomCollect(numSquare);
    // pick new random color from array
    pickedColor = randomColor();
    // dislay picked color on the screen 
    displayColor.textContent = pickedColor;
    //play button become New colors again
    playButton.textContent = "New colors";
    //mesage correct or try again space becomes empty again
    displayMessage.textContent = " ";
    // set color for every square
    for (var i = 0; i < square.length; i++) {
        if (colors[i]) {
            // assign color for each square from array
            square[i].style.backgroundColor = colors[i];
            square[i].style.display = "block";
        } else {
            square[i].style.display = "none";
        }




    }
    h1.style.backgroundColor = "steelblue";
    displayMessage.style.backgroundColor = "blanchedalmond";
}



playButton.addEventListener("click", function () {

    reset();

});

// change color to pickedColor for every square

function changeColor(color) {
    for (var i = 0; i < square.length; i++) {
        square[i].style.backgroundColor = color;
    }
}


// choose random color from colors array for pickedColor

function randomColor() {
    var random = Math.floor(Math.random() * colors.length)
    return colors[random];
}


// make rgb color for pushing to empty array of colors which calls specific funcition 


function randomMaker() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + " " + g + "," + " " + b + ")";
}


// collect random rgb colors from randomMaker() Function

function randomCollect(num) {
    arr = [];
    for (var i = 0; i < num; i++)
        arr.push(randomMaker());
    return arr;
}
