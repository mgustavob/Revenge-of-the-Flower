document.addEventListener('DOMContentLoaded', () => {
    // console.log('Dom loaded')
    // DOM REFS
    movementDisplay = document.getElementById('movement');
    game = document.getElementById('game');
    // CANVAS CONFIG
    game.setAttribute('height', 400);
    game.setAttribute('width', 500);
    ctx = game.getContext('2d');
    // CHARACTER REFS
    food = new Crawler(100, 100, 20, 20, '#bada55');
    snake = new Crawler(20, 20, 20, 20, 'hotpink');
    score = 
    document.addEventListener('keydown', ((e) => {
       // console.log(e);
        const direct = e.keyCode;
        snake.newDirec(direct);
    }));
    window.setInterval(() => {
        // thi is so that the snake doesnt live a trail unless he eats the apple
        ctx.clearRect(0, 0, game.width, game.height);
        snake.update();
        snake.render();
        food.render();
        detectHit();
    }, 200);
});
