const prompt = require('prompt-sync')();
const readline = require('readline-sync');
// const Game = require('./game')

// //Console must greet player with a fun message
// //Console must ask for the player's name and store it

const playerName = readline.question("Hello, what is your name? \n");
console.log("\nHello " + playerName + ", you are about to play the 'Colossal Adventure RPG'\n");


const gameModeOptions = {
  A: "Play",
  B: "Exit"
}

while (1) {
  console.log('------------ Select Actions ------------\n')
  console.log("A: Play\nB: Exit\n");

  let selectedGameMode = prompt("");
  if (selectedGameMode === 'A' || selectedGameMode === 'B') {
      if (selectedGameMode === 'B') {
          console.log('------------ Game Terminated ------------\n')
          break;
      } else {
          const newGame = new Game(gameModeOptions[selectedGameMode]);
          break;
      }
      
  }
}

