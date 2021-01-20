let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random()*10);
}

const compareGuesses = (humanGuess, computerGuess, target) => {
    console.log(`target: ${target} - humanGuess: ${humanGuess} - computerGuess: ${computerGuess}`);
    if(10 < humanGuess || humanGuess < 0){
        alert('Your number is out of range!');
    }else{
        let humanResult = getAbsoluteDistance(humanGuess, target);
        let computerResult = getAbsoluteDistance(computerGuess, target);
        console.log(`humanResult: ${humanResult} - computerResult: ${computerResult}`);
        
        if(humanResult < computerResult){
            console.log('Human won!');
            return true;
        }else{
            console.log('Computer won!');
            return false;
        }
    }
}

const getAbsoluteDistance = (guess, target) => {
    return Math.abs(target - guess);
}

const updateScore = (winner) =>{
    if(winner){
        humanScore++;
    }else{
        computerScore++;
    }
}

const advanceRound = () => {
    currentRoundNumber++;
}

/*
for (let i = 0; i < 10; i++) {
    console.log(`Round: ${currentRoundNumber}`);
    updateScore(compareGuess(5, 2, generateTarget()));
    advanceRound();
    console.log(`humanScore: ${humanScore} - computerScore: ${computerScore}`);
    console.log('');
}
*/