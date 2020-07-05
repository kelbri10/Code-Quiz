 
// list of all questions, choices, and answers
let counter = 0;
let questions = [
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
let startQuiz = document.querySelector('#start-button'); 

let quizDisplayId = document.querySelector('#quiz-display'); 

let answerDisplayId = document.querySelector('#answer-display'); 

let timeId = document.querySelector('#timer'); 

let score= 0;

let startTime = 60; 

let saves = []; 

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
  let quizDiv = document.getElementById('quiz-display'); 

  //sets the answer display div to letiable answerDiv 
  let answerDiv = document.getElementById('answer-display');  
  
  //sets text content of quizDiv to title in first Question 
  quizDiv.textContent = questions[counter].title; 

  //sets choices to hold all question choices in array
  let choices = questions[counter].choices; 

  //for loop cycles through question's choices 
  choices.forEach(function(choice){ 

    //creates a button in html doc 
    let buttonDiv = document.createElement('button'); 

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

      let userAns = this.getAttribute('data-ans')

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
          endQuiz(score);
        }
        //increments the counter by 1 and then calls the counter 
        else{
          counter++;
          buildQuiz(counter);
        }
      }  


function endQuiz(score){

  //when quiz is over, user is shown an alert that time is up 
  //display total score
  //provide input box for user to enter initials
  //the initials are set to 'initial' value in local storage 
  //when user clicks view high scores, the other entered data is pulled from local storage and displayed in browser
  
  //displays final score
  quizDisplayId.innerHTML = 'Your final score is: ' + score; 

  //creates input box to enter intials 
  let inputBox = document.createElement('INPUT'); 
  
  let initials = inputBox.value.trim(); 

  //sets attribute of box 
  inputBox.setAttribute('initials', initials); 

  //appends the input box to the browser 
  quizDisplayId.append(inputBox); 

  //create save button 
  let saveButton = document.createElement('button'); 
  saveButton.innerHTML = 'Save New Score'; 
  quizDisplayId.append(saveButton); 

  //create view previous score button
  let viewScore = document.createElement('button'); 
  viewScore.innerHTML = 'View Scores'; 
  quizDisplayId.append(viewScore); 
  
  //when user clicks save button
  saveButton.addEventListener('click', function(event){ 
    event.preventDefault(); 

    if (initials === null){ 
      return; 
    }
    else{ 
      //create a new object 
      let newSave = { 
        newScore: score, 
        newInitials: initials
      }

      // add user object to save array
      saves.push(newSave); 

      //saves array to local storage to be pulled later 
      localStorage.setItem('last score', JSON.stringify(saves)); 
    
      //clears inputBox 
      inputBox.value = ''; 
    }

  })

  /*viewScore.addEventListener('click'), function(event){ 
    event.preventDefault(); 

    let previousScores = []

    for (var i = 0; i < ; i++){ 
      let lastScore = JSON.parse(localStorage.getItem('save'));
      previousScores.push(lastScore); 
    }
  } */


} 

