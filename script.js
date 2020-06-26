var startQuiz = document.querySelector('#start-button'); 
var quizDisplayId = document.querySelector('#quiz-display'); 


startQuiz.addEventListener('click', function(){ 
    //empties quizDisplay div 
    quizDisplayId.innerHTML = ' ';  

    //timer Id pulled from html 
    var timerId = document.getElementById('timer'); 

    //sets timer at 60 seconds 
    var timerCount = 5; 

    //countdown 
    var time = setInterval(function(){
        //adds html to display timer 
        timerId.innerHTML= 'Time: ' + timerCount;  

        //sets timer to decrease by 1 
        timerCount--; 
    }, 1000);  

    if (time === 0){ 
        quizDisplayId.innerHTML = ' '; 
        timerId.innerHTML = 'Times Up!'; 
    }

    buildQuiz(); 
})



