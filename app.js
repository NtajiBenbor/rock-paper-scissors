
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    return "rock";
  } else if (randomNumber === 2) {
    return "paper";
  } else if (randomNumber === 3) {
    return "scissors";
  }
}



function getHumanChoice() {
  let userInput = prompt('enter your choice:');
  return userInput;
}


function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let counter = 0;

  while (counter < 5) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    counter++;
  }
  let winner =
    humanScore > computerScore ? "congratulation! you won" : "sorry, Computer won.";
  console.log(winner);

  function playRound(playerChoice, computerChoice) {
    let userChoice = playerChoice.toLowerCase();
    if (userChoice === "scissors" && computerChoice === "paper") {
      console.log(`you win! ${playerChoice} beats ${computerChoice}`);
      humanScore++;
    } else if (userChoice === "paper" && computerChoice === "scissors") {
      console.log(`you lost! ${computerChoice} beats ${playerChoice}`);
      computerScore++;
    } else if (userChoice === "paper" && computerChoice === "rock") {
      console.log(`you win! ${playerChoice} beats ${computerChoice}`);
      humanScore++;
    } else if (userChoice === "rock" && computerChoice === "paper") {
      console.log(`you lost! ${computerChoice} beats ${playerChoice}`);
      computerScore++;
    } else if (userChoice === "rock" && computerChoice === "scissors") {
      console.log(`you win! ${playerChoice} beats ${computerChoice}`);
      humanScore++;
    } else if (userChoice === "scissors" && computerChoice === "rock") {
      console.log(`you lost! ${computerChoice} beats ${playerChoice}`);
      computerScore++;
    } else if (playerChoice === computerChoice) {
      console.log(`it is a tie`);
    }
  }
}

playGame()