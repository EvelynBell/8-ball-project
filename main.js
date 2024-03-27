//Initialize string to store user's name and bool which will track whether name was selected or not
var userName = 'Eve';
var hasName = false;

//If the userName string was edited, then they have input a name and we change our bool value to True
if(userName !== '') {
    console.log(`Hello, ${userName}!`);
    hasName = true;
} else {
    console.log('Hello!');
}

//Initialize string to store the question the user wishes to ask
var userQuestion = 'Will I own a dog in the future?';

//If a name was inputted earlier, we can use it to personalize this statement
if(hasName) {
    console.log(`${userName} has asked: "${userQuestion}"`);
} else {
    console.log(`You have asked: "${userQuestion}"`);
}

//Generate random number 0-7 representing each response from the 8-ball and create a string to store response
var randomNumber = Math.floor(Math.random() * 8);
var eightBall = '';

//Assign response based on random number
if (randomNumber === 0) {
    eightBall = 'It is certain.';
} else if (randomNumber === 1) {
    eightBall = 'It is decidedly so.';
} else if (randomNumber === 2) {
    eightBall = 'Reply hazy try again.';
} else if (randomNumber === 3) {
    eightBall = 'Cannot predict now.';
} else if (randomNumber === 4) {
    eightBall = 'Do not count on it.';
} else if (randomNumber === 5) {
    eightBall = 'My sources say no.';
} else if (randomNumber === 6) {
    eightBall = 'Outlook not so good.';
} else if (randomNumber === 7) {
    eightBall = 'Signs point to yes.';
}

//Output what side the eightball has landed on and its response!
console.log(`The 8-Ball has landed on face ${randomNumber}! Response is: ${eightBall}`);
