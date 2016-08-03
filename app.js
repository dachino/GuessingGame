var userName = prompt('What\'s your name?');
console.log(userName, 'User\'s name');
alert('Welcome to the site ' + userName + '!');
var correct = 0; //Counter for correct answers

function questionOneFunc() {
  var userInputOne = prompt('Does Ray like to code? (Please answer with Y or N)').toUpperCase();
  console.log(userInputOne, 'User question 1 input');
  if (userInputOne === 'Y') {
    alert('You\'re right ' + userName + '! He loves whatever can get him the big bucks!');
    correct ++;
  } else if (userInputOne === 'N') {
    alert('Wrong! Who doesn\'t love to code!?');
  } else {
    alert('Sorry ' + userName + ', that\'s not a valid answer. Please enter either a Y or N.');
  }
}

function questionTwoFunc() {
  var userInputTwo = prompt('Is Ray over the age of 30? (Please answer with Y or N)').toUpperCase();
  console.log(userInputTwo, 'User question 2 input');
  if (userInputTwo === 'Y') {
    alert('You\'re right ' + userName + '! He\'s getting old!');
    correct ++;
  } else if (userInputTwo === 'N') {
    alert('Wrong! But he\'ll take that as a compliment.');
  } else {
    alert('Sorry ' + userName + ', that\'s not a valid answer. Please enter either a Y or N.');
  }
}

function questionThreeFunc() {
  var userInputThree = prompt('Does Ray like to drink IPA? (Please answer with Y or N)').toUpperCase();
  console.log(userInputThree, 'User question 3 input');
  if (userInputThree === 'N') {
    alert('You\'re right ' + userName + '! He likes any other beer except IPA.');
    correct ++;
  } else if (userInputThree === 'Y') {
    alert('Wrong! One day he\'ll grow up to be a man!');
  } else {
    alert('Sorry ' + userName + ', that\'s not a valid answer. Please enter either a Y or N.');
  }
}

function questionFourFunc() {
  var userInputFour = prompt('Is Ray able to breakdance? (Please answer with Y or N)').toUpperCase();
  console.log(userInputFour, 'User question 4 input');
  if (userInputFour === 'N') {
    alert('You\'re right ' + userName + '! He tried in high school but failed miserably!');
    correct ++;
  } else if (userInputFour === 'Y') {
    alert('Wrong! Maybe if he quits Code Fellows and joins a breakdancing class!');
  } else {
    alert('Sorry ' + userName + ', that\'s not a valid answer. Please enter either a Y or N.');
  }
}

function questionFiveFunc() {
  var userInputFive = prompt('Does Ray like to eat chicken feet? (This time you can answer with Y or yes, and N or no.)').toUpperCase();
  console.log(userInputFive, 'User question 5 input');
  if (userInputFive === 'Y' || userInputFive === 'YES') {
    alert('You\'re right ' + userName + '! He\'s Chinese and Chinese people can eat anything!');
    correct ++;
  } else if (userInputFive === 'N' || userInputFive === 'NO') {
    alert('Wrong! Hint: He\'s Chinese...');
  } else {
    alert('Sorry ' + userName + ', that\'s not a valid answer. Please enter either a Y, yes, N, or no.');
  }
}

function questionSixFunc() {
  var cars = ['AUDI', 'BMW'];
  console.log(cars, 'Car brands I like');
  var userInputSix = prompt('What is one car brand that Ray likes?').toUpperCase();
  console.log(userInputSix, 'User question 6 input');
  if (cars.indexOf(userInputSix) >= 0) {
    console.log(cars.indexOf(userInputSix), 'cars.indexOf() value');
    alert('You\'re right ' + userName + '! He loves those German cars!');
    correct ++;
  } else {
    console.log(cars.indexOf(userInputSix), 'cars.indexOf() value');
    alert('Sorry ' + userName + ', ' + userInputSix + ' is his least favorite brand!');
  }
}

function questionSevenFunc() {
  var pokemonNum = Math.floor((Math.random() * 100));
  console.log(pokemonNum, 'Number of Pokemon I have');
  var chance = 6; //Number of chances user gets to guess
  var userInputSeven = parseInt(prompt('How many Pokemon do I have? (Pick a value between 0 to 100)'));
  console.log(userInputSeven, 'User question 7 input');
  while (userInputSeven !== pokemonNum && chance > 1) {
    if (isNaN(userInputSeven)) {
      chance--;
      console.log(chance, 'Number of chances left');
      alert('Yo, that\'s not a number! You now have ' + chance + ' chance(s) left!');
      userInputSeven = parseInt(prompt('How many Pokemon do I have? (Pick a value between 0 to 100)'));
      console.log(userInputSeven, 'User question 7 input');
    } else if (userInputSeven < pokemonNum) {
      chance--;
      console.log(chance, 'Number of chances left');
      alert('Nope, I have more than that! You now have ' + chance + ' chance(s) left!');
      userInputSeven = parseInt(prompt('How many Pokemon do I have? (Pick a value between 0 to 100)'));
      console.log(userInputSeven, 'User question 7 input');
    } else if (userInputSeven > pokemonNum) {
      chance--;
      console.log(chance, 'Number of chances left');
      alert('Nope, I have less than that! You now have ' + chance + ' chance(s) left!');
      userInputSeven = parseInt(prompt('How many Pokemon do I have? (Pick a value between 0 to 100)'));
      console.log(userInputSeven, 'User question 7 input');
    }
  }
  if (chance >= 1 && userInputSeven === pokemonNum) {
    alert('Good guess! You got it right!');
    correct ++;
  } else {
    alert('Sorry, you ran out of tries!');
  }
}

function questionEightFunc() {
  var questionEightFlag = false; //Flag indicates if user gets one of the countries right
  var countries = ['CANADA', 'MEXICO', 'JAPAN', 'CHINA', 'SOUTH KOREA', 'UNITED KINGDOM', 'GERMANY'];
  console.log(countries, 'Countries I\'ve been to');
  var userInputEight = prompt('Which countries have I been to besides the US?').toUpperCase();
  console.log(userInputEight, 'User question 8 input');
  for (var i = 0; i < countries.length; i++) {
    if (countries[i] === userInputEight) {
      questionEightFlag = true;
      break;
    }
  }
  if (questionEightFlag) {
    alert('You\'re right ' + userName + '! ' + userInputEight + ' is one of the countries!');
    correct ++;
  } else {
    alert('Sorry ' + userName + ', he\'s never been there before!');
  }
}

questionOneFunc();
questionTwoFunc();
questionThreeFunc();
questionFourFunc();
questionFiveFunc();
questionSixFunc();
questionSevenFunc();
questionEightFunc();


var score = Math.round((correct / 8) * 100);
alert('Thank you ' + userName + ' for playing my guessing game! You got ' + correct + ' out of 8 questions correct or ' + score + '%!');
