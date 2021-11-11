let SELECTION = ["rock", "paper", "scissors"];

function randomSelection() {
  const computerNumber = Math.floor(Math.random() * SELECTION.length);
  const computerChoice = SELECTION[computerNumber];
  return computerChoice;
}

function playerPick() {
  let playerChoice = "rock";
  return playerChoice;
}

const playValue = playerPick();
const computerValue = randomSelection();

function determineWinner(playerValue, computerValue) {
  // Checking for a tie
  if (playerValue === computerValue) {
    return "DRAW!";
  }

  // Checking for rock
  if (playValue === "rock") {
    if (computerValue === "scissors") {
      return "You Win!";
    } else {
      return "Computer Wins";
    }
  }
  // Checking for scissors
  if (playValue === "scissors") {
    if (computerValue === "Paper") {
      return "You Win!";
    } else {
      return "Computer Wins";
    }
  }
  // Checking for paper
  if (playValue === "paper") {
    if (computerValue === "rock") {
      return "You Win!";
    } else {
      return "Computer Wins";
    }
  }
}

console.log(playValue);
console.log(computerValue);
console.log(determineWinner(playValue, computerValue));
