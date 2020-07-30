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




    this.render = function() {
        ctx.drawImage(this.flower, this.srcX, this.srcY, this.spriteWid, this.spriteHei, this.x, this.y, this.spriteWid, this.spriteHei);



        // for (let i = 0; i < this.body.length; i++) {

        //     ctx.fillRect(this.body[i].x, this.body[i].y, this.width, this.height);
        //     console.log(this.body[i]);

        // }
        // //ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.update = function () {

        this.currentFrame = ++this.currentFrame % this.cols;
        this.srcX = this.currentFrame * this.spriteWid;
        this.srcY = 1;


        for (let i = 0; i < this.body.lenght -1; i++) {
            console.log(this.body[i]);
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
                this.xSpeed = 0;
                this.ySpeed = -20;
                this.srcY = 2;
                break;
            case (40):
                this.xSpeed = 0;
                this.ySpeed = 20;
                this.srcY = 0;
                break;
            case (37):
                this.xSpeed = -20;
                this.ySpeed = 0;
                this.srcY = 3;
                break;
            case (39):
                this.xSpeed = 20;
                this.ySpeed = 0;
                this.srcY = 1;
                break;
          default:
            console.log('invalid keystroke');
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
          score += 100;
          console.log(score);
          //score.textContent(score);
          let numb1 = Math.floor(Math.random() * eatAudio.length);
          eatAudio[numb1].play();

          food.alive = false;
          let varX = Math.floor(Math.random() * (game.width - 20));
          let varY = Math.floor(Math.random() * (game.height - 20));
          food = new Crawler(varX, varY, 20, 20, 'enemy1.png', 138, 37, 5, 1);

      }
  }
