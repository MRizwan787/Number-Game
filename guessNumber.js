"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function generateRandomNumber(min, max) {
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
        }
        else {
            attempts++;
            if (guess === targetNumber) {
                console.log(`Congratulations! You've guessed the number ${targetNumber} in ${attempts} attempts.`);
                rl.close();
            }
            else if (guess < targetNumber) {
                console.log('Try a higher number.');
                startGame();
            }
            else {
                console.log('Try a lower number.');
                startGame();
            }
        }
    });
}
startGame();
