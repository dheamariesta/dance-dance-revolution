var Ball = function(settings) {

    // Settings
    var ballElement = null;
    var target = document.getElementById('target');
    var ballStatus = null;

    var startButton = document.getElementById('start');
    var start = false;

    function wall() {

      var x_right = parseInt(ballElement.style.left)  + parseInt(ballElement.style.width);
      var x_left = parseInt(ballElement.style.left);
      var y_top = parseInt(ballElement.style.top);
      var y_bottom = parseInt(ballElement.style.top) + parseInt(ballElement.style.height);

      var w = parseInt(window.innerWidth);
      var h = parseInt(window.innerHeight);

      if(y_bottom > h){
        ballElement.style.top = (h-parseInt(ballElement.style.height)) + 'px';
      }

      if(y_top < 0){
        ballElement.style.top = '0px';
      }

      // if (x_left < 0){
      //   ballElement.style.left = '0px';
      // }

      if (x_right > w){
        ballElement.style.left = (w - parseInt(ballElement.style.width)) + 'px';
      }
    }

    function move(interactions){
        ballElement.style.left = parseInt(ballElement.style.left)-5+"px";
    }

    // Listen to keyboard input
    function keyListener(interactions){ //to set what happen when keys are pressed

      if(settings.walls){
        wall();
      }
    }


    function create() {
        // Create the object asset
        ballElement = document.createElement('div');
        ballElement.style.top = '400px';
        ballElement.style.left = '1000px';
        ballElement.style.height = '100px';
        ballElement.style.width = '100px';
        var arrow = Math.floor(Math.random() * 4);
        // console.log(arrow);
        switch (arrow) {
          case 0:
                ballElement.style.backgroundImage= "url('./images/ArrowUp.png')";
                settings.ballStatus = "up";
                // console.log(settings.ballStatus);
                break;
          case 1:
                ballElement.style.backgroundImage = "url('./images/ArrowLeft.png')";
                settings.ballStatus = "left";
                // console.log(settings.ballStatus);
                break;
          case 2:
                ballElement.style.backgroundImage = "url('./images/ArrowDown.png')";
                settings.ballStatus = "down";
                // console.log(settings.ballStatus);
                break;
          case 3:
                ballElement.style.backgroundImage = "url('./images/ArrowRight.png')";
                settings.ballStatus = "right";
                // console.log(settings.ballStatus);
                break;
          default:

        }


        ballElement.style.position = 'absolute';
        ballElement.style.borderRadius = '50px';
        ballElement.className = "ball";

        document.body.appendChild(ballElement);
    }

    function init(){
      create();
    }

    this.render = function(interactions){
      move(interactions);
    }

    init();
}
