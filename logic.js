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

// sound effects
var sfxRight = new Audio("assets/sfx/correct.wav");
var sfxWrong = new Audio("assets/sfx/incorrect.wav");


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
//function for clicking the question
function questionClick() {
// checking if the user guessed wrong
 if (this.value !== questions[currentQuestionIndex.anser]) {
    // take off 15 seconds
    time -= 15;
    if(time < 0) {
        time = 0;
    }
 // display the new time on the page
 timer1.textContent = time;

 // play wrong sound effect
 sfxWrong.play();

 feedback1.textContent = "Wrong!";
 } else {
  // play "right" sound effect
  sfxRight.play();

  feedback1.textContent = "Correct!";
 } 
 // flash right/wrong feedback on page for half a second
 feedback1.setAttribute("class", "feedback");
 setTimeout(function() {
   feedback1.setAttribute("class", "feedback hide");
 }, 1000);

 // move to the next question
 currentQuestionIndex++;

 // check if we have ran out of questions
  if (currentQuestionIndex === questions.length ) {
      endQuiz()
  } else {
      grabquestion()
  }
}
  // function for ending quiz
  function endQuiz() {

  // stop the timer
 clearInterval(timerId);



















  }
