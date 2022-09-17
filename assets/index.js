const startBtn = document.getElementsByTagName('button')[0];
let time = document.getElementById('time');
let choice = document.getElementsByClassName('choice');
let tracker = 0;
let seconds = 75;
let score = 0;

const quizInfo = {
    question1: "What type of loop is used to evaluate an expression?", 
    question2: "What is an object?",
    question3: "When should a return be used?",
    question4: "What does API stand for?",
    question5: "What is bubbling/capturing an example of?",
    question6: "How many programmers does it take to make a quiz?",

    q1ans1: "A For Loop",
    q1ans2: "A While Loop",
    q1ans3: "Trick Question, If Statement",
    q1ans4: "An Eval Loop",

    q2ans1: "A place to store a block of code for reuse",
    q2ans2: "A place to store a single data item",
    q2ans3: "A place to store multiple items of data",
    q2ans4: "A general term for a visible item on the webpage",

    q3ans1: "To create a new line of code",
    q3ans2: "To move back through the code to another section",
    q3ans3: "To restore a previous version of the code",
    q3ans4: "To end a function and return a specific value",

    q4ans1: "American Programming Institute",
    q4ans2: "Application Programming Interface",
    q4ans3: "Automatic Programming Integer",
    q4ans4: "Annual Prime Interest",

    q5ans1: "Event Propogation",
    q5ans2: "The behavior and study of sea turtles",
    q5ans3: "Object Interaction",
    q5ans4: "Document Progression",

    q6ans1: "Too many",
    q6ans2: "Not enough",
    q6ans3: "One",
    q4ans4: "Answers Two and Three"
}

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