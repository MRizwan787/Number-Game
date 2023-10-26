// "Guess the Number" Game //

import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function generateRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const minNumber = 1;
const maxNumber = 100;
const targetNumber = generateRandomNumber(minNumber, maxNumber);
let attempts = 0;

function startGame() {
  console.log(`Welcome to the Guess the Number game!`);
  console.log(`I've selected a random number between ${minNumber} and ${maxNumber}.`);

  rl.question('Take a guess: ', (input) => {
    const guess = parseInt(input, 10);

    if (isNaN(guess)) {
      console.log('Please enter a valid number.');
    } else {
      attempts++;
      if (guess === targetNumber) {
        console.log(`Congratulations! You've guessed the number ${targetNumber} in ${attempts} attempts.`);
        rl.close();
      } else if (guess < targetNumber) {
        console.log('Try a higher number.');
        startGame();
      } else {
        console.log('Try a lower number.');
        startGame();
      }
    }
  });
}

startGame();

// Run "Guess the Number" game by executing the following command:
// node guessNumber.js

