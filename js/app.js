'use strict';

// console.log('Hello World!');

var userName = prompt('Hello! What is your name?');

var correctAnswer = 0;

alert('Hi ' + userName + '!');

var question1 = prompt(`Would you like to learn more about me ${userName}? Reply 'Yes' or 'No'`).toLowerCase();
console.log(question1);

while (
  question1 !== 'yes' &&
  question1 !== 'y' &&
  question1 !== 'no' &&
  question1 !== 'n'
) {
  question1 = prompt(`Please answer 'Yes' or 'No' ${userName}.`).toLowerCase();
}
if (question1 === 'yes' || question1 === 'y') {
  alert('Great! I\'m super intersting, don\'t worry.');
} else if (question1 === 'no' || question1 === 'n') {
  alert(`Too bad ${userName}!`);
}

var question2 = prompt(`Do you think I'm 30 years old, ${userName}? Reply 'Yes' or 'No'`).toLowerCase();
// console.log(question2);

while (
  question2 !== 'yes' &&
  question2 !== 'y' &&
  question2 !== 'no' &&
  question2 !== 'n'
) {
  question2 = prompt(`Please answer 'Yes' or 'No' ${userName}.`).toLowerCase();
}
if (question2 === 'yes' || question2 === 'y') {
  alert('Sure am!');
  correctAnswer++;
} else if (question2 === 'no' || question2 === 'n') {
  alert('No, I am 30. I insist on multiple\'s of 10');
}

var question3 = prompt(`Do you think my armpits smell, ${userName}? Reply 'Yes' or 'No'`).toLowerCase();
// console.log(question3);

while (
  question3 !== 'yes' &&
  question3 !== 'y' &&
  question3 !== 'no' &&
  question3 !== 'n'
) {
  question3 = prompt(`Please answer 'Yes' or 'No' ${userName}.`).toLowerCase();
}
if (question3 === 'yes' || question3 === 'y') {
  alert('Of course they do!');
  correctAnswer++;
} else if (question3 === 'no' || question3 === 'n') {
  alert('No they definitely do. Don\'t yours!?!');
}

var question4 = prompt(`Do you think I have sweaty feet, ${userName}? Reply 'Yes' or 'No'`).toLowerCase();
// console.log(question4);

while (
  question4 !== 'yes' &&
  question4 !== 'y' &&
  question4 !== 'no' &&
  question4 !== 'n'
) {
  question4 = prompt(`Please answer 'Yes' or 'No' ${userName}.`).toLowerCase();
}
if (question4 === 'yes' || question4 === 'y') {
  alert('The sweatiest...');
  correctAnswer++;
} else if (question4 === 'no' || question4 === 'n') {
  alert('No, they\'re very sweaty. It\'s sort of a problem...');
}

var question5 = prompt(`Do you think I have a sweet-tooth, ${userName}? Reply 'Yes' or 'No'`).toLowerCase();
// console.log(question5);

while (
  question5 !== 'yes' &&
  question5 !== 'y' &&
  question5 !== 'no' &&
  question5 !== 'n'
) {
  question5 = prompt(`Please answer 'Yes' or 'No' ${userName}.`).toLowerCase();
}
if (question5 === 'yes' || question5 === 'y') {
  alert('Sure do! I actually have no teeth left from all the sugar...');
  correctAnswer++;
} else if (question5 === 'no' || question5 === 'n') {
  alert('You\'re right. I have NO teeth left... from all the sugar.');
}

