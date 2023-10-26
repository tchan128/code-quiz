var startBtn = document.getElementById('start');
var instructionsEl = document.querySelector("instructions");
var timeEl = document.querySelector("#countdown");

var timeLeft = 75;

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

startBtn.addEventListener("click", function() {

    // Start countdown
    countdown();

 });
    // Hide instruction & button );