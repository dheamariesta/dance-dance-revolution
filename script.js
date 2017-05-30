var Game = function(){

  //Game settings
  var settings = {}; //this is  an object, contains all game settings
    settings.ballSpeed = 5; //speed of ball
    settings.walls = false; //ball cannot go outside the screen
    settings.automatic = true; //ball will move by itself;


  //World settings
  var assets = [];

  //Game objects
  var tiles = new Ball(settings);

  assets[0] = tiles;
  var frame = 0; //no of frames since the start of the game

  //Interactions
  var interactions = {};
  interactions.left = false;

  function setupEvents(){

    document.addEventListener('click', function(event){
      interaction.left = true;
    });
  }

  function init(){
    setupEvents();
  }

  function render(){
    for (var i = 0; i < assets.length; i++){
      assets[i].render(interactions);
    }

  }
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
            render();
          })();

          init();

}

var g = new Game();
