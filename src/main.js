import './main.css';

window.onload = function () {
  init();
};

var numCards = 3;
var gameOver = false;
var colors = [];
var pickedColor;
var body = document.querySelector('body');
var cards;
var colorDisplay = document.querySelector('#color-picked');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var resetDisplay = document.querySelector('#reset span');
var cardContainer = document.querySelector('#card-container');
var modeButtons = document.querySelectorAll('.mode-btn');
var whichMode;
var countDownText = document.querySelector('#count-down');
var timerSeconds = 5;
var timer;
var blink;
var x = 1; // global variable, for blink bgColor
var set; // local variable, for blink bgColor

function init() {
  levelMode('easy');
  initCards();
  reset();
}

function initCards() {
  for (var i = 0; i < cards.length; i++) {
    //add click listeners to cards
    cards[i].addEventListener('click', function () {
        if (gameOver)
            return;

        //grab color of clicked card
        var clickedColor = this.style.backgroundColor;

        // alert(this.style.backgroundColor);
        //compare color to pickedColor
        if (clickedColor === pickedColor && timerSeconds >= 0) {
          messageDisplay.textContent = 'Correct!';
          countDownText.innerHTML = '';
          stopPlay();

        } else {
          this.style.opacity = 0;
          messageDisplay.textContent = 'Try Again';
        }

      });
  }
}

function stopPlay() {
  clearInterval(timer);
  clearInterval(blink);

  resetDisplay.textContent = 'Play Again';
  changeColors('#FFF');
  body.style.backgroundColor = pickedColor;
  gameOver = true;
}

function reset() {
  timerSeconds = 5;
  gameOver = false;
  colors = generateRandomColors(numCards);

  //pick a new random color from array
  pickedColor = pickColor();

  //change colorDisplay to match picked Color
  colorDisplay.textContent = pickedColor;
  resetDisplay.textContent = 'New Color';
  messageDisplay.textContent = "What's the Color?";

  //change colors of cards
  for (var i = 0; i < cards.length; i++) {
    cards[i].style.opacity = 1;
    if (colors[i]) {
      cards[i].style.display = 'block';
      cards[i].style.backgroundColor = colors[i];
    } else {
      cards[i].style.display = 'none';
    }
  }

  body.style.backgroundColor = '#232323';
}

modeButtons.forEach(function (modeButton) {
  modeButton.addEventListener('click', modeButtonStyle);
});

function modeButtonStyle(event) {
  modeButtons.forEach(function (modeButton) {
    modeButton.classList.remove('selected-mode-btn');
  });

  event.target.classList.add('selected-mode-btn');
  levelMode(event.target.id);
  whichMode = event.target.id;
}

function levelMode(mode) {
  clearInterval(timer);
  clearInterval(blink);
  cardContainer.innerHTML = '';
  countDownText.innerHTML = '';

  switch (mode) {
    case 'easy':
      numCards = 3;
      break;
    case 'hard':
      numCards = 6;
      break;
    case 'nightmare':
      numCards = 6;
      countDownText.innerHTML = ' ' + timerSeconds;
      timer = setInterval(nightmareTimer, 1000);
      blink = setInterval(blinkBackground, 500);
      break;
    default:
      numCards = 3;
      break;
  }

  for (var i = 0; i < numCards; i++) {
    cardContainer.innerHTML += '<div class="card"></div>';
  }

  cards = document.querySelectorAll('.card');
  initCards();
  reset();
}

function nightmareTimer() {
  timerSeconds -= 1;
  countDownText.innerHTML = ' ' + timerSeconds;

  if (timerSeconds <= 0) {
    clearInterval(timer);
    stopPlay();
    messageDisplay.textContent = 'TIMEOUT!';
    countDownText.innerHTML = '';
  }
}

function blinkBackground() {
  set = 1;
  var blinkColor = body.style.backgroundColor;
  if (x == 0 && set == 1) {
    blinkColor = '#232323';
    x = 1;
    set = 0;
  }

  if (x == 1 && set == 1) {
    blinkColor = '#404040';
    x = 0;
    set = 0;
  }

  body.style.backgroundColor = blinkColor;
  console.log(blinkColor + ' ' + x + ', ' + set);
}

resetButton.addEventListener('click', function () {
  reset();
  levelMode(whichMode);
});

function changeColors(color) {
  //loop through all cards
  for (var i = 0; i < cards.length; i++) {
    //change each color to match given color
    cards[i].style.opacity = 1;
    cards[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  //make an array
  var arr = [];

  //repeat num times
  for (var i = 0; i < num; i++) {
    //get random color and push into arr
    arr.push(randomColor());
  }

  //return that array
  return arr;
}

function randomColor() {
  //Math.random(): a number between 0 and 1, pick a "red" from 0 - 255
  var r = Math.floor(Math.random() * 256);

  //pick a "green" from  0 -255
  var g = Math.floor(Math.random() * 256);

  //pick a "blue" from  0 -255
  var b = Math.floor(Math.random() * 256);
  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}
