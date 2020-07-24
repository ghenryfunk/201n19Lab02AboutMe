'use strict';

// console.log('Hello World!');

var userName = prompt('Hello! What is your name?');

alert('Hi ' + userName + '.');


var question1 = confirm('Would you like to learn more about me ' + userName + '?');

if(question1) {
  alert('Great!');
}
else if(!question1) {
  alert('Sorry you have no choice');
}


var question2 = confirm('Do you think I\'m 30 years old?');

if(question2) {
  alert('Sure am!');
}
else if(!question2){
  alert('I AM 30!!!');
}


var question3 = confirm('Do my armpits smell?');

if(question3) {
  alert('Of course they do!');
}

else if(!question3) {
  alert('Don\'t yours!?!');
}


var question4 = confirm('Do I have sweaty feet?');

if(question4) {
  alert('The sweatiest...');
}
else if(!question4) {
  alert('No they\'re very sweaty. It\'s sort of a problem...');
}


var question5 = confirm('Do I have a sweet-tooth?');
if(question5) {
  alert('The sweetest sweet-tooth');
}
else if(!question5) {
  alert('You\'re right! I don\'t have any teeth left from eating so much sugar...');
}


