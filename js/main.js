movementDisplay = document.getElementById('movement');

container1 = document.getElementById('container1');
container2 = document.getElementById('container2');
start = document.getElementById('start');
restart = document.getElementById('restart');
game = document.getElementById('game');
score = document.getElementById('currentScore');

lastConainer = document.getElementById('lastContainer');
mvp1 = document.getElementById('mvp');
game.setAttribute('height', 400);
game.setAttribute('width', 500);
ctx = game.getContext('2d');
document.getElementById('start').addEventListener('click', gameStart);
document.getElementById('restart').addEventListener('click', gameStart);

let intervalId;
function gameStart() {
    score1 = 0;
    totalBody = 0;
    container1.style.display='none';
    container2.style.display='none';
    game.style.display='block';
    food = new Food(100, 100, 20, 20, 'enemy1.png', 138, 37, 5, 1);
    snake = new Crawler(20, 20, 20, 20, 'flowerHead.png', 40, 80, 2, 4);

    document.addEventListener('keydown', ((e) => {
        const direct = e.keyCode;
        snake.newDirec(direct);
    }));
    intervalId = setInterval(() => {
        // thi is so that the snake doesnt live a trail unless he eats the apple
        ctx.clearRect(0, 0, game.width, game.height);


        gameAudio1.play();
        snake.update();
        snake.render();
        food.update();
        food.render();
        detectSnakeBody();
        detectHit();
        //console.log(intervalId);

    }, 100);


}

function restartGame () {

    //clearInterval(intervalId);
    gameStart();
}








// document.addEventListener('DOMContentLoaded', () => {
//     // console.log('Dom loaded')
//     // DOM REFS
//     movementDisplay = document.getElementById('movement');


//     game = document.getElementById('game');
//     container1 = document.getElementById('container1');
//     container2 = document.getElementById('container2');
//     lastConainer = document.getElementById('lastContainer');
//     mvp1 = document.getElementById('mvp');
//     // CANVAS CONFIG
//     game.setAttribute('height', 400);
//     game.setAttribute('width', 500);
//     ctx = game.getContext('2d');
//     document.addEventListener('keydown', ((e) => {
//         container1.style.display='none';
//         container2.style.display='none';
//         game.style.display='block';
//        // console.log(e);
//         const direct = e.keyCode;
//         snake.newDirec(direct);
//         gameActive = true;
//         //snake.update();
//     }));
//     // CHARACTER REFS
//     food = new Crawler(100, 100, 20, 20, 'enemy1.png', 138, 37, 5, 1);
//     snake = new Crawler(20, 20, 20, 20, 'flowerHead.png', 40, 80, 2, 4);
//     //score = document.getElementById('scoreBoard');
//     window.setInterval(() => {
//         // thi is so that the snake doesnt live a trail unless he eats the apple
//         ctx.clearRect(0, 0, game.width, game.height);
//         detectSnakeBody();
//         detectHit();

//         gameAudio1.play();
//         //gameAudio2.setVolume(0.5);
//         snake.update();
//         snake.render();
//         food.update();
//         food.render();

//     }, 250);
// });
