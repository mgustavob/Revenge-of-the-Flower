let movementDisplay;
let ctx
let game;
let snake;
let food;
let eatAudio1 = new Audio('http://www.rosswalker.co.uk/movie_sounds/sounds_files_20150201_1096714/terminator_2/hasta_la_vista.wav');
let eatAudio2 = new Audio('http://www.rosswalker.co.uk/movie_sounds/sounds_files_20150201_1096714/terminator_2/goodbye.wav');
let eatAudio3 = new Audio('http://www.rosswalker.co.uk/movie_sounds/sounds_files_20150201_1096714/terminator_2/terminator.wav');
let eatAudio4 = new Audio('http://www.rosswalker.co.uk/movie_sounds/sounds_files_20150201_1096714/terminator_1/get_out.wav');
let eatAudio = [eatAudio1, eatAudio2, eatAudio3, eatAudio4];

let totalBody = 0;
let score = 0;
