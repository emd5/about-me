'use strict';

console.log('Page loaded . JS is linked');

var questionBank = ['Do I like coding? ', //0
  'Do I love dogs? ', //1
  'Do I love working in back end development? ', //2
  'Do I like bugs?', // 3
  'Do I love to write in python?', // 4
  'What is not my favorite number? Guess Between [1-10]' , //5
  'Can you guess a state that I have lived in besides Washington?',//6
  'Where am I currently living ? ', //7
  'What is my favorite food', //8
  'True or False: I love photography?']; //9

var stateArray = ['hawaii', 'arizona', 'new mexico', 'illinois', 'iowa'];

var correctAnswerBank = ['Yes', 'Yes', 'Yes', 'No', 'Yes', 4 , stateArray ,'Auburn', 'sushi', true];

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
for (var i=0; i<questionBank.length; i++){
  var correctMessage = '';
  var limit = 4;
  var stateLimit = 6;
  var answer5 = 4;
  var numGuesses = 1;
  var stateGuesses = 1;
  var userStateInput = '';
  userInput[i] = prompt(questionBank[i]);
  confirm(userInput[i]);
  //Guess a number
  if(i === 5 ){
    //add if statement
    while(userInput[5].toString() !== answer5.toString() && numGuesses < limit){
      userInput[5] = prompt('Keep trying | Attempts: ' + (numGuesses) + '/' + limit );
      numGuesses ++;
    }
    correctMessage = userInput[5];
    if(userInput[5] === answer5.toString()){
      correctMessage = userInput[5] + '. You are right!';
      tallyCorrect++;
    } else{
      tallyWrong++;
    }
    //Guess states
  } else if (i === 6){

    // console.log(userStateInput.toString().toLowerCase() + 'access array ->>>> ' + correctAnswerBank[6]);

    while(!correctAnswerBank[6].includes(userInput[6].toString().toLowerCase()) && stateGuesses < stateLimit){
      userInput[6] = prompt('Not the state, Try Again! | Attempts ' + (stateGuesses)+'/'+ stateLimit );
      stateGuesses++;
    }
    correctMessage = userInput[6];
    if(stateArray.includes(userInput[6].toString().toLowerCase())){
      correctMessage = userInput[6] + ' is one of the states I lived in.';
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
var result = (tallyCorrect/questionBank.length)*100;

//Game message based from percentage
var messageResults;
console.log(typeof(result) + result);
console.log(typeof(40));

if(result >= 50){
  alert(score);
}

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
alert( 'right: ' + tallyCorrect + ' wrong: ' + tallyWrong);
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
