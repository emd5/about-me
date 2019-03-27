'use strict';

console.log('Page loaded . JS is linked');

var questionBank = ['Do I like coding? ','Do I love dogs? ','Do I love working in back end development? ','Do I like bugs?', 'Do I love to write in python?','What is not my favorite number? ' , 'Where do I live?', 'What is my favorite food', 'True or False: I love photography?'];
var correctAnswerBank = ['Yes', 'Yes', 'Yes', 'No', 'Yes', 4 ,'Auburn', 'sushi', true];

// Prompt user name
var userName = prompt('Hello!!!!! \nWelcome to my page. What is your name? ');

if(userName === null || userName === ''){
  userName = 'Guest';
  console.log('Your name is Guest ');
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

var userInput = [];
var questionCount = 0;
var tallyCorrect = 0;
var tallyWrong = 0;
var maxNumberOfTries = 4;
var question5 = 'What is not my favorite number? ';
for (var i=0; i<questionBank.length; i++){
  userInput[i] = prompt(questionBank[i]);
  console.log( 'RIGHT HERE!! '  + questionBank[i]);
  var correctMessage = '';
  var userGuessNumberInput = 0;
  if(questionBank[i] === question5){
    console.log('Inside! ' + questionBank[i]);
    while(userGuessNumberInput < maxNumberOfTries){
      var guessNumber = prompt('Keep trying');
      if( guessNumber.toString() === correctAnswerBank[5].toString()){
        console.log(guessNumber + correctMessage+ '! Your response for question ' + (i+1) +' is: ' + userInput[i]);
        tallyCorrect++;
      } else{
        console.log(guessNumber + correctMessage+ '! Try Again');
      }
      userGuessNumberInput ++;
    }
  } else if (userInput[i].toString().toLowerCase() === correctAnswerBank[i].toString().toLowerCase()){
    correctMessage = 'Right On!';
    console.log(correctMessage+ '! Your response for question ' + (i+1) +' is: ' + userInput[i]);
    tallyCorrect++;
  } else{
    correctMessage = 'Nope!';
    console.log(correctMessage + '! Your response for question ' + (i+1) +' is: ' + userInput[i]);
    tallyWrong++;
  }
  questionCount++;
  console.log(correctMessage + '! The correct answer is: ' + correctAnswerBank[i]);
  alert(correctMessage + '!\n\n The correct answer is ' + correctAnswerBank[i] + '. \n You answered ' + questionCount + '/' + (questionBank.length+1) + ' | Correct: ' + tallyCorrect + ' | Wrong: ' + tallyWrong);
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
alert(userName+ ', you know ' + result + '% of me!');



// Function which displays the Q/A 
// eslint-disable-next-line no-unused-vars
function displayResults(){
  var text = '';
  for( var i=0; i<questionBank.length; i++){
    text += questionBank[i] + '<br> Your response: ' + userInput[i] + ' | Correct Answer: ' + correctAnswerBank[i] + '<br>';
  }
  document.getElementById('results').innerHTML = text;
}

// Displays username on HTML page
document.getElementById('username').innerHTML = userName;


// Game message
// switch(result){
// case 20:
//   alert('You don\'t even know me');
//   break;
// case 40:
//   alert('Boo! You can do better to know me');
//   break;
// case 60:
//   alert('Meh, we need to hang out more');
//   break;
// case 80:
//   alert('Getting there');
//   break;
// case 100:
//   alert('Let\'s Code more!');
//   break;
// default:
//   alert('Somehow you broke my game!!!!');
// }