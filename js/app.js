'use strict';
console.log('The page just loaded.');

var userName = prompt('Hello Welcome to my page. What is your name? ');

if(userName.toLowerCase() === 'liz'){
  console.log('Hey we have the same name ');
} else if(userName === 'Sam'){
  console.log('You are my 201 instructor!');
} else {
  console.log('Welcome to the site ' + userName);
}


var questionBank = ['Do I like coding? ','I love frontend development? ','I love working in backend development? ','My goal is to teach?', 'Do I love to write in python?'];

var userInput = [];

for (var i=0; i< questionBank.length; i++){
  userInput[i] = prompt(questionBank[i]);
  if (userInput[i].toLowerCase() === 'yes'){
    console.log('Your response for question ' + (i+1) +' is: ' + userInput[i])
  } else if( userInput[i].toLowerCase() === 'no') {
    console.log('Your response for question ' + (i+1) +' is: ' + userInput[i])
  } else {
    console.log('You don\'t me!!');
  }
}

for (var i=0; i<userInput.length; i++){
    if (userInput != null) {
      document.getElementById("userInput").innerHTML = 'Your answers are' + userInput[i];
    }
  
}






