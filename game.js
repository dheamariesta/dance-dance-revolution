var Game = function() {
    var score = document.getElementById('score').innerText;
    score = parseInt(score);
    // Game settings
    var settings = {};                     // Containes all game settings
    settings.ballSpeed = 1;                // The speed of the ball
    settings.walls = true;                 // The ball can not go outside the screen
    settings.score = score;
    settings.frame = 0;
    settings.ballStatus = null;

    // World settings
    var assets = [];                      // All game objects
    var frame = 0;
    var target = new Target(settings);
    assets[0] = target;                     // Frames since the start of the game



    // Interactions
    var interactions = {};
    interactions.space = false;           // Speace key pressed

    // Setup event listeners
    function setupEvents() {
      document.addEventListener('keyup', function(event){
        var keyName = event.key;

        switch(keyName) {
          case " ":
              interactions.space = false;
              $('#score').text(settings.score);
              break;
          default:
              break;
        }
      });
      document.addEventListener('keydown', function(event){
        var keyName = event.key;

        switch(keyName) {
          case " ":
              interactions.space = true;

              break;
          default:
              break;
        }
      });
    }

    function generateNewBall(){
      if(frame % 120 ==0){
        var player = new Ball(settings);
        assets.push(player);
      }
    }

    function removeBall(){
      if (assets[1].style.left < -50 + "px"){
        assets.splice(1,1);
        var child = document.getElementsByClassName('ball')[0];
        document.body.removeChild(child);
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
