var Game = function() {
    var score = document.getElementById('score').innerText;
    score = parseInt(score);

    var scoreTwo = document.getElementById('score-two').innerText;
    scoreTwo = parseInt(scoreTwo);
    var audio = document.getElementById('song');
    // Game settings
    var settings = {};                     // Containes all game settings
    settings.ballSpeed = 1;                // The speed of the ball
    settings.walls = true;                 // The ball can not go outside the screen
    settings.score = score;
    settings.frame = 0;
    settings.ballStatus = null;
    settings.scoreTwo = scoreTwo;

    // World settings
    var assets = [];                      // All game objects
    var frame = 0;
    var target = new Target(settings);
    var targetTwo = new TargetTwo(settings);
    assets[0] = target;                     // Frames since the start of the game
    assets[1] = targetTwo;
    console.log(assets);


    // Interactions
    var interactions = {};
    interactions.space = false;           // Speace key pressed

    // Setup event listeners
    function setupEvents() {
      document.addEventListener('keyup', function(event){
        var keyName = event.key;

        switch(keyName) {
          case "w":
              interactions.up = false;
              $('#score').text(settings.score);
              break;
          case "a":
              interactions.left = false;
              $('#score').text(settings.score);
              break;
          case "s":
              interactions.down = false;
              $('#score').text(settings.score);
              break;
          case "d":
              interactions.right = false;
              $('#score').text(settings.score);
              break;
          case "ArrowUp":
              interactions.up2 = false;
              $('#score-two').text(settings.scoreTwo);
              break;
          case "ArrowLeft":
              interactions.left2 = false;
              $('#score-two').text(settings.scoreTwo);
              break;
          case "ArrowDown":
              interactions.down2 = false;
              $('#score-two').text(settings.scoreTwo);
              break;
          case "ArrowRight":
              interactions.right2 = false;
              $('#score-two').text(settings.scoreTwo);
              break;
          case " ":
              // interactions.space = false;
              // $('#score').text(settings.score);
              break;
          default:
              break;
        }
      });

      audio.addEventListener("ended", function(){
        alert('game over');
      });
      document.addEventListener('keydown', function(event){
        var keyName = event.key;

        switch(keyName) {
          case "w":
              interactions.up = true;
              break;
          case "a":
              interactions.left = true;
              break;
          case "s":
              interactions.down = true;
              break;
          case "d":
              interactions.right = true;
              break;
          case "ArrowUp":
              interactions.up2 = true;
              break;
          case "ArrowLeft":
              interactions.left2 = true;
              break;
          case "ArrowDown":
              interactions.down2 = true;
              break;
          case "ArrowRight":
              interactions.right2 = true;
              break;
          case " ":
              interactions.space = true;
              break;
          default:
              break;
        }
      });
    }

    function generateNewBall(){
      if(frame % 36 ==0){
        var player = new Ball(settings);
        var playerTwo = new BallPlayerTwo(settings);
        assets.push(player);
        // console.log(playerTwo)
        assets.push(playerTwo);
      }
    }

    // Startup the game
    function init(){
      setupEvents();
    }

    // The render function. It will be called 60/sec
    this.render = function(){
      generateNewBall();
      // removeBall();
      frame++;
      for(var i=0; i < assets.length; i++){
        assets[i].render(interactions);
      }

    }

    var self = this;
    window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame    ||
              function( callback ){
                window.setTimeout(callback, 1000 / 60);
              };
            })();


            (function animloop(){
              requestAnimFrame(animloop);
              self.render();

            })();

            init();


}

var g = new Game();
