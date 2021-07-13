function runGame() {
  target = Math.floor(Math.random() * 100) + 1;
  let guessString = "";
  let guessNumber = 0;
  let correct = false;
  let numTries = 0;

  do {
    guessString = prompt("Enter a number between 1 and 100");
    numTries++
    guessNumber = +guessString;
    correct = checkGuess(guessNumber, target)
  } while (!correct);
}
