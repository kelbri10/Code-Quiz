var startQuiz = document.querySelector('#start-button'); 
var quizDisplayId = document.querySelector('#quiz-display'); 


startQuiz.addEventListener('click', function(){ 

    quizDisplayId.innerHTML = ' ';  

    //timer Id pulled from html 
    var timerId = document.getElementById('timer'); 

    //sets timer at 60 seconds 
    var timerCount = 60; 

    //countdown 
    var time = setInterval(function(){
        timerId.innerHTML= 'Time: ' + timerCount; 
        buildQuiz(); 
        timerCount--; 

        if (timerCount < 0){   
            clearInterval(time); 
        }

    }, 1000);  
})



