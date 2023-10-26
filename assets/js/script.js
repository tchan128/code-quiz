var startBtn = document.getElementById('start');
var instructions = document.querySelector(".instructions");
var timeEl = document.querySelector("#countdown");

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

function countdown(){
    
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

// Starting quiz after Start Quiz button is pressed

startBtn.addEventListener("click", function() {

    // Start countdown
    countdown();
    // Hide instruction & button
    instructions.style.display = "none";
    startBtn.style.display = "none";





 });