var argComputerMove, argMoveId, argPlayerMove, computerMove, playerInput, playerMove, randomNumber, resultPlayer = 0,
    resultComputer = 0;

function getMoveName(argMoveId) {
    if (argMoveId == 1) {
        return 'kamień';
    } else if (argMoveId == 2) {
        return 'papier';
    } else if (argMoveId == 3) {
        return 'nożyce';
    } else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
        return 'kamień';
    }
}

function displayResult(argPlayerMove, argComputerMove) {
    if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
        resultPlayer++;
        printMessage('Wygrywasz!');
    } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
        resultPlayer++;
        printMessage('Wygrywasz!');
    } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
        resultPlayer++;
        printMessage('Wygrywasz!');
    } else if (argPlayerMove == argComputerMove && true) {
        printMessage('Remis');
    } else {
        resultComputer++;
        printMessage('Przegrywasz :(');
    }
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
    document.getElementById('result').innerHTML = resultPlayer + " - " + resultComputer;

}

function buttonClicked(buttonName) {
    clearMessages();
    playerMove = buttonName;
    printMessage('Ruch gracza to: ' + playerMove);
    randomNumber = Math.floor(Math.random() * 3 + 1);
    computerMove = getMoveName(randomNumber);
    printMessage('Ruch komputera to: ' + computerMove);
    displayResult(playerMove, computerMove);
}


buttonRock = document.getElementById('button-rock');
buttonRock.addEventListener('click', function () {
    buttonClicked('kamień');
});
buttonPaper = document.getElementById('button-paper');
buttonPaper.addEventListener('click', function () {
    buttonClicked('papier');
});
buttonScissors = document.getElementById('button-scissors');
buttonScissors.addEventListener('click', function () {
    buttonClicked('nożyce');
});