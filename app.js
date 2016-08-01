var userName = prompt('What\'s your name?');
console.log(userName, 'User\'s name');
alert('Welcome to the site ' + userName + '!');

var questionOne = prompt('Does Ray like to code? (Please answer with Y or N)').toUpperCase();
console.log(questionOne, 'User question 1 input');
if (questionOne === 'Y') {
  alert('You\'re right ' + userName + '! He loves whatever can get him the big bucks!');
} else if (questionOne === 'N') {
  alert('Wrong! Who doesn\'t love to code!?');
} else {
  alert('Sorry ' + userName + ', that\'s not a valid answer. Please enter either a Y or N.');
}

var questionTwo = prompt('Is Ray over the age of 30? (Please answer with Y or N)').toUpperCase();
console.log(questionTwo, 'User question 2 input');
if (questionTwo === 'Y') {
  alert('You\'re right ' + userName + '! He\'s getting old!');
} else if (questionTwo === 'N') {
  alert('Wrong! But he\'ll take that as a compliment.');
} else {
  alert('Sorry ' + userName + ', that\'s not a valid answer. Please enter either a Y or N.');
}

var questionThree = prompt('Does Ray like to drink IPA? (Please answer with Y or N)').toUpperCase();
console.log(questionThree, 'User question 3 input');
if (questionThree === 'N') {
  alert('You\'re right ' + userName + '! He likes any other beer except IPA.');
} else if (questionThree === 'Y') {
  alert('Wrong! One day he\'ll grow up to be a man!');
} else {
  alert('Sorry ' + userName + ', that\'s not a valid answer. Please enter either a Y or N.');
}

var questionFour = prompt('Is Ray able to breakdance? (Please answer with Y or N)').toUpperCase();
console.log(questionFour, 'User question 4 input');
if (questionFour === 'N') {
  alert('You\'re right ' + userName + '! He tried in high school but failed miserably!');
} else if (questionFour === 'Y') {
  alert('Wrong! Maybe if he quits Code Fellows and joins a breakdancing class!');
} else {
  alert('Sorry ' + userName + ', that\'s not a valid answer. Please enter either a Y or N.');
}

var questionFive = prompt('Does Ray like to eat chicken feet? (This time you can answer with Y or yes, and N or no.)').toUpperCase();
console.log(questionFive, 'User question 5 input');
if (questionFive === 'Y' || questionFive === 'YES') {
  alert('You\'re right ' + userName + '! He\'s Chinese and Chinese people can eat anything!');
} else if (questionFive === 'N' || questionFive === 'NO') {
  alert('Wrong! Hint: He\'s Chinese...');
} else {
  alert('Sorry ' + userName + ', that\'s not a valid answer. Please enter either a Y, yes, N, or no.');
}

var cars = ['AUDI', 'BMW'];
var questionSix = prompt('What is one car brand that Ray likes?').toUpperCase();
console.log(questionSix, 'User question 6 input');
if (cars.indexOf(questionSix) >= 0) {
  console.log(cars.indexOf(questionSix), 'cars.indexOf()');
  alert('You\'re right ' + userName + '! He loves those German cars!');
} else {
  console.log(cars.indexOf(questionSix), 'cars.indexOf()');
  alert('Sorry ' + userName + ', ' + questionSix + ' is his least favorite brand!');
}

var pokemonNum = Math.floor((Math.random() * 100));
console.log(pokemonNum, 'Number of Pokemon I have');
var questionSeven = parseInt(prompt('How many Pokemon do I have? (Pick a value between 0 to 100)'));
console.log(questionSeven, 'User question 7 input');
while (questionSeven !== pokemonNum) {
  if (isNaN(questionSeven)) {
    alert('Yo, that\'s not a number!');
    questionSeven = parseInt(prompt('How many Pokemon do I have? (Pick a value between 0 to 100)'));
  } else if (questionSeven < pokemonNum) {
    alert('Nope, I have more than that!');
    questionSeven = parseInt(prompt('How many Pokemon do I have? (Pick a value between 0 to 100)'));
  } else if (questionSeven > pokemonNum) {
    alert('Nope, I have less than that!');
    questionSeven = parseInt(prompt('How many Pokemon do I have? (Pick a value between 0 to 100)'));
  }
}
alert('Good guess! You got it right!');

alert('Thank you ' + userName + ' for playing my guessing game!');
