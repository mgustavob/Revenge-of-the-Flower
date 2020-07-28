function Crawler(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.xSpeed = 10;
    this.ySpeed = 0;
    this.color = color;
    this.alive = true;
    this.render = function() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.update = function () {
        this.x += this.xSpeed;
        this.y += this.ySpeed;
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
          food.alive = false;
      }
  }
