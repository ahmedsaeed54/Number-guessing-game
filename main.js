const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random()* (maxNum-minNum +1)) + minNum;
let attemp = 0;
let guess;
let running = true;
while(running){
    guess = window.prompt(`Guess a number between ${minNum}- ${maxNum}`);
    guess = Number(guess);
    if(isNaN(guess)){
        window.alert('Enter valid number');
    }
    else if(guess < minNum || guess > maxNum ){
        window.alert('Enter valid number');
    }
    else{
        attemp++;
        if(guess < answer){
            window.alert('Too low number');
        }
        else if(guess > answer){
            window.alert('Too high number');
        }
        else {
            window.alert(`The Correct answer was ${answer}. It took you ${attemp} attemps`);
            running = false;
    }
    }
    
} 