// ///////////////////////////////////QUESTION 6 IS KILLING ME!!!!!/////////
// ///////////I CANNOT FIGURE OUT HOW TO MAKE THIS COUNTER WORK!!! IT MAKES SENSE TO ME WRITTEN AS IS and the counter actually does seem to work... but the for loop with the if statements won't work. I couldn't figure this question out last time I took 201 and I still cannot figure it out. Please help me! I need some serious one-one time with this to trace the path the code is taking as it reads this code. I need a visual map of it going from one statement to the next because this refuses to make sense to me!!!!!/////////////////////////////////////////////////////////////////
// for (var i = 4; i > 0; i--) {
//   var question6 = prompt(`What do you think my favorite number is, ${userName}? You have ${i} guesses.`);
//   console.log(i);
//   console.log(question6);
//   if (isNaN(question6)) {
//     i--;
//     question6 = prompt(`Please answer with a number, ${userName}. You have ${i} guesses left.`);
//     console.log(i);
//     console.log(question6);
//   }
//   else if (question6 > 33) {
//     i--;
//     question6 = prompt(`Too high, ${userName}. You have ${i} guesses left.`);
//     console.log(i);
//     console.log(question6);
//   }
//   else if (question6 < 33) {
//     i--;
//     question6 = prompt(`Too low, ${userName}. You have ${i} guesses left.`);
//     console.log(i);
//     console.log(question6);
//   }
//   else if (question6 === 33) {
//     question6 = prompt(`You got it, ${userName}! Well done!`);
//     // correctAnswer++;
//     i === 0;
//     console.log(i);
//     console.log(question6);
//   }
//   else {
//     alert(`The correct answer was 33, ${userName}`);
//     console.log(i);
//     console.log(question6);
//   }
// }

// function question6() {
//   var guesses = 4;
//   var question6 = parseInt(prompt(`What do you think my favorite number is? You have ${guesses} guesses left`));
//   for (var i = 0; i < guesses; i++) {
//     if(isNaN(question6) && i < guesses) {
//       i++;
//       question6 = parseInt(prompt(`Enter a number please. You have ${4-i} guesses left`));
//       console.log(i);
//     }
//     else if (question6 > 33 && i < guesses) {
//       i++;
//       question6 = parseInt(prompt(`Too high! You have ${4-i} guesses left`));
//       console.log(i);
//     }
//     else if (question6 < 33 && i < guesses) {
//       i++;
//       question6 = parseInt(prompt(`Too low! You have ${4-i} guesses left`));
//       console.log(i);
//     }
//     else if (question6 === 33 && i < guesses) {
//       alert('You got it! 33 is a great number!');
//       i === 4;
//       console.log(i);
//     }
//     else {
//       alert('You are out of guesses :( Correct answer was 33!');
//       console.log(i);
//     }
//   }
// }
// question6();

//THIRD TRY AT QUESTION 6!!!!//////////////////////
var guesses = 4;
var correctNumber = 33;
var answeredCorrectly = false;

var question6 = parseInt(prompt(`What is my favorite number? You have ${guesses} guesses.`));

while (guesses > 0 && !answeredCorrectly) {
  guesses--;
  if (question6 > correctNumber && guesses > 0) {
    question6 = parseInt(prompt(`Too high! You have ${guesses} guesses left.`));
  } else if (question6 < correctNumber && guesses > 0) {
    question6 = parseInt(prompt(`Too low! You have ${guesses} guesses left.`));
  } else if (correctNumber === question6) {
    alert('Yes! You got it!');
    answeredCorrectly = true;
    correctAnswer++;
  } else if (isNaN(question6)) {
    question6 = parseInt(prompt(`Please enter a number. You have ${guesses} guesses left.`));
  }
}
if (guesses === 0 && !answeredCorrectly) {
  alert(`Almost... Correct answer was ${correctNumber}.`);
}

var movieArray = ['point break', 'point break', 'point break'];
var guesses7 = 6;
var answeredCorrectly7 = false;

var question7 = prompt(`What is the greatest movie ever made, ${userName}? You have ${guesses7} guesses.`).toLowerCase();

while (guesses7 > 0 && !answeredCorrectly7) {
  guesses7--;
  console.log(guesses7);
  for (var i = 0; i < movieArray.length; i++) {
    if (question7 === movieArray[i]) {
      alert(`Duh! Point Break is the greatest film ever made, ${userName}! Other acceptable answers were "Point Break," and "Point Break."`);
      correctAnswer++;
      answeredCorrectly7 = true;
      i = movieArray.length;
    }
  }
  if (guesses7 > 0 && !answeredCorrectly7) {
    question7 = prompt(`Afraid not, ${userName}. C'mon, this should be an easy one! You have ${guesses7} guesses left.`).toLowerCase();
  }
}
if (guesses7 === 0 && !answeredCorrectly7) {
  alert(`Sorry but none of those was the best movie ever made ${userName}! Acceptable answers were "Point Break," and "Point Break."`);
}

alert(`Thank you for playing my guessing game, ${userName}! You got ${correctAnswer} answer(s) right. Good job!`);

// console.log(correctAnswer);
