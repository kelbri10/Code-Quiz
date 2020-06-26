 
// list of all questions, choices, and answers
var counter = 0;
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
var startQuiz = document.querySelector('#start-button'); 

var quizDisplayId = document.querySelector('#quiz-display'); 

var timeId = document.querySelector('#timer'); 

var score= 0;

var startTime = 60; 

//when the user clicks start, timer starts
startQuiz.addEventListener('click', function(){  

    //countdown 
    var time = setInterval(function(){
        
        startTime--; 

        var endTime = 0; 

        timeId.innerHTML = 'Time Remaining: ' + startTime; 
    
        //ends timer at 0 when end and start equal 
        if (startTime === endTime){ 
            clearInterval(time);  
        }
    }, 1000); 
    
    //uses counter as parameter for buildQuiz()
    buildQuiz(counter);
});

//constructs quiz question in browser
function buildQuiz(counter){ 

  //sets the quiz display div to variable quizDiv
  var quizDiv = document.getElementById('quiz-display'); 

  //sets the answer display div to variable answerDiv 
  var answerDiv = document.getElementById('answer-display');  
  
  //sets text content of quizDiv to title in first Question 
  quizDiv.textContent = questions[counter].title; 

  //sets choices to hold all question choices in array
  var choices = questions[counter].choices; 

  //for loop cycles through question's choices 
  choices.forEach(function(choice){ 

    //creates a button in html doc 
    var buttonDiv = document.createElement('button'); 

    //sets the text of button to the choice
    buttonDiv.textContent = choice;
    buttonDiv.setAttribute("data-ans",choice); 
    buttonDiv.setAttribute("class","ans-btn");
    buttonDiv.onclick = checkAnswer;

    //adds the button to html 
    quizDiv.append(buttonDiv); 

  }); 

} 

function checkAnswer(){

      var userAns = this.getAttribute('data-ans')

      //if the user clicks the right answer, the answer display says 'You got It' 
      //adds 10 points to score 
      if(userAns === questions[counter].answer){
          score = score + 10; 
          console.log(score); 
        }
        //if the user clicks the wrong answer, the answer display says 'Sorry! Wrong answer!' 
        //no points are added, time reduced by 10s
        else{  
          //decreases start 
          startTime = startTime - 10; 
          if(startTime <= 0){
            endQuiz();
          }
        }

        //when counter equals lenght end the quiz
        if(counter===(questions.length-1)){
          endQuiz();
        }
        //increments the counter by 1 and then calls the counter 
        else{
          counter++;
          buildQuiz(counter);
        }
      }  


function endQuiz(){ 
  //when quiz is over, user is shown an alert that time is up 
  //display total score
  //provide input box for user to enter initials
  //the initials are set to 'initial' value in local storage 
  //when user clicks view high scores, the other entered data is pulled from local storage and displayed in browser
}

