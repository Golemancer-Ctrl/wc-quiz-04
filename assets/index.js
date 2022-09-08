const button = document.getElementsByTagName('button');
let time = document.getElementById('time');
let seconds = 75;

function countdown() {
    seconds--;
    time.innerText = seconds;

    if (seconds === 0) {
        clearInterval(counter);
    }
}

document.getElementsByName('button').addEventListener('click', start);

function start() {
    countdown;
}

const counter = setInterval(countdown, 1000);