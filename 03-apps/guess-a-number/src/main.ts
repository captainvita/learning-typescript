const input = document.getElementById("input") as HTMLInputElement;
let guesses: number[] = [];
const submitButton = document.getElementById(
  "submitInput",
) as HTMLButtonElement;
const guessedNumber = document.getElementById(
  "guessedNumber",
) as HTMLOutputElement;
const highOrLow = document.getElementById("highOrLow") as HTMLHeadingElement;
const gameEnd = document.getElementById("gameEnd") as HTMLHeadingElement;
let resetButton: HTMLButtonElement;
let randomNumber = 0;
let guessCount = 0;
const MAX_GUESSES = 10;

function randomNumberGenerator(): number {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  return randomNumber;
}

function submitInput(): void {
  const intValue = parseInt(input.value, 10);

  if (!input.value || intValue < 1 || intValue > 100) {
    highOrLow.textContent = "Please type a number between 1 and 100!";
    return;
  }

  if (guesses.includes(intValue)) {
    highOrLow.textContent = `You have guessed ${intValue} already!`;
    return;
  }

  guessCount++;
  guesses.push(intValue);
  guessedNumber.value = guesses.join(", ");
  input.value = "";
  input.focus();
  compareNumbers();
}

function compareNumbers(): void {
  const inputValue = guesses[guesses.length - 1];

  if (guessCount === MAX_GUESSES) {
    gameEnd.style.color = "red";
    gameEnd.textContent = "Game Over!";
    gameOver();
    return;
  }

  if (inputValue < randomNumber) {
    highOrLow.textContent = `Guess is too low! You have ${MAX_GUESSES - guessCount} tries left.`;
    return;
  } else if (inputValue > randomNumber) {
    highOrLow.textContent = `Guess is too high! You have ${MAX_GUESSES - guessCount} tries left.`;
    return;
  } else {
    gameEnd.style.color = "gold";
    gameEnd.textContent = "Congrats, your guess is correct!";
    gameOver();
  }
}

function gameOver() {
  input.disabled = true;
  submitButton.disabled = true;
  highOrLow.textContent = "";
  resetButton = document.createElement("button");
  resetButton.textContent = "Restart Game";
  document.getElementById("resultField")?.appendChild(resetButton);
  resetButton.addEventListener("click", restart);
}

function restart() {
  guesses = [];
  guessCount = 0;
  guessedNumber.value = "";
  gameEnd.textContent = "";
  resetButton.remove();
  input.disabled = false;
  submitButton.disabled = false;
  randomNumber = randomNumberGenerator();
}

randomNumber = randomNumberGenerator();

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    submitButton.click();
  }
});

submitButton.addEventListener("click", submitInput);
