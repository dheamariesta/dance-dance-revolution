var TargetTwo = function(settings) {

    // Settings
    var ballElement = document.getElementsByClassName('ball-two');
    var targetElement = document.getElementById('target-two');
    var ballHit = false;
    var scoreTwo = settings.scoreTwo;
    var ballStatus = null;

    function getBallStatus(){
      if(ballElement[0].style.backgroundImage == 'url("./images/ArrowUp.png")'){
        ballStatus = "up";
      } else if(ballElement[0].style.backgroundImage == 'url("./images/ArrowLeft.png")'){
        ballStatus = "left";
      } else if(ballElement[0].style.backgroundImage == 'url("./images/ArrowDown.png")'){
        ballStatus = "down";
      } else if(ballElement[0].style.backgroundImage == 'url("./images/ArrowRight.png")'){
        ballStatus = "right";
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
            if(Math.abs(targetRect.right - ballRect.right) <= 10 ||
            Math.abs(ballRect.left - targetRect.left) <= 10){
              console.log('excellent')
              $('#comment-two').text("Excellent!");
              scoreTwo += 100;
            } else if(Math.abs(ballRect.left - targetRect.left) <= 30 ||
            Math.abs(targetRect.right - ballRect.right) <= 30){
              console.log('good')
              $('#comment-two').text("Good!");
              scoreTwo += 50;
            } else if(Math.abs(ballRect.left - targetRect.left) <= 50 ||
            Math.abs(targetRect.right - ballRect.right) <= 50){
              console.log('bad')
              $('#comment-two').text("Bad!");
              scoreTwo += 25;
            }
            else {

              $('#comment-two').text("");
              scoreTwo += 5;
            }
            ballHit = true;
            removeBall(ballElement[0]);
            settings.scoreTwo = scoreTwo;
            var buttonhit = document.getElementById('hitTwo');
            buttonhit.play();
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
      getBallStatus();
      checkKeys(interactions);
      if(parseInt(ballElement[0].getBoundingClientRect().left) >
      parseInt(targetElement.getBoundingClientRect().left
      + targetElement.getBoundingClientRect().width)){
        $('#comment-two').text("miss");
      }
      if(parseInt(ballElement[0].style.left) > 1100){
        removeBall(ballElement[0]);
      }
    }

    init();
}
