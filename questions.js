 
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
  var quizDisplayId = document.querySelector('#quiz-display'); 

  //for(var i = 0; i < questions.length; i++){ 

  var questionTitle = document.createElement('h2'); 

  questionTitle.textContent = questions[0].title; 
  quizDisplayId.append(questionTitle); 

    
  for(var i = 0; i < questions[0].choices.length; i++){ 
      
    var questionChoices = document.createElement('button'); 
    //
    questionChoices.textContent = questions[0].choices[i]; 

    quizDisplayId.append(questionChoices); 
  }

  

} 