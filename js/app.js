'use strict';

console.log('Page loaded . JS is linked');

var questionBank = ['Do I like coding? ','Do I love dogs? ','Do I love working in back end development? ','Do I like bugs?', 'Do I love to write in python?','What is not my favorite number? Guess Between [1-10]' , 'Where do I live?', 'What is my favorite food', 'True or False: I love photography?'];
var correctAnswerBank = ['Yes', 'Yes', 'Yes', 'No', 'Yes', 4 ,'Auburn', 'sushi', true];

// Prompt user name
var userName = prompt('Hello!!!!! \nWelcome to my page. What is your name? ');

if(userName === null || userName === ''){
  userName = 'Guest';
} else {
  console.log('You entered: ' + userName);
}

console.log('Your name is: ' + userName.toUpperCase() );
alert('Hello ' + userName.toUpperCase() +'\n\nNow, I am going to ask you questions about myself, let\'s see if you know me well enough! ');


// Prompt user input from question bank
// var userInput = [];
// for (var i=0; i<questionBank.length; i++){
//   userInput[i] = prompt(questionBank[i]);
//   console.log(questionBank[i]);
//   if (userInput){
//     if (userInput[i].toLowerCase() === 'yes'){
//       console.log('Your response for question ' + (i+1) +' is: ' + userInput[i]);
//     } else if( userInput[i].toLowerCase() === 'no') {
//       console.log('Your response for question ' + (i+1) +' is: ' + userInput[i]);
//     }
//     console.log('The correct answer is: ' + correctAnswerBank[i]);
//     alert(userName + '!\n\n The correct answer is ' + correctAnswerBank[i]);
//   }
// }

// var userAnswer = '';
// var limit = 3;
// var numGuesses = 0;
// while (userAnswer !== 'yes' && numGuesses < limit) {
//   userAnswer = prompt('Is Ping Pong the best?\nHint: The answer is yes.');
//   numGuesses++;
// }

var userInput = [];
var questionCount = 0;
var tallyCorrect = 0;
var tallyWrong = 0;
var question5 = 'What is not my favorite number? Guess Between [1-10]';
for (var i=0; i<questionBank.length; i++){
  var correctMessage = '';
  var limit = 4;
  var numGuesses = 0;
  var userNumberInput = '';
  userInput[i] = prompt(questionBank[i]);

  if(questionBank[i] === question5){
    while(userNumberInput.toString() !== limit.toString() && numGuesses < limit){
      userNumberInput = prompt('Keep trying');
      numGuesses ++;
    }
    if(userNumberInput === limit.toString()){
      correctMessage = userNumberInput;
      tallyCorrect++;
    } else{
      correctMessage = userNumberInput;
      tallyWrong++;
    }
  } else if (userInput[i].toString().toLowerCase() === correctAnswerBank[i].toString().toLowerCase()){
    correctMessage = 'Right On! That is Correct';
    console.log(correctMessage+ '! Your response for question ' + (i+1) +' is: ' + userInput[i]);
    tallyCorrect++;
  } else{
    correctMessage = 'Incorrect...........';
    console.log(correctMessage + '! Your response for question ' + (i+1) +' is: ' + userInput[i]);
    tallyWrong++;
  }
  questionCount++;
  console.log(correctMessage + '! The correct answer is: ' + correctAnswerBank[i]);
  alert(userName + ', '+correctMessage+ '\n\nThe correct answer is ' + correctAnswerBank[i] + '. \n You answered ' + questionCount + '/' + (questionBank.length) + ' | Correct: ' + tallyCorrect + ' | Wrong: ' + tallyWrong);
}

// Calculate score
var score = 0;
// eslint-disable-next-line no-redeclare
for (var i = 0; i<userInput.length; i++){
  console.log(userInput[i].toString().toLowerCase() + ' | ' + correctAnswerBank[i].toString().toLowerCase());
  if (userInput[i].toString().toLowerCase() === correctAnswerBank[i].toString().toLowerCase()){
    score++;
  }
}
var result = (score/(questionBank.length+1))*100;

//Game message based from percentage
var messageResults = '';
switch(result){
case result >= 0 || result <= 29:
  messageResults = 'You don\'t even know me';
  break;
case result >= 30 || result <= 49:
  messageResults = 'Boo! You can do better to try to know me';
  break;
case result >= 50 || result <=79:
  messageResults = 'Meh, we need to hang out more';
  break;
case result >= 80 || result <=100:
  messageResults = '80%... You are close to getting there';
  break;
default:
  messageResults = 'You broke my game!';
  break;
}

alert(userName + ', you know ' + result + '% of me! \n' + messageResults);

// Function which displays the Q/A (From Lab 2)
// eslint-disable-next-line no-unused-vars
function displayResults(){
  var text = '';
  for( var i=0; i<questionBank.length; i++){
    text += '<strong>' + questionBank[i] + '</strong>' + '<br> Your response: ' + userInput[i] + ' | Correct Answer: ' + correctAnswerBank[i] + '<br>';
  }
  document.getElementById('results').innerHTML = text;
}

// Displays username on HTML page
document.getElementById('username').innerHTML = userName;


