'use strict';

console.log('The page just loaded.');

var userName = prompt('What is your name');

if(userName.toLowerCase() === 'liz'){
  console.log('Hey we have the same name ');
} else if(userName === 'Sam'){
  console.log('You are my 201 instructor ');
} else {
  console.log('Welcome to the site ' + userName);
}

var testArray = []

var arrayWithValues = [1, 2, true, {}, console.log, [2,4]];

console.log(testArray);
console.log(arrayWithValues);