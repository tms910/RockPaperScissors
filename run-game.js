/*playerWins-computerWins are used as a score counter*/
let playerWins=0,computerWins=0, playerSelection='';

const   rock=document.querySelector('#rock'),
        paper=document.querySelector('#paper'),
        scissors=document.querySelector('#scissors'),
        results=document.querySelector('.results'),
        div=document.createElement('div');


/*Add event while clicking game buttons */
rock.addEventListener('click',(event)=>{
    playerSelection='Rock';
    game();
})

paper.addEventListener('click',(event)=>{
    playerSelection='Paper';
    game();
})

scissors.addEventListener('click',(event)=>{
    playerSelection='Scissors';
    game();
})

function game(){
    /*Declare computer selection*/
        let rock=Math.floor(Math.random()*100)+1, 
            paper=Math.floor(Math.random()*100)+1,
            scissors=Math.floor(Math.random()*100)+1,
            computerSelection=getComputerChoise();

        /*Decide whoever won the round and save the score value,when it's a tie nothing saves and loop counter goes down by 1*/
        
            if(playTime(playerSelection,computerSelection)!=="Tie"){
                if(playTime(playerSelection,computerSelection)==="Computer won"){
                    computerWins++;
                    results.textContent='Player: '+playerSelection +' vs '+'PC: '+computerSelection;
                }
                else if(playTime(playerSelection,computerSelection)==="Player won"){
                    playerWins++;
                    results.textContent='Player: '+playerSelection +' vs '+'PC: '+computerSelection;
                }
            }
            
            else if(playTime(playerSelection,computerSelection)==="Tie"){
                results.textContent='Player: '+playerSelection +' vs '+'PC: '+computerSelection;
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
                if(playerSelection==='Paper'){
                    return "Computer won";
                }
                else if(playerSelection==='Rock'){
                    return "Player won";
                }
                else if(playerSelection==='Scissors'){
                    return "Tie";
                }
            }

            else if(computerSelection==='Paper'){
                if(playerSelection==='Rock'){
                    return "Computer won";
                }
                else if(playerSelection==='Scissors'){
                    return "Player won";
                }
                else if(playerSelection==='Paper'){
                    return "Tie";
                }
            }

            else if(computerSelection==='Rock'){
                if(playerSelection==='Scissors'){
                    return "Computer won";
                }
                else if(playerSelection==='Paper'){
                    return "Player won";  
                }
                else if(playerSelection==='Rock'){
                    return "Tie";
                }
            }
        }

        div.textContent='Player score= '+playerWins+' Computer score= '+computerWins;
        results.appendChild(div);

        if(playerWins==5 || computerWins==5){
            const final=document.createElement('p')
            const div_player=document.createElement('p');
            const div_computer=document.createElement('div');
            final.textContent='Final Score:';
            div_player.textContent='Player score= '+playerWins;
            div_computer.textContent='Computer score= '+computerWins;
            div.appendChild(final);
            final.appendChild(div_player);
            div_player.appendChild(div_computer);
            playerWins=0;
            computerWins=0;
        }

        console.log(playerWins);
        console.log(computerWins);
}

       
