var startBtn = document.getElementById('start');
var instructions = document.querySelector(".instructions");
var timeEl = document.querySelector("#countdown");
var titleEl = document.querySelector("#title");
var viewScoreEl = document.querySelector("#high-scores");
var choicesEl = document.querySelector(".choices");
var lineBreakEl = document.getElementById("line-break");
var headerBar = document.querySelector(".nav");
var feedbackDiv = document.querySelector(".feedback");
var submitFormEl = document.querySelector("form");
var scoreOutputEl = document.querySelector(".score-output");
var initialSubmitBtn = document.querySelector(".initial-submit");
var initialInput = document.querySelector("#initials");
var ScoreButtonsEl = document.querySelector(".score-actions");
var clearEl = document.querySelector("#clear");
var returnEl = document.querySelector("#return");
var scoreList = document.querySelector(".score-list");
var finalScoreEl = document.querySelector(".final-score");

// Sections 

var startGame = document.querySelector(".start");
var inGame = document.querySelector(".in-game");
var finishGame = document.querySelector(".finished-game");
var viewScores = document.querySelector(".view-scores"); 

var START_TIME = 75;

var timeLeft = START_TIME;
var score = 0;
var finished = false;

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

var roundQuestions = [...questions];

// Helper function

// Countdown function from 75 seconds

function countdown() {
    
    var timeInterval = setInterval(function(){
        if (finished) {
            timeLeft = timeLeft;
        } else if (timeLeft > 0) {
            timeEl.textContent = timeLeft;
            timeLeft--;
        } else {
            timeEl.textContent = 0;
            endQuiz();
            clearInterval(timeInterval);
        }
    }, 1000);
};

// Let's user know if their answer is right or wrong

function outputSet (ansResult) {
    if (ansResult) {
        var correct = document.createElement("h3");
        correct.textContent = "Correct!";
        feedbackDiv.appendChild(correct);
        lineBreakEl.style.visibility = "visible";
    } else {
        var wrong = document.createElement("h3");
        wrong.textContent = "Wrong!";
        feedbackDiv.appendChild(wrong);
        lineBreakEl.style.visibility = "visible";
    }
};

function outputReset() {
    feedbackDiv.textContent = "";
}

// Generates and display random questions & choices

function questionDisplay(roundQ) {
    var qNum = Math.floor(Math.random() * roundQ.length);
    var qBank = roundQ[qNum]; 
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

    roundQ.splice(qNum, 1);
};

// Ends Quiz

function endQuiz() {

    finished = true;

    if (roundQuestions.length === 0) {
        var done = "All Done!";
    } else {
        var done = "Time's Up!";
    }

    titleEl.textContent = done;
    startGame.style.display = "none";
    inGame.style.display = "none";
    finishGame.style.display = "inline";

    viewScores.style.display = "none";
    s = "Your Final Score is ";
    s = s.concat(score, ".");
    finalScoreEl.textContent = s;
}   

// Game Reset 

function resetGame() {
    roundQuestions = [...questions];
    choicesEl.textContent = "";
    startGame.style.display = "inline";
    inGame.style.display = "none";
    finishGame.style.display = "none";
    viewScores.style.display = "none";
    headerBar.style.display = "flex";
    finalScoreEl.textContent = "";
}

resetGame();

// Starting quiz after Start Quiz button is pressed

startBtn.addEventListener("click", function() {
    console.log(roundQuestions);
    console.log(questions);
    // Start countdown
    timeLeft = START_TIME;
    finished = false;
    countdown();
    // Hide instruction & button
    startGame.style.display = "none";
    inGame.style.display = "inline";
    finishGame.style.display = "none";
    viewScores.style.display = "none";
    questionDisplay(roundQuestions);
});

var userResponse;

choicesEl.addEventListener("click", function(event) {
    outputReset();
    answer = event.target;
    event.preventDefault();
    
    if (answer.classList.contains("option")) {
        var check = answer.getAttribute("correct");
        
        if (check === "true") {
            userResponse = true;
            outputSet(userResponse);
            score = score + 10;
        } else {
            userResponse = false;
            outputSet(userResponse);
            timeLeft = timeLeft - 5;
        }
    }

    if (roundQuestions.length === 0 || timeLeft <=0) {
        endQuiz();
    } else {
        choicesEl.textContent = "";
        questionDisplay(roundQuestions);
    }

});

 // Clear Scores

 clearEl.addEventListener("click", function(event) {
    startGame.style.display = "none";
    inGame.style.display = "none";
    finishGame.style.display = "none";
    viewScores.style.display = "inline";
    headerBar.style.display = "none";

    scoreList.textContent = "";
    localStorage.clear();
 });

 // Return to Game

 returnEl.addEventListener("click", function(event) {
    titleEl.textContent = "Coding Quiz Challenge";
    startGame.style.display = "inline";
    inGame.style.display = "none";
    viewScores.style.display = "none";
    finishGame.style.display = "none";
    headerBar.style.display = "none";
    resetGame();
 });

 // Storing initial & high score

initialSubmitBtn.addEventListener("click", function(event) {
    event.preventDefault();

    titleEl.textContent = "High Scores";
    startGame.style.display = "none";
    inGame.style.display = "none";
    finishGame.style.display = "none";
    viewScores.style.display = "inline";

    var newScore = initialInput.value;
    newScore = newScore.concat(" - ", score);
    var previousScore = JSON.parse(localStorage.getItem("code-quiz")) || [];
    previousScore.push(newScore);

    localStorage.setItem("code-quiz", JSON.stringify(previousScore));
    
    var scores = document.createElement("h3");
    scores.textContent = newScore;
    scoreList.appendChild(scores);
});

// View Score

viewScoreEl.addEventListener("click", function() {
    finished = true;
    titleEl.textContent = "High Scores";
    startGame.style.display = "none";
    inGame.style.display = "none";
    finishGame.style.display = "none";
    viewScores.style.display = "inline";
    headerBar.style.display = "none";

    orderHighScore();
 });
 
 function orderHighScore() {
    var savedScores = localStorage.getItem("code-quiz");
    savedScores = savedScores.replace("[", "");
    savedScores = savedScores.replace("]", "");
    var parsedScore = savedScores.split(",");

    for (var i = 0; i < parsedScore.length; i++) {
        var score = document.createElement("h3");
        score.textContent = parsedScore[i].substring(parsedScore[i].indexOf('"') + 1, parsedScore[i].lastIndexOf('"'));
        console.log(parsedScore[i]);
        scoreList.appendChild(score);
    }
 }