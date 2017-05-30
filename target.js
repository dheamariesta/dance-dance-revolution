var Target = function(settings) {

    // Settings
    var ballElement = document.getElementsByClassName('ball');
    // console.log(ballElement)
    var targetElement = document.getElementById('target');
    var ballHit = false;
    var score = settings.score;
    var ballStatus = null;


    function getBallStatus(){
      if(ballElement[0].style.backgroundImage == 'url("./images/ArrowUp.png")'){
        ballStatus = "up";
        console.log(ballStatus);
      } else if(ballElement[0].style.backgroundImage == 'url("./images/ArrowLeft.png")'){
        ballStatus = "left";
        console.log(ballStatus);
      } else if(ballElement[0].style.backgroundImage == 'url("./images/ArrowDown.png")'){
        ballStatus = "down";
        console.log(ballStatus);
      } else if(ballElement[0].style.backgroundImage == 'url("./images/ArrowRight.png")'){
        ballStatus = "right";
        console.log(ballStatus);
      }
    }

    function removeBall(ball){
      document.body.removeChild(ball);
    }

    function hit(interactions){
      if(interactions.space){
        if (ballHit == true){
          interactions.space = false;
        } else {
          var ballRect = ballElement[0].getBoundingClientRect();
          var targetRect = targetElement.getBoundingClientRect();
          if(targetRect.left + targetRect.width > ballRect.left &&
          targetRect.left < ballRect.right ){
            // getBallStatus();
            ballHit = true;
            score += 100;
            removeBall(ballElement[0]);
            settings.score = score;
            // console.log(score);
          }
          interactions.space = false;
          ballHit = false;
        }

      }

    }



    // Listen to keyboard input
    // function keyListener(interactions){ //to set what happen when keys are pressed
    //
    //   if(settings.walls){
    //     wall();
    //   }
    // }




    function init(){
      targetElement = document.getElementById('target');

      targetElement.style.top = '400px';
      targetElement.style.left = '150px';
      targetElement.style.height = '100px';
      targetElement.style.width = '100px';
    }

    this.render = function(interactions){
      hit(interactions);
      getBallStatus();
      if(ballElement[0].style.left < -25 + "px"){
        removeBall(ballElement[0]);
      }
    }

    init();
}
