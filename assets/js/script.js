// create all variables you need here
var startButton = document.querySelector(".start-quiz");
var timerElement = document.getElementById("time");
var questionContainer = document.querySelector("question-container");
var score = 0;

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
    answer: "JavaScript"
  },
]

// start quiz button

// timer starts and presented a question

// create for loop for each question with answers

// answer question then get presented another question
// answer a question incorrectly time subtracted from clock

// game over when all questions answered or timer reaches 0

// player saves initials and score

