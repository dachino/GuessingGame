var userName = prompt('What\'s your name?');
alert('Welcome to the site ' + userName + '!');

var questionOne = prompt('Does Ray like to code? (Please answer with Y or N)').toUpperCase();
if (questionOne === 'Y') {
  alert('You\'re right ' + userName + '! He loves whatever can get him the big bucks!');
} else if (questionOne === 'N') {
  alert('Wrong! Who doesn\'t love to code!?');
} else {
  alert('Sorry ' + userName + ', that\'s not a valid answer. Please enter either a Y or N.');
}

var questionTwo = prompt('Is Ray over the age of 30? (Please answer with Y or N)').toUpperCase();
if (questionTwo === 'Y') {
  alert('You\'re right ' + userName + '! He\'s getting old!');
} else if (questionTwo === 'N') {
  alert('Wrong! But he\'ll take that as a compliment.');
} else {
  alert('Sorry ' + userName + ', that\'s not a valid answer. Please enter either a Y or N.');
}

var questionThree = prompt('Does Ray like to drink IPA? (Please answer with Y or N)').toUpperCase();
if (questionThree === 'N') {
  alert('You\'re right ' + userName + '! He likes any other beer except IPA.');
} else if (questionThree === 'Y') {
  alert('Wrong! One day he\'ll grow up to be a man!');
} else {
  alert('Sorry ' + userName + ', that\'s not a valid answer. Please enter either a Y or N.');
}

var questionFour = prompt('Is Ray able to breakdance? (Please answer with Y or N)').toUpperCase();
if (questionFour === 'N') {
  alert('You\'re right ' + userName + '! He tried in high school but failed miserably!');
} else if (questionFour === 'Y') {
  alert('Wrong! Maybe if he quits Code Fellows and joins a breakdancing class!');
} else {
  alert('Sorry ' + userName + ', that\'s not a valid answer. Please enter either a Y or N.');
}

var questionFive = prompt('Does Ray like to eat chicken feet? (This time you can answer with Y or yes, and N or no.)').toUpperCase();
if (questionFive === 'Y' || questionFive === 'YES') {
  alert('You\'re right ' + userName + '! He\'s Chinese and Chinese people can eat anything!');
} else if (questionFive === 'N' || questionFive === 'NO') {
  alert('Wrong! Hint: He\'s Chinese...');
} else {
  alert('Sorry ' + userName + ', that\'s not a valid answer. Please enter either a Y or N.');
}


alert('Thank you ' + userName + ' for playing my guessing game!');
