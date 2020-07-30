document.addEventListener('DOMContentLoaded', () => {
    // console.log('Dom loaded')
    // DOM REFS
    movementDisplay = document.getElementById('movement');
    let slider = document.getElementById('btm-left');

    game = document.getElementById('game');
    // CANVAS CONFIG
    game.setAttribute('height', 400);
    game.setAttribute('width', 500);
    ctx = game.getContext('2d');
    // CHARACTER REFS
    food = new Crawler(100, 100, 20, 20, 'enemy1.png', 138, 37, 5, 1);
    snake = new Crawler(20, 20, 20, 20, 'flowerHead.png', 40, 80, 2, 4);
    //score = document.getElementById('scoreBoard');
    document.addEventListener('keydown', ((e) => {
       // console.log(e);
        const direct = e.keyCode;
        snake.newDirec(direct);
        //snake.update();
    }));
    window.setInterval(() => {
        // thi is so that the snake doesnt live a trail unless he eats the apple
        ctx.clearRect(0, 0, game.width, game.height);

        gameAudio1.play();
        //gameAudio2.setVolume(0.5);
        snake.update();
        snake.render();
        food.update();
        food.render();
        detectHit();
    }, 250);
});
