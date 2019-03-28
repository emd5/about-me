'use strict';

console.log('Page loaded . JS is linked');

var questionBank = ['Do I like coding? ','Do I love dogs? ','Do I love working in back end development? ','Do I like bugs?', 'Do I love to write in python?','What is not my favorite number? Guess Between [1-10]' , 'Can you guess a state that I have lived in besides Washington?', 'What is my favorite food', 'True or False: I love photography?'];
var stateArray = ['hawaii', 'arizona', 'new mexico', 'illinois', 'iowa'];
var correctAnswerBank = ['Yes', 'Yes', 'Yes', 'No', 'Yes', 4 ,stateArray ,'Auburn', 'sushi', true];

// Prompt user name
var userName = prompt('Hello!!!!! \nWelcome to my page. What is your name? ');

if(userName === null || userName === ''){
  userName = 'Stranger Danger';
} else {
  console.log('You entered: ' + userName);
}

console.log('Your name is: ' + userName.toUpperCase() );
alert('Hello ' + userName.toUpperCase() +'\n\nNow, I am going to ask you questions about myself, let\'s see if you know me well enough! ');

var userInput = [];
var questionCount = 0;
var tallyCorrect = 0;
var tallyWrong = 0;
// var question5 = 'What is not my favorite number? Guess Between [1-10]';
for (var i=0; i<questionBank.length; i++){
  var correctMessage = '';
  var limit = 4;
  var stateLimit = 6;
  var answer5 = 4;
  var numGuesses = 1;
  var stateGuesses = 1;
  var userNumberInput = '';
  var userStateInput = '';
  userInput[i] = prompt(questionBank[i]);

  //Guess a number
  if(questionBank[i] === questionBank[5]){
    //add if statement
    while(userNumberInput.toString() !== answer5.toString() && numGuesses < limit){
      userNumberInput = prompt('Keep trying | Attempts: ' + (numGuesses) + '/' + limit );
      numGuesses ++;
    }
    correctMessage = userNumberInput;
    if(userNumberInput === answer5.toString()){
      correctMessage = userNumberInput + '. You are right!';
      tallyCorrect++;
    } else{
      tallyWrong++;
    }
    //Guess states
  } else if (questionBank[i] === questionBank[6]){

    console.log(userStateInput.toString().toLowerCase() + 'access array ->>>> ' + correctAnswerBank[6]);

    while(!correctAnswerBank[6].includes(userStateInput.toString().toLowerCase()) && stateGuesses < stateLimit){
      userStateInput = prompt('Not the state, Try Again! | Attempts ' + (stateGuesses)+'/'+ stateLimit );
      stateGuesses++;
    }
    correctMessage = userNumberInput;
    if(stateArray.includes(userStateInput.toString().toLowerCase())){
      correctMessage = userStateInput + ' is one of the states I lived in.';
      tallyCorrect++;
    } else{
      tallyWrong++;
    }
  } else if (userInput[i].toString().toLowerCase() === correctAnswerBank[i].toString().toLowerCase()){
    correctMessage = userInput[i] + '. You are right!';
    tallyCorrect++;
  } else {
    correctMessage = userInput[i] + '. That is INCORRECT!';
    tallyWrong++;
  }
  questionCount++;

  console.log(correctMessage+ '! Your response for question ' + (i+1) +' is: ' + userInput[i]);
  console.log(correctMessage + '! The correct answer is: ' + correctAnswerBank[i]);
  
  alert(userName + ', You responded '+ correctMessage + ' \n\nThe correct answer is ' + correctAnswerBank[i] + '. \n\nQuestion ' + questionCount + ' out of ' + (questionBank.length) + ' | Correct: ' + tallyCorrect + ' | Wrong: ' + tallyWrong);
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
var messageResults;
console.log(typeof(result));
console.log(typeof(40));

switch(true){
case result >= 90:
  messageResults = 'Great mind\'s think alike';
  break;
case result >= 80:
  messageResults = 'Meh, you are ok';
  break;
case result >= 70:
  messageResults = 'You are close to getting there';
  break;
case result >= 60:
  messageResults = 'We need to hang out more!';
  break;
default:
  messageResults = 'I can\'t even with you';
  break;
}

alert(userName + ', you know ' + result + '% about me! \n\n' + messageResults);

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
