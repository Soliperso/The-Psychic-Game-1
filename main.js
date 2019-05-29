let wins = 0;
let losses = 0;
let guessesLeft = 9;

let winsScore = document.getElementById('wins');
let lossesScore = document.getElementById('losses');
let guessesLeftScore = document.getElementById('guessesLeft');
let guessesSoFar = document.getElementById('GuessesSoFar');

let choices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];



document.onkeyup = (event) => {
    let userGuess = event.key;
    console.log(userGuess);
    let computerGuess = choices[Math.floor(Math.random() * choices.length)];
    console.log(computerGuess);

    if (userGuess === computerGuess) {
        // Increment the wins by 1
        wins++;
        winsScore.textContent = wins;
        guessesSoFar.textContent += ` ${userGuess}, `;
    }  else {
        // Increment lossesses and decrement guesses left by 1
        guessesLeft--;
        guessesLeftScore.textContent = guessesLeft;

        guessesSoFar.textContent += ` ${userGuess}, `;

        // if no guess left reset the game to its initial state
        if (guessesLeft < 1) {
            guessesLeft = 9;

            guessesLeftScore.textContent = guessesLeft;
            losses++;

            lossesScore.textContent = losses;
            wins = 0;
            winsScore.textContent = wins;
            guessesSoFar.textContent = '';
        }
}
}



