var TargetTwo = function(settings) {

    // Settings
    var ballElement = document.getElementsByClassName('ball-two');
    // console.log(ballElement)
    var targetElement = document.getElementById('target-two');
    var ballHit = false;
    var scoreTwo = settings.scoreTwo;
    var ballStatus = null;

    function getBallStatus(){
      if(ballElement[0].style.backgroundImage == 'url("./images/ArrowUp.png")'){
        ballStatus = "up";
        // console.log(ballStatus);
      } else if(ballElement[0].style.backgroundImage == 'url("./images/ArrowLeft.png")'){
        ballStatus = "left";
        // console.log(ballStatus);
      } else if(ballElement[0].style.backgroundImage == 'url("./images/ArrowDown.png")'){
        ballStatus = "down";
        // console.log(ballStatus);
      } else if(ballElement[0].style.backgroundImage == 'url("./images/ArrowRight.png")'){
        ballStatus = "right";
        // console.log(ballStatus);
      }
    }

    function removeBall(ball){
      document.body.removeChild(ball);
    }

    function checkKeys(interactions){
        if(interactions.up2 && ballStatus == "up"){
          hit(interactions.up2);
        } else if (interactions.left2 && ballStatus == "left"){
          hit(interactions.left2);
        } else if (interactions.down2 && ballStatus == "down"){
          hit(interactions.down2);
        } else if(interactions.right2 && ballStatus == "right"){
          hit(interactions.right2);
        }
    }

    function hit(keyDown){
      if(keyDown){
        if (ballHit == true){
          keyDown = false;
        } else {
          var ballRect = ballElement[0].getBoundingClientRect();
          var targetRect = targetElement.getBoundingClientRect();
          if(ballRect.left + ballRect.width > targetRect.left &&
           ballRect.left < targetRect.left + targetRect.width ){
            if(Math.abs(targetRect.left - ballRect.left) <= 5 ||
            Math.abs(ballRect.right - targetRect.right <= 5)){
              $('#comment-two').text("Excellent!");
              scoreTwo += 100;
            } else if(Math.abs(targetRect.left - ballRect.left) <= 20 ||
            Math.abs(ballRect.right - targetRect.right <= 20)){
              $('#comment-two').text("Good!");
              scoreTwo += 50;
            } else if(Math.abs(targetRect.left - ballRect.left) <= 50 ||
            Math.abs(ballRect.right - targetRect.right <= 50)){
              $('#comment-two').text("Bad!");
              scoreTwo += 25;
            }  else {
              $('#comment-two').text("");
              scoreTwo += 5;
            }
            // getBallStatus();
            ballHit = true;
            // score += 100;
            removeBall(ballElement[0]);
            settings.scoreTwo = scoreTwo;
            // console.log(score);
          }
          keyDown = false;
          ballHit = false;
        }

      }

    }

    function init(){
      targetElement = document.getElementById('target-two');

      targetElement.style.top = '150px';
      targetElement.style.left = '1000px';
      targetElement.style.height = '100px';
      targetElement.style.width = '100px';
    }

    this.render = function(interactions){
      // hit(interactions);

      getBallStatus();
      checkKeys(interactions);
      if(parseInt(ballElement[0].getBoundingClientRect().left) >
      parseInt(targetElement.getBoundingClientRect().left
      + targetElement.getBoundingClientRect().width)){
        $('#comment-two').text("miss");
        
      }
      if(parseInt(ballElement[0].style.left) > 1100){
        //console.log(parseInt(ballElement[0].style.left))
        removeBall(ballElement[0]);
        // $('#comment').text("miss");
      }
    }

    init();
}
