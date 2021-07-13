function runGame() {
  target = Math.floor(Math.random() * 100) + 1;
  let guessString = "";
  let guessNumber = 0;
  let correct = false;
  let numTries = 0;

  do {
    guessString = prompt("Enter a number between 1 and 100");
    numTries++;
    guessNumber = +guessString;
    correct = checkGuess(guessNumber, target);
  } while (!correct);
}

function checkGuess(guessNumber, target) {
  let correct = false;
  if (isNaN(guessNumber)) {
    alert("The value entered must be a number");
  } else if (guessNumber < 1 || guessNumber > 100) {
    alert("The number entered must be from 1-100");
  } else if (guessNumber > target) {
    alert("The number you entered is larger than the target.");
  } else if (guessNumber < target) {
    alert("The number you entered is less than the target.");
  } else {
      correct = true;
  }
  return correct;
}
