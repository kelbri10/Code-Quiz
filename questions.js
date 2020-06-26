 
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

  //sets score to 0 
  var score = 0; 

  var questionCounter = 0; 

  //for loop cycles through questions 
  for (var i = 0; i < questions.length; i++){ 

    //sets the quiz display div to variable quizDiv
    var quizDiv = document.getElementById('quiz-display'); 

    //sets the answer display div to variable answerDiv 
    var answerDiv = document.getElementById('answer-display');  
    
    //sets text content of quizDiv to title in first Question 
    quizDiv.textContent = questions[i].title; 

    //logs the choices of the first question 
    console.log(questions[i].choices); 

    //for loop cycles through question's choices 
    for (var i = 0; i < questions[i].choices.length; i++){ 

      //creates a button in html doc 
      var buttonDiv = document.createElement('button'); 

      //sets the text of button to the choice
      buttonDiv.textContent = questions[i].choices[i]; 

      //adds the button to html 
      quizDiv.append(buttonDiv); 

      //when user clicks the button
      buttonDiv.addEventListener('click', function(event){
        //sends alert that it works 
        alert('it works'); 

        //if the user clicks the right answer, the answer display says 'You got It' 
        //adds 10 points to score 

        //if the user clicks the wrong answer, the answer display says 'Sorry! Wrong answer!' 
        //no points are added, time reduced by 10s
      });

      console.log(questions[i].answer); 
    } 
  
  }


  return score; 
} 

