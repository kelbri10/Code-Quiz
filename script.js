const startBtn = document.querySelector('.startBtn'); 
const timer = document.querySelector('.timer'); 
const quiz = document.querySelector('.quiz'); 
const answer = document.querySelector('.answer'); 

let counter = 0; 
let score = 0; 
let countdown = 60; 

//when the user clicks start
//the timer starts 
//if the timer hits zero, the quiz ends 
//referenced https://stackoverflow.com/questions/109086/stop-setinterval-call-in-javascript
startBtn.addEventListener('click', ()=>{
    const countdownTimer = () => { 
        if(countdown >= 0){
            timer.innerHTML = countdown; 
            countdown--; 
        } else { 
            clearInterval(countdownID);  
            endQuiz(); 
        }
    }

    //initializes countdownTimer function displaying timer countdown for user 
    let countdownID = setInterval(countdownTimer, 1000); 

    //clears the quiz div and calls newQuiz function to display first question in array
    quiz.innerHTML = ''; 
    newQuiz(counter); 
}); 

//starts the quiz once user clicks start button 
const newQuiz = (counter) => { 

    //create h1 tag for question 
    let newQuestion = document.createElement('h1'); 
    newQuestion.setAttribute('class', 'question-title'); 

    //sets question display to be the current question
    newQuestion.innerHTML = questions[counter].title; 
    quiz.appendChild(newQuestion); 

    //for each answer choice create a button 
    questions[counter].choices.forEach(choice => {
        //creates a new button for each choice  
        let newButton = document.createElement('button'); 

        newButton.setAttribute('class', 'btn answer-btn'); 
        newButton.setAttribute('data-ans', choice); 

        newButton.innerHTML = choice; 

        //when user clicks on their answer choice it d
        newButton.addEventListener('click', () => { 
            let userAnswer = newButton.dataset.ans;
            checkAnswer(userAnswer); 
        }); 

        quiz.append(newButton); 
    });

}

//once the user clicks a button, compare the clicked answer to the correct answer 
const checkAnswer = (userAnswer, countdownID) => { 
    let correctAnswer = questions[counter].answer; 
    //checks if the users answer is the correct answer
    //score increase by 10 if correct, decreases by 10 if incorrect 
    if (userAnswer === correctAnswer){ 
        score += 10; 
        answer.innerHTML = 'Correct!';
        quiz.innerHTML = '';
        counter++; 
    } else { 
        answer.innerHTML = 'Wrong!'; 
        quiz.innerHTML = '';
        counter++; 
    }
    
    //checks if counter supercedes number of questions available, ends quiz if true
    //continues quiz if more questions
    if (counter === questions.length){ 
        clearInterval(countdownID); 
        endQuiz(); 
    } else { 
        newQuiz(counter); 
    }

}

//once quiz ends, ask user to enter initials in order to save score 
const endQuiz = () => { 

    answer.innerHTML = ''; 
    quiz.innerHTML = 'Quiz Over!'; 

    //creates h1 tag with text to prompt user to enter their intials 
    let newSaveScore = document.createElement('h1');
    newSaveScore.setAttribute('class', 'save-score') 
    newSaveScore.innerHTML = 'Enter your initials'; 

    //creates input box for user to input initials 
    let inputBox = document.createElement('INPUT'); 
    inputBox.setAttribute('type', 'text'); 

    //creates button for user to click to confirm save for their quiz score
    let saveButton = document.createElement('button'); 
    saveButton.setAttribute('class', 'btn'); 
    saveButton.innerHTML = 'Save'; 

    //creates a button for view score
    let viewScore = document.createElement('button'); 
    viewScore.setAttribute('class', 'btn'); 
    viewScore.innerHTML = 'View Scores'; 

    //appends both to quiz div to display browser-side
    quiz.append(newSaveScore, inputBox, saveButton); 

    //once user clicks the save button, saves the initials input as userInitials 
    saveButton.addEventListener('click', (e) => { 
        e.preventDefault(); 
        //creates new save object
        let newSave = { 
            userScore: score, 
            username: inputBox.value
        }
        
         //checks to see if there is a local storage already saved 
        //if not creates new array for previous saves to be stored
        if(localStorage.getItem('save') === null){
            let pastSaves = []; 
            pastSaves.push(newSave); 
            console.log('created and saved to new array');
            localStorage.setItem('save', JSON.stringify(pastSaves)); 
        }
        //if saves are present pulls previous saves as an array, pushes new save
        //stringifies new save 
        else { 
            console.log('saved to already existing array')
            let pastSaves = JSON.parse(localStorage.getItem('save')); 

            console.log(pastSaves); 
            pastSaves.push(newSave); 
            localStorage.setItem('save', JSON.stringify(pastSaves)); 
        }

        //clear inputBox
        inputBox.value = ''; 
    
    }); 

    //when user clicks view previous scores...
    viewScore.addEventListener('click', function(event){
        event.preventDefault(); 

        //if the user clicks when there is no previous saves 
        if (localStorage.getItem('save') === null){
            answerDisplayId.innerHTML = 'There are no previous scores to display!'; 
        }
        else{ 
            //pulls array from local storage
            let pastSaves = JSON.parse(localStorage.getItem('save')); 

            //creates an element for each object in array 
            pastSaves.forEach(pastSave => {
                //sets username and userscore to innerHTML for pastUser
                let pastUser = document.createElement('p'); 
                pastUser.innerHTML = pastSave.username + ' ' + pastSave.userScore; 

                //displays in answerDisplayId
                answerDisplayId.append(pastUser); 
            });
        }
  });
}
