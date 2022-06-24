//Create variables used in program.
let win = 0;
let lose = 0;
let tie = 0;
const winDisplay = document.querySelector('#win');
const loseDisplay = document.querySelector('#lose');
const tieDisplay = document.querySelector('#tie');
const container = document.querySelector('#container');
const result = document.createElement('div');
const playAgain = document.createElement('button');
const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');

//Set attributes and values to variables.
winDisplay.textContent = win;
loseDisplay.textContent = lose;
tieDisplay.textContent = tie;
playAgain.textContent = 'Play again?';
playAgain.setAttribute('id', 'playAgain');

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

//Computes the winner of rock paper scissors round by comparing the
//player selection against the computer selection. Increments player win or computer win count by 1
//based on result. Alerts the winner of the round or tie. Alerts if player makes an invaid selection.
function playRound(buttonId) {
  pSelec = buttonId;
  cSelec = computerSelection();
  switch (true){
    case (pSelec === "rock" && cSelec === "scissors"):
    case (pSelec === "paper" && cSelec === "rock"):
    case (pSelec === "scissors" && cSelec === "paper"):
      result.textContent = `You win! ${pSelec} beats ${cSelec}!`;
      container.appendChild(result);
      win++;
      winDisplay.textContent = win;
      if(win + lose + tie === 5){
        showResult();
      }
      break;
    case (pSelec === "rock" && cSelec === "paper"):
    case (pSelec === "paper" && cSelec === "scissors"):
    case (pSelec === "scissors" && cSelec === "rock"):
      result.textContent = `You lose! ${cSelec} beats ${pSelec}!`;
      container.appendChild(result);
      lose++;
      loseDisplay.textContent = lose;
      if(win + lose + tie === 5){
        showResult();
      }
      break;
    case (pSelec === "rock" && cSelec === "rock"):
    case (pSelec === "paper" && cSelec === "paper"):
    case (pSelec === "scissors" && cSelec === "scissors"):
      result.textContent = `It's a tie! You both chose ${cSelec}.`;
      container.appendChild(result);
      tie++;
      tieDisplay.textContent = tie;
      if(win + lose + tie === 5){
        showResult();
      }
      break;
    default:
      alert("Please select rock, paper, or scissors.");
  }
}

//Listener event for buttons. Passes id of button as argument.
btnRock.addEventListener('click', function(){
  playRound(this.id);
});
btnPaper.addEventListener('click', function(){
  playRound(this.id);
});
btnScissors.addEventListener('click', function(){
  playRound(this.id);
});

//Shows results after 5 games have been played and asks player to play again.
showResult = function(){
  if(win > lose){
    result.textContent = `You win ${win} to ${lose}!`;
    container.appendChild(result);
  } else if (lose > win){
    result.textContent = `You lose ${lose} to ${win}!`;
    container.appendChild(result);
  } else {
    result.textContent = `It's a tie! ${win} to ${lose}`;
    container.appendChild(result);
  }
  container.appendChild(playAgain);
  playAgain.addEventListener('click', function(){
    reset();
  });
}

//Resets score and result.
function reset(){
  win = 0;
  lose = 0;
  tie = 0;
  winDisplay.textContent = win;
  loseDisplay.textContent = lose;
  tieDisplay.textContent = tie;
  container.removeChild(result);
  container.removeChild(playAgain);
}