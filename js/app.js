'use strict';
console.log('The page just loaded.');

var userName = prompt('Hello Welcome to my page. What is your name? ');
if(userName.toLowerCase() === 'liz'){
  console.log('Hey we have the same name ');
} else if(userName === 'Sam'){
  console.log('You are my 201 instructor!');
} else {
  console.log('Welcome to the site ' + userName.toUpperCase());
}

var questionBank = ['Do I like coding? ','Do I love front end development? ','Do I love working in back end development? ','Do I like bugs?', 'Do I love to write in python?'];

var correctAnswerBank = ['Yes', 'Yes', 'Yes', 'No', 'Yes' ];
var userInput = [];

for (var i=0; i<questionBank.length; i++){
  userInput[i] = prompt(questionBank[i]);
    if (userInput[i].toLowerCase() === 'yes'){
      console.log('Your response for question ' + (i+1) +' is: ' + userInput[i]);
      console.log(userName +'The correct answer is: ' + correctAnswerBank[i]);

    } else if( userInput[i].toLowerCase() === 'no') {
      console.log('Your response for question ' + (i+1) +' is: ' + userInput[i]);
      console.log('The correct answer is: ' + correctAnswerBank[i]);

    }  
    alert(userName + '! The correct answer is ' + correctAnswerBank[i]);
}

//Calculate score
var score = 0;
for (var i=0; i<userInput.length; i++){
  if (userInput[i].toLowerCase() === correctAnswerBank[i].toLowerCase()){
    score++;
  } 
}
var result = (score/5)*100
alert('Your score is: ' + result + '%');

//Game message
switch(result){
  case 20:
    alert('You don\'t know me');
    break;
  case 40:
    alert('Boo!');
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
document.getElementById("username").innerHTML = userName;

//Function which displays the Q/A 
function displayResults(){
  var text = '';
  for(var i=0; i<questionBank.length; i++){
    text += questionBank[i] + ' Your response: ' + userInput[i] + ' | Correct Answer: ' + correctAnswerBank[i] + '<br>';
  }
  document.getElementById("results").innerHTML = text;

}










