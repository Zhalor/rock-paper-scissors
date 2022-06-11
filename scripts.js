// Creats variables for player win and computer win count. Sets them to 0.
let pWin = 0;
let cWin = 0;

//Function to generate a random number between 1 and 3
//Converts number to the string rock, paper, or scissors based on number, respectively and 
//returns it to variable computerSelection.
const computerSelection = function() {
  const randomNum = Math.floor(Math.random() * 3) + 1;
  if (randomNum === 1){
    return "rock"
  } else if (randomNum === 2){
    return "paper";
  } else {
    return "scissors";
  }
}

//prompts player for selection of rock, paper, or scissors
//converts selection to lowercase string and returns it to variable playerSelection.
const playerSelection = function() {
  selection = prompt("Rock, paper, or scissors?");
  selection = selection.toLowerCase();
  return selection;
}

//Computes the winner of rock paper scissors round by comparing the
//player selection against the computer selection. Increments player win or computer win count by 1
//based on result. Alerts the winner of the round or tie. Alerts if player makes an invaid selection.
function playRound(pSelec, cSelec) {
  console.log(pSelec, cSelec);
  switch (true){
    case (pSelec === "rock" && cSelec === "scissors"):
    case (pSelec === "paper" && cSelec === "rock"):
    case (pSelec === "scissors" && cSelec === "paper"):
      alert(`You win! ${pSelec} beats ${cSelec}!`);
      pWin++;
      break;
    case (pSelec === "rock" && cSelec === "paper"):
    case (pSelec === "paper" && cSelec === "scissors"):
    case (pSelec === "scissors" && cSelec === "rock"):
      alert(`You lose! ${cSelec} beats ${pSelec}!`);
      cWin++;
      break;
    case (pSelec === "rock" && cSelec === "rock"):
    case (pSelec === "paper" && cSelec === "paper"):
    case (pSelec === "scissors" && cSelec === "scissors"):
      alert(`It's a tie! You both chose ${cSelec}.`);
      break;
    default:
      alert("Please select rock, paper, or scissors.");
  }
}

//Runs 5 rounds of the game. Runs the player selection and computer selection functions.
//The results are passed as variables to the playRound function. After 5 rounds, the player win and
//computer win variables are compared and the winner or a tie is alerted.
function game(){
  for (let i = 0; i < 5; i++) {
    playRound(playerSelection(), computerSelection());
  }
  if (pWin > cWin){
    alert(`Congratulations You win ${pWin} to ${cWin}!`);
  } else if (cWin > pWin){
    alert(`Better luck next time. You lose ${cWin} to ${pWin}.`);
  } else{
    alert(`It's a tie! You both scored ${pWin}.`);
  }
}

game();