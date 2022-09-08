const button = document.getElementsByTagName('button')[0];
let time = document.getElementById('time');
let seconds = 75;

function start() {
    const counter = setInterval(countdown, 1000);

    function countdown() {
        seconds--;
        time.innerText = seconds;
        if (seconds === 0) clearInterval(counter);
    }
}

button.addEventListener('click', start);