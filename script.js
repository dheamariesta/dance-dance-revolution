var instruction = document.getElementById('how-to-play');
var back = document.getElementById('back');

instruction.addEventListener('click', function(){
  var container = document.getElementsByClassName('container')[0];
  // container.removeChild('instruction');

  var title = document.getElementsByTagName('h1')[0];
  title.innerHTML = "How to play";

  var objectiveTitle = document.createElement('h3');
  objectiveTitle.innerHTML = "Game Objective";
  title.after(objectiveTitle);

  var objective = document.createElement('p');
  objective.innerHTML = "As the arrows scroll to the green target, press the corresponding keys on the keyboard.";
  objectiveTitle.after(objective);

  var playerOne = document.getElementsByTagName('h4')[0];
  playerOne.innerHTML = "Player 1";

  var descriptionPlayerOne = document.createElement('p');
  descriptionPlayerOne.innerHTML = "Player 1 use keys 'W', 'A', 'S' and 'D' as controller";
  playerOne.after(descriptionPlayerOne);

  var playerTwo = document.createElement('h4');
  playerTwo.innerHTML = "Player 2";
  descriptionPlayerOne.after(playerTwo);

  var descriptionPlayerTwo = document.createElement('p');
  descriptionPlayerTwo.innerHTML = "Player 2 use arrow keys as controller";
  playerTwo.after(descriptionPlayerTwo);

  instruction.style.display = 'none';
  back.style.display = 'block';

});

var back = document.getElementById('back');
back.addEventListener('click', function(){
  var container = document.getElementsByClassName('container')[0];
  // container.removeChild('instruction');

  var title = document.getElementsByTagName('h1')[0];
  title.innerHTML = "Dance Dance Revolution";

  var objectiveTitle = document.getElementsByTagName('h3')[0];
  container.removeChild(objectiveTitle);



  var playerOne = document.getElementsByTagName('h4')[0];
  playerOne.innerHTML = "Two Players";

  var playerTwo = document.getElementsByTagName('h4')[1];
  container.removeChild(playerTwo);

  var paragraph = document.getElementsByTagName('p');
  console.log(paragraph.length);
  for(var i = 2; i >= 0; i--){
    container.removeChild(paragraph[i]);
    console.log(i);
  }

  instruction.style.display = 'block';
  back.style.display = 'none';

});

var audio = $('#mousehover')[0];
$('a').mouseenter(function(){
  audio.play();
});

var click = $('#mouseclick')[0];
$('a').click(function(){
  click.play();
});
