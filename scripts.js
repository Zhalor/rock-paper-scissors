const computerSelection = function() {
  const randomNum = Math.floor(Math.random() * 3) + 1;
  console.log(randomNum);
  if (randomNum === 1){
    return "rock"
  } else if (randomNum === 2){
    return "paper";
  } else {
    return "scissors";
  }
}

const playerSelection = function(){
  selection = prompt("Rock, paper, or scissors?");
  selection = selection.toLowerCase();
  console.log(selection);
  return selection;
}

function game(pSelec, cSelec){
  console.log(pSelec, cSelec);
  switch (true){
    case (pSelec === "rock" && cSelec === "scissors"):
    case (pSelec === "paper" && cSelec === "rock"):
    case (pSelec === "scissors" && cSelec === "paper"):
      alert(`You win! ${pSelec} beats ${cSelec}!`);
      break;
    case (pSelec === "rock" && cSelec === "paper"):
    case (pSelec === "paper" && cSelec === "scissors"):
    case (pSelec === "scissors" && cSelec === "rock"):
      alert(`You lose! ${cSelec} beats ${pSelec}!`);
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

game(playerSelection(), computerSelection());