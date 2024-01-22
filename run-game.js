let rock=Math.floor(Math.random()*100)+1, paper=Math.floor(Math.random()*100)+1, scissors=Math.floor(Math.random()*100)+1;
function getComputerChoise(){
    console.log(rock,paper,scissors);
    if(rock>paper && rock>scissors){
        console.log('Rock');
    }
    else if(paper>rock && paper>scissors){
        console.log('Paper');
    }
    else{
        console.log('Scissors');
    }
}

getComputerChoise();

