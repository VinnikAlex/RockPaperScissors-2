const SELECTION = ["rock", "paper", "scissors"];

const pick = document.querySelectorAll("button");

// loop through each button element
pick.forEach((button) => {
  // listen for users choice
  button.addEventListener("click", () => {
    // passing appropriate id into playerPick() function
    const clicked = button.id;
    //storing player and comp choices into variables
    const playValue = clicked;
    const compValue = randomSelection();

    console.log(playValue);
    console.log(compValue);

    // passing player and computer choice variables to check who wins
    console.log(determineWinner(playValue, compValue));
  });
});

// returns random SELECTION
function randomSelection() {
  const computerNumber = Math.floor(Math.random() * SELECTION.length);
  const computerChoice = SELECTION[computerNumber];
  return computerChoice;
}

function determineWinner(playerValue, computerValue) {
  // Checking for a tie
  if (playerValue === computerValue) {
    return "DRAW!";
  }

  // Checking for rock
  if (playerValue === "rock") {
    if (computerValue === "scissors") {
      return "You Win!";
    } else {
      return "Computer Wins";
    }
  }
  // Checking for scissors
  if (playerValue === "scissors") {
    if (computerValue === "paper") {
      return "You Win!";
    } else {
      return "Computer Wins";
    }
  }
  // Checking for paper
  if (playerValue === "paper") {
    if (computerValue === "rock") {
      return "You Win!";
    } else {
      return "Computer Wins";
    }
  }
}

// console.log(determineWinner(playerPick(), randomSelection()));
// console.log(playerPick());

// // use all functions prior functions
// function game() {
//   playerPick();
//   randomSelection();
//   console.log(determineWinner(playerPick(), randomSelection()));
// }

// // loop through game() to play 5 rounds
// function playRound() {
//   for (let i = 0; i < 5; i++) {
//     game();
//   }
// }
// // use the function!
// playRound();
