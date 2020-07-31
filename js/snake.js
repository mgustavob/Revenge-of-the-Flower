function Crawler(x, y, width, height, image, imgWidth, imgHeight, cols, rows) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.xSpeed = 0;
    this.ySpeed = 0;
    this.body = [];
    this.alive = true;
    this.flower = new Image();
    this.flower.src = image;
    this.imgWidth = imgWidth;
    this.imgHeight = imgHeight;
    this.cols = cols;
    this.rows = rows;
    this.spriteWid = imgWidth / cols;
    this.spriteHei = imgHeight / rows;
    this.currentFrame = 0;
    this.srcX;
    this.srcY;
    this.srcY = 0;





    this.render = function() {

                for (let i = 0; i < this.body.length; i++) {
                    ctx.fillStyle = 'greenyellow';
                    ctx.fillRect(this.body[i].x, this.body[i].y, this.width, this.height);
                    //console.log(this.body[i]);

                }
        ctx.drawImage(this.flower, this.srcX, this.srcY, this.spriteWid, this.spriteHei, this.x, this.y, this.spriteWid, this.spriteHei);
       // console.log(this.srcY);

        // //ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.update = function () {

        this.currentFrame = ++this.currentFrame % this.cols;
        this.srcX = this.currentFrame * this.spriteWid;

        //this.gameOver ();


        for (let i = 0; i < this.body.length -1; i++) {
            //console.log(this.body[i]);
            this.body[i] =this.body[i+1];
        }

        this.body[totalBody - 1] = {x: this.x, y: this.y};

        this.x += this.xSpeed;
        this.y += this.ySpeed;
        // making if so that if it hits a wall it will go arround the other corner
        if (this.x > game.width) {
            this.x = 0;
        }
        if (this.x < 0) {
            this.x = game.width;
        }
        if (this.y > game.height) {
            this.y = 0;
        }
        if (this.y < 0) {
            this.y = game.height;
        }
    }
    this.newDirec = function(direct) {
        switch (direct) {

            case (38):
                if (this.ySpeed != -20) {
                this.xSpeed = 0;
                this.ySpeed = -20;
                this.srcY = 2 * this.spriteHei;}
                break;
            case (40):
                if (this.ySpeed != 20) {
                this.xSpeed = 0;
                this.ySpeed = 20;
                this.srcY = 3 * this.spriteHei; }
                break;
            case (37):
                if (this.xSpeed != -20) {
                this.xSpeed = -20;
                this.ySpeed = 0;
                this.srcY = 1 * this.spriteHei; }
                break;
            case (39):
                if (this.xSpeed != 20) {
                this.xSpeed = 20;
                this.ySpeed = 0;
                this.srcY = 0 * this.spriteHei; }
                break;
          default:
            console.log('invalid keystroke');
      }
    }
}


function Food(x, y, width, height, image, imgWidth, imgHeight, cols, rows) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.xSpeed = 0;
    this.ySpeed = 0;
    this.alive = true;
    this.flower = new Image();
    this.flower.src = image;
    this.imgWidth = imgWidth;
    this.imgHeight = imgHeight;
    this.cols = cols;
    this.rows = rows;
    this.spriteWid = imgWidth / cols;
    this.spriteHei = imgHeight / rows;
    this.currentFrame = 0;
    this.srcX;
    this.srcY;
    this.srcY = 0;





    this.render = function() {

        ctx.drawImage(this.flower, this.srcX, this.srcY, this.spriteWid, this.spriteHei, this.x, this.y, this.spriteWid, this.spriteHei);
       // console.log(this.srcY);

        // //ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.update = function () {

        this.currentFrame = ++this.currentFrame % this.cols;
        this.srcX = this.currentFrame * this.spriteWid;
    }
}



function gameOver () {
    container1.style.display='none';
    container2.style.display='block';
    game.style.display='none';
    gameAudio1.pause();
    if (score1 > mvp) {
        lastContainer.textContent = 'Congratulations you are the new MVP with: '+score1+' points! Please press Try Again to restart';
        mvp = score1;
        mvp1.textContent = mvp;

    }
     else if (score1 < mvp) {
        lastContainer.textContent = 'Better Luck next time, your score of: '+score1+' points falls short to the massive MVP score of: '+mvp+' points! Please press try again to restart';

    }
    clearInterval(intervalId);
    snake.Alive = false;
    snake.body = null;
}

const detectSnakeBody = () => {
    for (let i = 0; i < snake.body.length; i++) {
        if (snake.x === snake.body[i].x &&
          snake.y === snake.body[i].y) {
            gameActive = false
            gameOver();
            //return gameActive;
          }

    }
}



const detectHit = () => {
    //check for colission on x axis
    if (snake.x + snake.width > food.x &&
        snake.x < food.x + food.width &&
          snake.y + snake.height > food.y &&
          snake.y < food.y + food.height) {
          //console.log('collision');
          totalBody ++;
          score1 += 100;
          //score.textContent(score);
          let numb1 = Math.floor(Math.random() * eatAudio.length);
          eatAudio[numb1].play();
          score.textContent = score1;
          food.alive = false;
          let varX = Math.floor(Math.random() * (game.width - 20));
          let varY = Math.floor(Math.random() * (game.height - 20));
          food = new Food(varX, varY, 20, 20, 'mario1.png', 181, 29, 9, 1);

        }
  }
