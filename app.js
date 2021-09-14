console.log("Hello World!");

// function for computer's move
function computerPlay() {
  const movesArray = ["Rock", "Paper", "Scissors"];
  const randomMove = Math.floor(Math.random() * movesArray.length);
//   console.log(randomMove, movesArray[randomMove]);

  return movesArray[randomMove];
}

// function that plays a single round of Rock Paper Scissors\
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection == computerSelection) {
    // Tie Cases
    console.log("Tie!");
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    // Win Cases
    console.log(`You Win! ${capitalize(playerSelection)} beats ${computerSelection}!`);
  } else {
    // Lose Cases
    console.log(`You Lose! ${capitalize(computerSelection)} beats ${playerSelection}!`);
  }
}


function game () {
    // Initialize initial scores
    var playerScore = 0;
    var computerScore = 0;
    
    // Game is played for 5 rounds
    for (let i = 0; i < 5; i++) {
        var playerSelection = prompt("Please choose your move: Rock / Paper / Scissors", "Rock");
        playRound(playerSelection, computerPlay());

    }
}




// Helper Functions

// Function to capitalize a string
function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}
