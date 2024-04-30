let min = parseInt(document.getElementById('min').value);
let max = parseInt(document.getElementById('max').value);
let guessCount = 0;
let guess = Math.floor((min + max) / 2);

document.getElementById('guess').innerText = guess;
function makeGuess(feedback) {
    if (feedback === 'lower') {
        max = guess;
    } else if (feedback === 'higher') {
        min = guess;
    }
    guess = Math.floor((min + max) / 2);
    document.getElementById('guess').innerText = guess;
    guessCount++;

    if (feedback === 'correct') {
        document.getElementById('guess').innerText = `Your number was ${guess}.🥳\n It took me ${guessCount} guesses to find it!😎`;
        disableButtons();
    }
}
function disableButtons() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.disabled = true;
    });
}