const button = document.getElementById('button');

function start() {
    function countdown(count) {
        let count = document.getElementById('time').textContent;
        JSON.parse(count);
        count--;
        if (count === 0) {
            return;
        }
    }

    setInterval(countdown(75), 1000);
}

button.addEventListener('click', start);