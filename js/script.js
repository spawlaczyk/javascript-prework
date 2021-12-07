// Function getMoveName
function getMoveName(argMoveId){
  if(argMoveId == 1){
    return "kamień";
  } else if(argMoveId == 2){
    return "papier";
  } else if(argMoveId == 3){
    return "nożyce";
  } else {
    printMessage("Nie znam ruchu o id " + argMoveId + ".");
    return "nieznany ruch";
  }
}

// Function displayResult
function displayResult(argComputerMove, argPlayerMove){
  printMessage("Zagrałem " + argComputerMove + ", a Ty " + argPlayerMove + ".");

  if(argComputerMove == "kamień" && argPlayerMove == "papier"){
    printMessage("Ty wygrywasz!");
  } else if(argComputerMove == "kamień" && argPlayerMove == "nożyce"){
    printMessage("Tym razem przegrywasz :(");
  } else if(argComputerMove == "kamień" && argPlayerMove == "kamień"){
    printMessage("Remis!");
  } else if(argComputerMove == "papier" && argPlayerMove == "nożyce"){
    printMessage("Ty wygrywasz!");
  } else if(argComputerMove == "papier" && argPlayerMove == "kamień"){
    printMessage("Tym razem przegrywasz :(");
  } else if(argComputerMove == "papier" && argPlayerMove == "papier"){
    printMessage("Remis!");
  } else if(argComputerMove == "nożyce" && argPlayerMove == "kamień"){
    printMessage("Ty wygrywasz!");
  } else if(argComputerMove == "nożyce" && argPlayerMove == "papier"){
    printMessage("Tym razem przegrywasz :(");
  } else if(argComputerMove == "nożyce" && argPlayerMove == "nożyce"){
    printMessage("Remis!");
  } else {
    printMessage("Wybeirz poprawną liczbę.");
  }
}

// Computer
let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log("Wylosowana liczba to: " + randomNumber);

let computerMove = getMoveName(randomNumber);

printMessage("Mój ruch to: " + computerMove);

// Player
let playerInput = prompt("Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce");

console.log("Gracz wpisał: " + playerInput);

let playerMove = getMoveName(playerInput);

printMessage("Twój ruch to: " + playerMove);

// Result
argComputerMove = getMoveName(randomNumber);

argPlayerMove = getMoveName(playerInput);

displayResult(argComputerMove, argPlayerMove);