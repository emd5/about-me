'use strict';

console.log('Page loaded.');

//Prompt user name
var userName = prompt('Hello Welcome to my page. What is your name? ');
if(userName.toLowerCase() === 'liz'){
  console.log('Hey we have the same name ');
} else if(userName === 'Sam'){
  console.log('You are my 201 instructor!');
} else {
  console.log('You ain\'t got my name so you ain\'t cool ' + userName.toUpperCase());
}

var questionBank = ['Do I like coding? ','Do I love dogs? ','Do I love working in back end development? ','Do I like bugs?', 'Do I love to write in python?'];
var correctAnswerBank = ['Yes', 'Yes', 'Yes', 'No', 'Yes' ];

//Prompt user input
var userInput = [];
for (var i=0; i<questionBank.length; i++){
  userInput[i] = prompt(questionBank[i]);
  if (userInput[i].toLowerCase() === 'yes'){
    console.log('Your response for question ' + (i+1) +' is: ' + userInput[i]);
  } else if( userInput[i].toLowerCase() === 'no') {
    console.log('Your response for question ' + (i+1) +' is: ' + userInput[i]);
  }
  console.log('The correct answer is: ' + correctAnswerBank[i]);
  alert(userName + '! The correct answer is ' + correctAnswerBank[i]);
}

//Calculate score
var score = 0;
// eslint-disable-next-line no-redeclare
for (var i = 0; i<userInput.length; i++){
  if (userInput[i].toLowerCase() === correctAnswerBank[i].toLowerCase()){
    score++;
  }
}
var result = (score/5)*100;
alert(userName+ ', you know ' + result + '% of me!');

//Game message
switch(result){
case 20:
  alert('You don\'t even know me');
  break;
case 40:
  alert('Boo! You can do better to know me');
  break;
case 60:
  alert('Meh, we need to hang out more');
  break;
case 80:
  alert('Getting there');
  break;
case 100:
  alert('Let\'s Code more!');
  break;
default:
  alert('Somehow you broke my game!!!!');
}

//Displays username on HTML page
document.getElementById('username').innerHTML = userName;

//Function which displays the Q/A 
// eslint-disable-next-line no-unused-vars
function displayResults(){
  var text = '';
  for(var i=0; i<questionBank.length; i++){
    text += questionBank[i] + '<br> Your response: ' + userInput[i] + ' | Correct Answer: ' + correctAnswerBank[i] + '<br>';
  }
  document.getElementById("results").innerHTML = text;
}
