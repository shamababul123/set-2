let computerSecret;
let userGuess;
computerSecret = parseInt(Math.random() * 100);
userGuess = 40; 
if (userGuess === computerSecret) {
    console.log("Congratulations! You win!! You guessed the number!");
} else if (userGuess > computerSecret) {
    console.log("Too high");
} else if (userGuess < computerSecret) {
    console.log("Too low");
}
// answer(Too low)