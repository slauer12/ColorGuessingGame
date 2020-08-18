var numSquares = 6;
var colors;
var pickedColor;

var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var h1Display = document.querySelector("h1");
var colorDisplay = document.querySelector("#colorDisplay");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easybtn");
var hardBtn = document.querySelector("#hardbtn");
var modeBtns = document.querySelectorAll(".mode")

init();

function init() {
  //mode buttons
  for (var i = 0; i < modeBtns.length; i++) {
    modeBtns[i].addEventListener("click", function() {
      modeBtns[0].classList.remove("selected");
      modeBtns[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
      gameSetup(numSquares);
    })
  }
  //setup squares
  for (var i = 0; i < squares.length; i++) {
    //Click Event
    squares[i].addEventListener("click", function() {
      //get color of square and compare to pickedColor
      var clickedColor = this.style.backgroundColor;
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        h1Display.style.backgroundColor = clickedColor;
        resetButton.textContent = "Play Again?";
        changeColors(clickedColor);
      }else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again"
      }
    });
  }
  gameSetup(numSquares);
}

colorDisplay.textContent = pickedColor;

resetButton.addEventListener("click", function() {
  gameSetup(numSquares);
})

function changeColors(color) {
  //loop all squares
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
};

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
};

function colorGenerator(number) {
  //array
  var arr = []
  //add number random colors to array
  for (var i = 0; i < number; i++) {
    arr.push(randomColor());
  };
  //return array
  return arr
};

function randomColor() {
  //pick r, g, & b
  var r = Math.floor(Math.random()*256);
  var g = Math.floor(Math.random()*256);
  var b = Math.floor(Math.random()*256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
};

function gameSetup(num) {
  colors = colorGenerator(num);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  h1Display.style.backgroundColor = "steelblue";
  messageDisplay.textContent = "";
  resetButton.textContent = "New Colors";
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    }else {
      squares[i].style.display = "none";
    }
  }
}
