var timer,
    counter = 0;

function makeNew() {
    document.body.appendChild( document.createElement('div') );
    counter++;
    document.getElementById('boks').innerHTML += 'box('+counter+'),';
}

function startInterval() {
    timer = setInterval(makeNew, 1000);

}

function stoppInterval() {
    clearInterval(timer);
}
