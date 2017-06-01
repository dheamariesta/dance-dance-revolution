var instruction = document.getElementById('how-to-play');

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

  // var start = document.getElementsByTagName('a')[0];
  //
  // var br = document.getElementsByTagName('br')[1];
  //
  // var back = document.createElement('a');
  // back.innerHTML = "Back to menu";
  // back.href = "#";
  // br.after(back);


});

var audio = $('#mousehover')[0];
$('a').mouseenter(function(){
  audio.play();
});

var click = $('#mouseclick')[0];
$('a').click(function(){
  click.play();
});
