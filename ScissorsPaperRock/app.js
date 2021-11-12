const SELECTION = ["rock", "paper", "scissors"];

// returns random SELECTION
function randomSelection() {
  const computerNumber = Math.floor(Math.random() * SELECTION.length);
  const computerChoice = SELECTION[computerNumber];
  return computerChoice;
}
// returns players selection
function playerPick() {
  let playerChoice = "rock";
  return playerChoice;
}
//storing players choice
const playValue = playerPick();
//storing computers choice
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
// use all functions inside of game() function
function game() {
  playerPick();
  randomSelection();
  console.log(determineWinner(playerPick(), randomSelection()));
}

// loop through game() to play 5 rounds
function playRound() {
  for (let i = 0; i < 5; i++) {
    game();
  }
}
// use the function!
playRound();
