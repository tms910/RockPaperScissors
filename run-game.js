/*playerWins-computerWins are used as a score counter*/
let playerWins=0,computerWins=0;

function game(){
    /*Declare game values*/
    for(let count=0; count<5; count++){
        let rock=Math.floor(Math.random()*100)+1, 
            paper=Math.floor(Math.random()*100)+1,
            scissors=Math.floor(Math.random()*100)+1;
        let computerSelection=getComputerChoise(), playerSelection=prompt('Choose Rock, Paper or Scissors');

        /*Decide whoever won the round and save the score value,when it's a tie nothing saves and loop counter goes down by 1*/
        if(playTime(playerSelection,computerSelection)!=="Tie"){
            if(playTime(playerSelection,computerSelection)==="Computer won"){
                computerWins++;
                console.log(playerSelection,'vs',computerSelection,':Computer Won');
            }
            else if(playTime(playerSelection,computerSelection)==="Player won"){
                playerWins++;
                console.log(playerSelection,'vs',computerSelection,':Player Won');
            }
        }
        else if(playTime(playerSelection,computerSelection)==="Tie"){
            alert("It's a tie, play again! ");
            count--;
        }
    


        /*function getComputerChoise decides the string return value of getComputerChoise*/
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

        
        /*function playTime will decide the return string value according to computerSelection and playerSelection*/
        function playTime(playerSelection,computerSelection){
            if(computerSelection==='Scissors'){
                if(playerSelection==='paper' || playerSelection==='Paper' || playerSelection==='PAPER'){
                    return "Computer won";
                }
                else if(playerSelection==='rock' || playerSelection==='Rock' || playerSelection==='ROCK'){
                    return "Player won";
                }
                else if(playerSelection==='scissors' || playerSelection==='Scissors' || playerSelection==='SCISSORS'){
                    return "Tie";
                }
            }

            else if(computerSelection==='Paper'){
                if(playerSelection==='rock' || playerSelection==='Rock' || playerSelection==='ROCK'){
                    return "Computer won";
                }
                else if(playerSelection==='scissors' || playerSelection==='Scissors' || playerSelection==='SCISSORS'){
                    return "Player won";
                }
                else if(playerSelection==='paper' || playerSelection==='Paper' || playerSelection==='PAPER'){
                    return "Tie";
                }
            }

            else if(computerSelection==='Rock'){
                if(playerSelection==='scissors' || playerSelection==='Scissors' || playerSelection==='SCISSORS'){
                    return "Computer won";
                }
                else if(playerSelection==='paper' || playerSelection==='Paper' || playerSelection==='PAPER'){
                    return "Player won";  
                }
                else if(playerSelection==='rock' || playerSelection==='Rock' || playerSelection==='ROCK'){
                    return "Tie";
                }
            }
        }
    }

        /*console.log prints game results on console and then prints the final winner*/
        console.log('Player score:',playerWins,'\nComputer score:',computerWins);
        if(playerWins>computerWins){
            console.log('Player is the final winner!!!');
        }
        else{
            console.log('Computer dominated you! :)');
        }   
}
