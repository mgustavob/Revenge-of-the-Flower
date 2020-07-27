

  document.addEventListener('DOMContentLoaded', () => {
    // console.log('Dom loaded')
     // DOM REFS
     movementDisplay = document.getElementById('movement');
     game = document.getElementById('game');
     // CANVAS CONFIG
     game.setAttribute('height', 400);
     game.setAttribute('width', 800);
     ctx = game.getContext('2d');
     // CHARACTER REFS
     ogre = new Crawler(300, 100, 80, 120, '#bada55');
     hero = new Crawler(200, 100, 50, 50, 'hotpink');
     document.addEventListener('keydown', movementHandler);
     let runGame = setInterval(gameLoop, 60);
   })
