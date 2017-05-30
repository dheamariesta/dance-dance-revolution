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

    function checkKeys(interactions){
        if(interactions.up && ballStatus == "up"){
          hit(interactions.up);
        } else if (interactions.left && ballStatus == "left"){
          hit(interactions.left);
        } else if (interactions.down && ballStatus == "down"){
          hit(interactions.down);
        } else if(interactions.right && ballStatus == "right"){
          hit(interactions.right);
        }
    }

    function hit(keyDown){
      if(keyDown){
        if (ballHit == true){
          keyDown = false;
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
          keyDown = false;
          ballHit = false;
        }

      }

    }

    function init(){
      targetElement = document.getElementById('target');

      targetElement.style.top = '400px';
      targetElement.style.left = '150px';
      targetElement.style.height = '100px';
      targetElement.style.width = '100px';
    }

    this.render = function(interactions){
      // hit(interactions);
      getBallStatus();
      checkKeys(interactions);
      if(ballElement[0].style.left < -25 + "px"){
        removeBall(ballElement[0]);
      }
    }

    init();
}
