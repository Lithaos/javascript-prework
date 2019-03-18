var argComputerMove, argMoveId, argPlayerMove, computerMove, playerInput, playerMove, randomNumber;

function getMoveName(argMoveId) {
    printMessage('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
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
    printMessage('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
    if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
        printMessage('Wygrywasz!');
    } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
        printMessage('Wygrywasz!');
    } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
        printMessage('Wygrywasz!');
    } else if (argPlayerMove == argComputerMove && true) {
        printMessage('Remis');
    } else {
        printMessage('Przegrywasz :(');
    }
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}

function buttonClicked(buttonName) {
    clearMessages();
    printMessage(buttonName + " został kliknięty");
    playerMove = buttonName;
    printMessage('wybór ruchu gracza to: ' + playerInput);
    printMessage('ruch gracza to: ' + playerMove);
    randomNumber = Math.floor(Math.random() * 3 + 1);
    printMessage('wylosowana liczba to: ' + randomNumber);
    computerMove = getMoveName(randomNumber);
    printMessage('ruch komputera to: ' + computerMove);
    printMessage("lecim");
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