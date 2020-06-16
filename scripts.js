//timer Id pulled from html 
var timerId = document.getElementById('timer'); 

//sets timer at 60 seconds 
var timerCount = 60

//countdown 
var time = setInterval(function(){
    document.getElementById('timer').innerHTML= 'Time: ' + timerCount; 
    timerCount--; 
    if (timerCount == 0){ 
        
    }
}, 1000); 


