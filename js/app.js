let gameActive = true;
let movementDisplay;
let ctx
let game;
let snake;
let food;
let eatAudio1 = new Audio('sounds/eat1.wav');
let eatAudio2 = new Audio('sounds/eat2.wav');
let eatAudio3 = new Audio('sounds/eat3.wav');
let eatAudio4 = new Audio('sounds/eat4.wav');
let eatAudio = [eatAudio1, eatAudio2, eatAudio3, eatAudio4];
//let menuAudio = new Audio(src: );
let gameAudio1 = new Audio('sounds/mainGame1.mp3');
let gameAudio2 = new Audio('sounds/mainGame2.mp3');
let score = document.getElementById('currentScore');
let mvp = 0;


//let numb2 = Math.floor(Math.random() * eatAudio.length);

let totalBody = 0;
let score1 = 0;
let flower = [];
