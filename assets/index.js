const startBtn = document.getElementsByTagName('button')[0];
let time = document.getElementById('time');
let question = document.getElementById('question');
let choice = document.getElementsByClassName('choice');
let tracker = 0;
let seconds = 90;

//arrays containing the questions and choices
let questionArray = ["What type of loop is used to evaluate an expression?", "What is an object?", "When should a return be used?", "What does API stand for?", "What is bubbling/capturing an example of?", "How many programmers does it take to make a quiz?"];
let oneAnswers = ["A For Loop", "A While Loop", "Trick Question, If Statement", "An Eval Loop"];
let twoAnswers = ["A place to store a block of code for reuse", "A place to store a single data item", "A place to store multiple items of data", "A general term for a visible item on the webpage"];
let threeAnswers = ["To create a new line of code", "To move back through the code to another section", "To restore a previous version of the code", "To end a function and return a specific value"];
let fourAnswers = ["American Programming Institute", "Application Programming Interface", "Automatic Programming Integer", "Annual Prime Interest"];
let fiveAnswers = ["Event Propogation", "The behavior and study of sea turtles", "Object Interaction", "Document Progression"];
let sixAnswers = ["Too many", "Not enough", "One", "Answers Two and Three"];

for (let x = 0; x < choice.length; x++) {
    choice[x].style.display = "none";
}

//initializes the quiz
function start() {
    const counter = setInterval(countdown, 1000);
    startBtn.style.display = "none";

    question.innerText = questionArray[tracker];
    quizDisplay(tracker);

    
    //sets the onclick event listener on the quiz choices
    for (let x = 0; x < choice.length; x++) {
        choice[x].style.display = "block"
        choice[x].onclick = function() {
            tracker += 1;
            question.innerText = questionArray[tracker];
            quizDisplay(tracker);
            console.log (tracker);
        }
    }

    //sets the countdown in the top right and initializes it
    function countdown() {
        seconds--;
        time.innerText = "Time Remaining:" + seconds;
        if (seconds === 0) clearInterval(counter);
    }

    //sets the question and choices to the relevant stage of the quiz
    function quizDisplay () {
        for(let x = 0; x < choice.length; x++) {
            let answerArray = [oneAnswers[x], twoAnswers[x], threeAnswers[x], fourAnswers[x], fiveAnswers[x], sixAnswers[x]];
            choice[x].innerText = answerArray[tracker];
        }
    }

    function scoreKeeper (playerChoice) {
        let answerKey = [oneAnswers[2], twoAnswers[2], threeAnswers[3], fourAnswers[1], fiveAnswers[0], sixAnswers[3]];
    }
    
    //clears the quiz display and changes the screen to the game over screen
    function gameOver () {
        for (let x = 0; x < choice.length; x++) {
            choice[x].style.display = "none";
        }

        score.style.display = "none";

        question.innerText = "Game Over!  Thanks for playing!"



    }

    // evaluations checking that the game is still running
    if (tracker > questionArray.length) gameOver;
    if (seconds === 0) gameOver;

}

startBtn.onclick = start;