const startBtn = document.getElementsByTagName('button')[0];
let time = document.getElementById('time');
let list = document.getElementsByTagName('ol')[0];
let question = document.getElementsByTagName('h2')[0];
let listItem = document.getElementsByTagName('li');

let seconds = 75;

listItem.style.display = "none";

function qTracker(){
    let clicks = 0;
    if (startBtn.addEventListener('click')) clicks++;
    for (x = 0; x < listItem.length; x++) {
        if (listItem[x].addEventListener('click')) clicks++;
    }

}

function start() {
    const counter = setInterval(countdown, 1000);
    startBtn.style.display = "none";

    function countdown() {
        seconds--;
        time.innerText = seconds;
        if (seconds === 0) clearInterval(counter);
    }

}

startBtn.addEventListener('click', start);