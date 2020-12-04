// variables to keep track of quiz state
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;

// variables to link DOM elements
var questions1 = document.getElementById("questions");
var sumbitBtn = document.getElementById("submit");
var feedback1 = document.getElementById("feedback");
var startBtn = document.getElementById("start");
var choices1 = document.getElementById("choices");
var timer1 = document.getElementById("timer");
var initials1 = document.getElementById("initials");


// function to start the quiz
function quizStart() {

 //hide start screen
 var startScreen  = document.getElementById("start-screen");
 startScreen.setAttribute("class", "hide");
}
// un-hide 
questions1.remove.Attribute("class");

//start timer
timerid = setInterval(clocktick, 1000);

// function to start the clock
function setInterval() {
    setInterval(setalert, 6000);
}

// show starting time
timer1.textContent = time;