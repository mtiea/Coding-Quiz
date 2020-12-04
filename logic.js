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

grabquestion()
}

// function for grabbing question from the array
function grabquestion() {

    // variable for referencing current question
    var currentquestion = questions[currentQuestionIndex];

    // update title with the current question
    var title1 = document.getElementById("question-title");
    title1.textContent = currentquestion.title;

    // clear out any old question choices
    choices1.innerHTML = "";

    // loop over choices
    currentquestion.choices.forEach(function(choice, i) {
   
        // create a new button for each choice
        var choiceNode = document.createElement("button");
        choiceNode.setAttribute("class", "choice");
        choiceNode.setAttribute("value", choice);
    
        choiceNode.textContent = i + 1 + ". " + choice;

        // put a click event listener for each choice
        choiceNode.onclick = questionClick;

        // display on the page
    choicesEl.appendChild(choiceNode);
});
}

