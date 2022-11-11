const startBtn = document.getElementsByTagName('button')[0];
const time = document.getElementById('time');
const question = document.getElementById('question');
const choices = document.getElementsByClassName('choice');
const scoreboard = document.getElementById('scoreboard');
const nameTaker = document.getElementsByTagName('form')[0];
const userId = document.getElementById('name');
const submit = document.getElementById('submit');
let gameRunning = 0;
let score = 0;
let tracker = 0;
let seconds = 75;

//arrays containing the questions and choices
let questionArray = ["What type of loop is used to evaluate an expression?", "What is an object?", "When should a return be used?", "What does API stand for?", "What is bubbling/capturing an example of?", "How many programmers does it take to make a quiz?"];
let oneAnswers = ["A For Loop", "A While Loop", "Trick Question, If Statement", "An Eval Loop"];
let twoAnswers = ["A place to store a block of code for reuse", "A place to store a single data item", "A place to store multiple items of data", "A general term for a visible item on the webpage"];
let threeAnswers = ["To create a new line of code", "To move back through the code to another section", "To restore a previous version of the code", "To end a function and return a specific value"];
let fourAnswers = ["American Programming Institute", "Application Programming Interface", "Automatic Programming Integer", "Annual Prime Interest"];
let fiveAnswers = ["Event Propogation", "The behavior and study of sea turtles", "Object Interaction", "Document Progression"];
let sixAnswers = ["Too many", "Not enough", "One", "Answers Two and Three"];

for (let choice of choices) {
    choice.style.display = "none";
}

nameTaker.style.display = "none";

//sets the question and choices to the relevant stage of the quiz
function quizDisplay () {
    for(let x = 0; x < choices.length; x++) {
        let answerArray = [oneAnswers[x], twoAnswers[x], threeAnswers[x], fourAnswers[x], fiveAnswers[x], sixAnswers[x]];
        question.innerText = questionArray[tracker];
        choices[x].innerText = answerArray[tracker];
    }
}

//keeps score and saves it to the local storage
function scoreKeeper (event) {
    let answerKey = [oneAnswers[2], twoAnswers[2], threeAnswers[3], fourAnswers[1], fiveAnswers[0], sixAnswers[3]];
    selection = event.target;
    
    if(selection.innerText !== answerKey[tracker]) {
        seconds -= 15;
    } else if (selection.innerText === answerKey[tracker]) {
        score += 10;
    }
}

//clears the quiz display and changes the screen to the game over screen
function gameOver () {
    for (let x = 0; x < choices.length; x++) {
        choices[x].style.display = "none";
    }

    gameRunning++;

    scoreboard.style.display = "block";
    nameTaker.style.display = "block";

    question.innerText = "Game Over! Thanks for playing! Check the Scoreboard!";
    scoreboard.innerText = "Score: " + score + " Time Remaining: " + seconds;

    submit.onclick = () => {
        localStorage.setItem("score", JSON.stringify(score));
        localStorage.setItem("time", JSON.stringify(seconds));
        localStorage.setItem("name", userId.value);
        console.log(userId);
    }

    time.style.display="none";
}

function highScore() {

}

//initializes the quiz
startBtn.onclick = function () {
    const counter = setInterval(countdown, 1000);
    startBtn.style.display = "none";

    quizDisplay(tracker);

    
    //sets the onclick event listener on the quiz choices
    for (let choice of choices) {
        choice.style.display = "block"
        choice.onclick = function(event) {
            console.log(tracker, questionArray.length-1)
           // tracker += 1;
            if(tracker == questionArray.length-1){
                gameOver();
            } else {
                // question.innerText = questionArray[tracker];
                scoreKeeper(event);
                tracker += 1;
                quizDisplay(tracker);
            }
            console.log(tracker);
        }
    }

    //sets the countdown in the top right and initializes it
    function countdown() {
        seconds--;
        time.innerText = " Remaining: " + seconds;
        console.log(tracker, questionArray.length);

        // calls the game to end if the time runs out
        if (seconds <= 0) {
            console.log('ENDING');
            gameOver();
            clearInterval(counter);
        } 
    }
    
}