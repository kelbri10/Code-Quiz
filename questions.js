 
// list of all questions, choices, and answers
var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
      title: "Arrays in JavaScript can be used to store ____.",
      choices: [
        "numbers and strings",
        "other arrays",
        "booleans",
        "all of the above"
      ],
      answer: "all of the above"
    },
    {
      title:
        "String values must be enclosed within ____ when being assigned to variables.",
      choices: ["commas", "curly brackets", "quotes", "parentheses"],
      answer: "quotes"
    },
    {
      title:
        "A very useful tool used during development and debugging for printing content to the debugger is:",
      choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
      answer: "console.log"
    }
  ];

function buildQuiz(){ 
  //gets quiz display div 
  var quizDisplayId = document.querySelector('#quiz-display'); 

  //for(var i = 0; i < questions.length; i++){ 

  //creates new element for question title 
  var questionTitle = document.createElement('h2'); 

  questionTitle.textContent = questions[0].title; 
  quizDisplayId.append(questionTitle); 

    
    for(var x = 0; x < questions[0].choices.length; x++){ 

      //makes each choices a button 
      var ansChoice = document.createElement('button'); 

      //adds content from questions array to button
      ansChoice.textContent = questions[0].choices[x]; 

      ansChoice.setAttribute('id', 'answer-choice'); 

      //adds button to quiz display div
      quizDisplayId.append(ansChoice); 
  }

  getResults(); 
} 

function getResults(){ 

//gets answer display div 
var ansId = document.querySelector('#answer-display');

var button = document.getElementById('#answer-choice')

//when user clicks a button
button.addEventListener('click', function(){ 

  //if correct answer, display correct
  if (button.textContent == questions[0].answer){  

    var correctAns = document.createElement('h3'); 
    correctAns.textContent = 'correct'; 
    ansId.append(correctAns); 

  }

  //if user chooses the wrong answer, displays wrong
  else{ 

    var wrongAns = document.createElement('h3'); 
    wrongAns.textContent = 'wrong'; 
    ansId.append(wrongAns); 
  }

}); 
}