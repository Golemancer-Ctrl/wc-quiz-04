const startBtn = document.getElementsByTagName('button')[0];
let time = document.getElementById('time');
let choice = document.getElementsByClassName('choice');
let tracker = 0;
let seconds = 75;
let score = 0;

let questions = ["What type of loop is used to evaluate an expression?", "What is an object?", "When should a return be used?", "What does API stand for?", "What is bubbling/capturing an example of?", "How many programmers does it take to make a quiz?"];
let oneAnswers = ["A For Loop", "A While Loop", "Trick Question, If Statement", "An Eval Loop"];
let twoAnswers = ["A place to store a block of code for reuse", "A place to store a single data item", "A place to store multiple items of data", "A general term for a visible item on the webpage"];
let threeAnswers = ["To create a new line of code", "To move back through the code to another section", "To restore a previous version of the code", "To end a function and return a specific value"];
let fourAnswers = ["American Programming Institute", "Application Programming Interface", "Automatic Programming Integer", "Annual Prime Interest"];
let fiveAnswers = ["Event Propogation", "The behavior and study of sea turtles", "Object Interaction", "Document Progression"];
let sixAnswers = ["Too many", "Not enough", "One", "Answers Two and Three"]

for (let x = 0; x < choice.length; x++) {
    choice[x].style.display = "none";
}

function start() {
    const counter = setInterval(countdown, 1000);
    startBtn.style.display = "none";

    for (let x = 0; x < choice.length; x++) {
        choice[x].style.display = "block"
        choice[x].onclick = function() {
            tracker += 1;
            console.log (tracker);
        }
    }

    function countdown() {
        seconds--;
        time.innerText = seconds;
        if (seconds === 0) clearInterval(counter);
    }

}

startBtn.onclick = start;