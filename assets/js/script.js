// create all variables you need here
var startQuizButton = document.querySelector(".start-quiz");
var mainPage = document.getElementById("main-page");
var timerElement = document.getElementById("time");
var questionContainer = document.querySelector("#question-container");
var messageElement = document.querySelector(".message");
var currentQuestion = 0;
var score = 0;
var timeLeft = 75;
var timerInterval;


var questions = [
  {
    question: "Commonly used data types DO NOT include :",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "booleans"
  },
  {
    question: "The condition in an if / else statement is enclosed with ___________.",
    choices: ["quotes,", "curly brackets", "parenthesis", "square brackets"],
    answer: "curly brackets"
  },
  {
    question: "Arrays in JavaScript can be used to store ____________.",
    choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    answer: "all of the above"
  },
  {
    question: "String values must be enclosed within _________ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parenthesis"],
    answer: "quotes"
  },
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
    answer: "console.log"
  },
]

// Set up a function to display the current question
function displayQuestion() {
  var questionElement = document.querySelector(".question");
  var choicesElement = document.querySelector(".choices");
  var messageElement = document.querySelector(".message");

  // display the current question
  questionElement.textContent = questions[currentQuestion].question;

  // remove existing answer choices
  choicesElement.innerHTML = "";

  // display the answer choices
  for (var i = 0; i < questions[currentQuestion].choices.length; i++) {
    var choice = questions[currentQuestion].choices[i];
    var choiceElement = document.createElement("button");
    var choiceText = document.createTextNode(choice);
    choiceElement.appendChild(choiceText);
    choicesElement.appendChild(choiceElement);

    // add an event listener to check if the user selected the correct answer
    choiceElement.addEventListener("click", function (event) {
      if (event.target.textContent === questions[currentQuestion].answer) {
        // the user selected the correct answer
        messageElement.textContent = "Correct!";
        score++;
      } else {
        // the user selected the wrong answer, subtract 10 seconds from the timer
        messageElement.textContent = "Wrong!";
        timeLeft -= 10;
      }
      
      // move on to the next question
      currentQuestion++;
      
      if (currentQuestion < questions.length) {
        displayQuestion();
      } else {
        // the game is over, show the user's score
        clearInterval(timerInterval);
        alert("Game over! Your score is " + score);

        var initials = prompt("Enter your initials:");

        // save initials and score to local storage
        var highScores = JSON.parse(localStorage.getItem("highScores") || "[]");
        highScores.push({ initials: initials, score: score });
        localStorage.setItem("highScores", JSON.stringify(highScores));

        // redirect to high scores page
        window.location.href = "index.html";
      }
    });
    
  }
}

function startQuizGame() {
  var timerInterval = setInterval(function () {
    timeLeft--;
    timerElement.textContent = timeLeft;

    if (timeLeft === 0) {
      clearInterval(timerInterval);
      alert("Time's up! Your score is " + score);
    }
  }, 1000);

  mainPage.textContent = "";

  displayQuestion();
}

startQuizButton.addEventListener("click", startQuizGame);
