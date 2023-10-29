var startBtn = document.getElementById('start');
var instructions = document.querySelector(".instructions");
var timeEl = document.querySelector("#countdown");
var titleEl = document.querySelector("#title");
var viewScoreEl = document.querySelector("#high-scores");
var choicesEl = document.querySelector(".choices");
var lineBreakEl = document.getElementById("line-break");
var headerBar = document.querySelector(".nav");
var feedbackDiv = document.querySelector(".feedback");

var timeLeft = 10;
var score = 0;

// 10 Questions to choose from

var questions = [
    {
        question: "What type of variable is an user input?",
        choices: ["undefined", "number", "string", "boolean"],
        answerIndex: 2
    },
    {
        question: "What is not a common data type?",
        choices: ["number", "confirm", "string", "boolean"],
        answerIndex: 1
    },
    {
        question: "What brackets do you use to make arrays?",
        choices: ["square brackets: [", "curly brackets: {", "parenthesis: (", "none of the above"],
        answerIndex: 0
    },
    {
        question: "Which method do you use to get an element via ID?",
        choices: ["getItem", "getElementByID", "getID", "getElementById"],
        answerIndex: 3
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "Terminal/bash", "console.log", "for loops"],
        answerIndex: 2
    },
    {
        question: "What symbol/text do you use to apply css styling to the entire page?",
        choices: ["*", "root", "#", "none of the above"],
        answerIndex: 0
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        choices: ["commas", "quotes", "parenthesis", "brackets"],
        answerIndex: 1
    },
    {
        question: "What git command can you run to check what files have been modified?",
        choices: ["git commit -m", "git add .", "git clear", "git status"],
        answerIndex: 3
    },
    {
        question: "____ and ____ are both used to compare whether two variables are the same",
        choices: ["=, ==", "==, !==", "===, ==", "=, ===="],
        answerIndex: 2
    },
    {
        question: "_____ needs to be used in order to prevent a form from submitting.",
        choices: ["stopPropagation()", "initEvent()", "preventDefault()", "All of the above"],
        answerIndex: 2
    },
]

// Constants 

var finished = false;

// Helper function

// Countdown function

function countdown() {
    
    var timeInterval = setInterval(function(){
        if (timeLeft > 0) {
            timeEl.textContent = timeLeft;
            timeLeft--;
        } else {
            timeEl.textContent = 0;
            clearInterval(timeInterval);
            finished = true;
        }
    }, 1000);
};

function outputSet (ansResult) {
    if (ansResult) {
        var correct = document.createElement("h3");
        correct.textContent = "Correct!";
        feedbackDiv.appendChild(correct);
    } else {
        var wrong = document.createElement("h3");
        wrong.textContent = "Wrong!";
        feedbackDiv.appendChild(wrong);
    }
};

// Generates and display random questions & choices

function questionDisplay() {
    var qNum = Math.floor(Math.random() * questions.length);
    var qBank = questions[qNum]; 
    titleEl.textContent = qBank.question;

    for (var i = 0; i < 4; i++) {

        var choice = qBank.choices[i];
        var numChoice = (i+1).toString();
        numChoice = numChoice.concat(". ", choice);
        var c = document.createElement("button");
        c.textContent = numChoice;
        c.classList.add("option");

        if (i === qBank.answerIndex) {
            c.setAttribute("correct", "true");
        } else {
            c.setAttribute("correct", "false");
        }

        choicesEl.appendChild(c);
    }
};

// Starting quiz after Start Quiz button is pressed

startBtn.addEventListener("click", function() {

    // Start countdown
    countdown();
    // Hide instruction & button
    instructions.style.display = "none";
    startBtn.style.display = "none";

    questionDisplay(); // Display random question & answers

    var userResponse;

    choicesEl.addEventListener("click", function(event) {
        answer = event.target;
        
        if (answer.classList.contains("option")) {
            var check = answer.getAttribute("correct");
            if (check === "true") {
                userResponse = true;
            } else {
                userResponse = false;
            }
        }

        console.log(userResponse);

        if (userResponse) {
            outputSet(userResponse);
        } else {
            outputSet(userResponse);
            timeLeft = timeLeft - 5;
        }
        choicesEl.textContent = "";
        questionDisplay(); // Display random question & answers

        if (finished) {
            var done = "All Done!";
            done.style.weight = "bolder";
            titleEl.textContent = done;
            var submitForm = document.createElement("form");
        };
    });

});

 viewScoreEl.addEventListener("click", function() {
    headerBar.style.visibility = "hidden";
    titleEl.textContent = "High Scores";

 }); 