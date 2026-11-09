function getComputerChoice(){
    let random= Math.random();

     if (random <= 1/3){return "rock";} 
     else if  (random <= 2/3){return "paper";}
     else {return "scissors";}
}
//console.log(getComputerChoice());

function getHumanChoice(){
    let choice= prompt('rock, paper or scissors?');
    return choice;
}
//console.log(getHumanChoice())

function playGame(){
    let humanScore=0;
    let computerScore=0;

    function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log (`It's a tie`);
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log (`You win! Rock beats Scissors.`);
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log (`You win! Paper beats Rock.`);
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log (`You win! Scissors beats Paper.`);
        humanScore++;
    } else {
       console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
       computerScore++;
    }
    }
    playRound(getHumanChoice(),getComputerChoice());
    playRound(getHumanChoice(),getComputerChoice());
    playRound(getHumanChoice(),getComputerChoice());
    playRound(getHumanChoice(),getComputerChoice());
    playRound(getHumanChoice(),getComputerChoice());

    if(humanScore===computerScore)
        {console.log(`It's a tie!`);
    } else if(humanScore>computerScore)
        {console.log(`You win!`)
    } else console.log('You lose!')
}
playGame();

