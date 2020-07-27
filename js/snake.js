function Crawler(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.alive = true;
    this.render = function() {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }

  const detectHit = () => {
      //check for colission on x axis
      if (hero.x + hero.width > ogre.x &&
          hero.x < ogre.x + ogre.width &&
          hero.y + hero.height > ogre.y &&
          hero.y < ogre.y + ogre.height) {
          console.log('collision');
          ogre.alive = false;
      }
  }

  const gameLoop = () => {
    // console.log('looping in 💩')
    // clear the cavas
    ctx.clearRect(0, 0, game.width, game.height);
    // display the x, y coordinates of our hero onto the DOM
    movementDisplay.textContent = `X:${hero.x}\nY:${hero.y}`;
    // check if the ogre is alive and
    if (ogre.alive) {
      // render the ogre
      ogre.render()
      // check for collision
      // TODO detectHit()
      detectHit();
    }
    // render the hero
    hero.render()
  }
  const movementHandler = e => {
   // console.log(e)
    // w: 87, a:65, s:83, d:68
    switch (e.keyCode) {
      case (87): // w up
        if (hero.y > 0) hero.y -=5
        break;
      case (83): // s down
        if (hero.y + hero.height < game.height) hero.y +=5
        break;
      case (65): // a left
        if (hero.x > 0) hero.x -=5
        break;
      case (68): // d right
        if (hero.x + hero.width < game.width) hero.x +=5
        break;
      default:
        console.log('invalid keystroke');
    }
  }
  
