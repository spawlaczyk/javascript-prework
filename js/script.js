{
  const playGame = function(playerInput){
    clearMessages();
    const getMoveName = function(argMoveId){
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
  
    const displayResult = function(argComputerMove, argPlayerMove){
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
  
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    
    console.log("Wylosowana liczba to: " + randomNumber);
    
    console.log("Gracz wpisał: " + playerInput);
    
    const argComputerMove = getMoveName(randomNumber);
    
    const argPlayerMove = getMoveName(playerInput);
  
    displayResult(argComputerMove, argPlayerMove);
  }

  document.getElementById("play-rock").addEventListener("click", function(){
    playGame(1);
  });
  document.getElementById("play-paper").addEventListener("click", function(){
    playGame(2);
  });
  document.getElementById("play-scissors").addEventListener("click", function(){
    playGame(3);
  });
}