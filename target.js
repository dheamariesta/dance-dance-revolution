var Target = function(settings) {

    // Settings
    var ballElement = document.getElementsByClassName('ball');
    console.log(ballElement)
    var targetElement = document.getElementById('target');
    var ballHit = false;
    var score = settings.score;


    // function getBallStatus(interactions){
    //   if(interactions.space){
    //     for (var i = 0; i < ballElement.length; i++) {
    //       var ballRect = ballElement[i].getBoundingClientRect();
    //       // console.log('ballRect', ballRect)
    //       var targetRect = targetElement.getBoundingClientRect();
    //       if(targetRect.left + targetRect.width > ballRect.left &&
    //       targetRect.left < ballRect.right ){
    //         console.log('space');
    //
    //         interactions.space = false;
    //         var ballStatus = settings.ballStatus;
    //         console.log(ballStatus);
    //       }
    //
    //     }
    //   }
    //
    // }

    function hit(interactions){
      if(interactions.space){
        if (ballHit == true){
          interactions.space = false;
        } else {
          for (var i = 0; i < ballElement.length; i++) {
            console.log('space');
            var ballRect = ballElement[i].getBoundingClientRect();
            console.log('ballRect', ballRect)
            var targetRect = targetElement.getBoundingClientRect();
            if(targetRect.left + targetRect.width > ballRect.left &&
            targetRect.left < ballRect.right ){
              ballHit = true;
              score += 100;
              settings.score = score;
              console.log(score);
            }
            interactions.space = false;
            ballHit = false;
          }
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
      // getBallStatus(interactions);
    }

    init();
}
