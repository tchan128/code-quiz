var startBtn = document.getElementById('start');
var instructions = document.querySelector(".instructions");
var timeEl = document.querySelector("#countdown");
var titleEl = document.querySelector("#title");
var viewScoreEl = document.querySelector("#high-scores");
var choicesEl = document.querySelector(".choices");
var lineBreakEl = document.getElementById("line-break");
var correctAnswer = document.getElementById("correct");
var wrongAnswer = document.getElementById("wrong");

var timeLeft = 75;

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

// Helper function

// Countdown function

function countdown() {
    
    var timeInterval = setInterval(function(){
        if (timeLeft > 1) {
            timeEl.textContent = timeLeft;
            timeLeft--;
        } else {
            timeEl.textContent = " "
            clearInterval(timeInterval);
        }
    }, 1000);
};

// Generates random questions & choices

function questionSelector() {
    var question = Math.floor(Math.random() * questions.length);
    return question;
}


// Starting quiz after Start Quiz button is pressed

startBtn.addEventListener("click", function() {

    // Start countdown
    countdown();
    // Hide instruction & button
    instructions.style.display = "none";
    startBtn.style.display = "none";
    
    // While loop for if time is not 0 or question is not all completed yet

    //Generates random question & choices 

    var questionNumber = questionSelector(); // Gives me random int
    var questionBank = questions[questionNumber]; 
    titleEl.textContent = questionBank.question;

    for (var i = 0; i < questionBank.choices.length; i++) {

        var choice = questionBank.choices[i];
        console.log(choice);
        var c = document.createElement("button");
        c.textContent = choice;
        c.classList.add("option");

        if (i === questionBank.answerIndex) {
            c.setAttribute("correct", "true");
        } else {
            c.setAttribute("correct", "false");
        }

        choicesEl.appendChild(c);
    }

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

        if (userResponse) {
            lineBreakEl.style.visibility = "visible";
            correctAnswer.style.visibility = "visible";
        } else {
            lineBreakEl.style.visibility = "visible";
            wrongAnswer.style.visibility = "visible";
        }
    });

 });