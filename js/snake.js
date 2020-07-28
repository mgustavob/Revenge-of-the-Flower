function Crawler(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.xSpeed = 10;
    this.ySpeed = 0;
    this.body = [];
    this.color = color;
    this.alive = true;
    this.render = function() {
        ctx.fillStyle = this.color;

        for (let i = 0; i < this.body.length; i++) {

            ctx.fillRect(this.body[i].x, this.body[i].y, this.width, this.height);
            console.log(this.body[i]);

        }
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.update = function () {

        for (let i = 0; i < this.body.lengt -1; i++) {
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
                this.ySpeed = -10;
                break;
            case (40):
                this.xSpeed = 0;
                this.ySpeed = 10;
                break;
            case (37):
                this.xSpeed = -10;
                this.ySpeed = 0;
                break;
            case (39):
                this.xSpeed = 10;
                this.ySpeed = 0;
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
          console.log('collision');
          totalBody ++;
          let numb1 = Math.floor(Math.random() * 4);
          eatAudio[numb1].play();
          food.alive = false;
          let varX = Math.floor(Math.random() * (game.width - 20));
          let varY = Math.floor(Math.random() * (game.height - 20));
          food = new Crawler(varX, varY, 20, 20, '#bada55');

      }
  }
