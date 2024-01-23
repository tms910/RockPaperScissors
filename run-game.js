for(let count=0; count<5; count++){
let rock=Math.floor(Math.random()*100)+1, paper=Math.floor(Math.random()*100)+1, scissors=Math.floor(Math.random()*100)+1;
getComputerChoise();
let computerSelection=getComputerChoise();
let playerSelection=prompt('Choose Rock, Paper or Scissors');
console.log(playTime(computerSelection,playerSelection));




function getComputerChoise(){
    if(rock>paper && rock>scissors){
        return 'Rock';
    }
    else if(paper>rock && paper>scissors){
        return 'Paper';
    }
    else{
        return 'Scissors';
    }
}

    function playTime(computerSelection,playerSelection){
        if(computerSelection==='Scissors'){
            if(playerSelection==='paper' || playerSelection==='Paper' || playerSelection==='PAPER'){
                return "Scissors vs Paper, Computer won";
            }
            else if(playerSelection==='rock' || playerSelection==='Rock' || playerSelection==='ROCK'){
                return "Scissors vs Rock, Player won";
            }
            else if(playerSelection==='scissors' || playerSelection==='Scissors' || playerSelection==='SCISSORS'){
                return "Scissors vs Scissors, it's a tie ";
            }
        }

        else if(computerSelection==='Paper'){
            if(playerSelection==='rock' || playerSelection==='Rock' || playerSelection==='ROCK'){
                return "Paper vs Rock, Computer won";
            }
            else if(playerSelection==='scissors' || playerSelection==='Scissors' || playerSelection==='SCISSORS'){
                return "Paper vs Scissors, Player won";
            }
            else if(playerSelection==='paper' || playerSelection==='Paper' || playerSelection==='PAPER'){
                return "Paper vs Paper, it 's a tie";
            }
        }

        else if(computerSelection==='Rock'){
            if(playerSelection==='scissors' || playerSelection==='Scissors' || playerSelection==='SCISSORS'){
                return "Rock vs Scissors, Computer won";
            }
            else if(playerSelection==='paper' || playerSelection==='Paper' || playerSelection==='PAPER'){
                return "Rock vs Paper, Player won";  
            }
            else if(playerSelection==='rock' || playerSelection==='Rock' || playerSelection==='ROCK'){
                return "Rock vs Rock, it's a tie";
            }
        }
    }
}