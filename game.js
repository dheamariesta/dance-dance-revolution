var Game = function() {
    //Get score value for player one from html
    var score = document.getElementById('score').innerText;
    score = parseInt(score);

    //Get score value for player two from html
    var scoreTwo = document.getElementById('score-two').innerText;
    scoreTwo = parseInt(scoreTwo);

    //Get background song from html
    var audio = document.getElementById('song');
    var audiolistener = false;            //check if background song has ended
    audio.addEventListener("ended", function(){   //if song has ended
      win();  //declare win
      audiolistener = true; //set song has ended to true
    });

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

    // Interactions
    var interactions = {};
    interactions.space = false;           // Space key pressed

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

      var hover = $('#mousehover')[0]; //sound  effect when mouse hover a link
      $('a').mouseenter(function(){
        hover.play();
      });

      var click = $('#mouseclick')[0]; //sound  effect when mouse click a link
      $('a').click(function(){
        click.play();
      });
    }

    //To generate new balls
    function generateNewBall(){
      if (!audiolistener){ //if song has not ended
        var random = Math.floor(Math.random() * 2); //two combination of interval to generate ball
        if(random == 0){
          random = 84; //one beat = 84 frame
        } else if(random == 1){
          random = 42; //half beat
        }
        if(frame % random ==0){ //generate new ball for both player one and player two
          var player = new Ball(settings);
          var playerTwo = new BallPlayerTwo(settings);
          assets.push(player);
          assets.push(playerTwo);
        }
      }
    }

    function win(){
      //get score for player one
      var score = document.getElementById('score').innerText;
      score = parseInt(score);

      //get score for player two
      var scoreTwo = document.getElementById('score-two').innerText;
      scoreTwo = parseInt(scoreTwo);

      //set the gameover announcement to display:block to make it visible
      var gameover = document.getElementById('gameover');
      gameover.style.display = 'block';

      //play the sound effect
      var applause = document.getElementById('applause');
      applause.play();
      var cheer = document.getElementById('cheer');
      cheer.play();

      //get the announcement
      var playeronewins = document.getElementById('playeronewins');
      var playertwowins = document.getElementById('playertwowins');
      var draw = document.getElementById('draw');
      //announce accordingly
      if (score > scoreTwo){
        playertwowins.style.display = 'none';
        draw.style.display = 'none';
      } else if(scoreTwo > score){
        playeronewins.style.display = 'none';
        draw.style.display = 'none';
      } else {
        playertwowins.style.display = 'none';
        playeronewins.style.display = 'none';
      }
    }

    // Startup the game
    function init(){
      setupEvents();
    }

    // The render function. It will be called 60/sec
    this.render = function(){
      generateNewBall();

      if(audiolistener == false){ //if song has not ended
        for(var i=0; i < assets.length; i++){ //keep rendering
            assets[i].render(interactions);
        }
        frame++;
      } else { //else stop rendering and delete all balls from screen
        var balls = document.getElementsByClassName('ball');
        var ballTwos = document.getElementsByClassName('ball-two');
        for(var i = 0; i< balls.length; i++){
          document.body.removeChild(balls[i]);
          document.body.removeChild(ballTwos[i]);
        }
        frame = 0;
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
