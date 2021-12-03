// Computer
let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log("Wylosowana liczba to: " + randomNumber);

let computerMove = "kamień";

if(randomNumber == 2){
  computerMove = "papier";
} else if(randomNumber == 3){
  computerMove = "nożyce";
}

printMessage("Mój ruch to: " + computerMove);

// Player
let playerInput = prompt("Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce");

console.log("Gracz wpisał: " + playerInput);

let playerMove = "nieznany ruch";

if(playerInput == "1"){
  playerMove = "kamień";
} else if (playerInput == "2"){
  playerMove = "papier";
} else if (playerInput == "3"){
  playerMove = "nożyce";
}

printMessage("Twój ruch to: " + playerMove);

// Result
if(computerMove == "kamień" && playerMove == "papier"){
  printMessage("Ty wygrywasz!");
}

if(computerMove == "kamień" && playerMove == "nożyce"){
  printMessage("Ja wygrywam!");
}

if(computerMove == "kamień" && playerMove == "kamień"){
  printMessage("Remis!");
}

if(computerMove == "papier" && playerMove == "nożyce"){
  printMessage("Ty wygrywasz!");
}

if(computerMove == "papier" && playerMove == "kamień"){
  printMessage("Ja wygrywam!");
}

if(computerMove == "papier" && playerMove == "papier"){
  printMessage("Remis!");
}

if(computerMove == "nożyce" && playerMove == "kamień"){
  printMessage("Ty wygrywasz!");
}

if(computerMove == "nożyce" && playerMove == "papier"){
  printMessage("Ja wygrywam!");
}

if(computerMove == "nożyce" && playerMove == "nożyce"){
  printMessage("Remis!");
}

if(playerMove == "nieznany ruch"){
  printMessage("Wybierz poprawny ruch!");
}