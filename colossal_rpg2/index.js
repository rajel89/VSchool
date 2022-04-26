const prompt = require('prompt-sync')();
const readline = require('readline-sync');


// //Console must greet player with a fun message
// //Console must ask for the player's name and store it

const playerName = readline.question("Hello, what is your name? \n");
console.log("\nHello " + playerName + ", you are about to play the 'Colossal Adventure RPG'\n");


const player = {
  name: (''),
  hp: 100,
  inventory: []
}

const enemy = {
  hp: 100
}


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
          while(player.hp > 0 ){
            let action = readline.keyIn('\nPress W to walk or P to check Health and Inventory. ').toLowerCase();
            if(action === 'p'){
              console.log(playerName)
            }
          }
          break;
      }
      
  }
}

