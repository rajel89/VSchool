var readline = require("readline-sync");
let Player = require("./player");
let Enemy = require("./enemy");

player = new Player();
enemy = new Enemy();


function startGame() {
  console.log("\nWelcome to colossal adventure RGP.");
  var name = readline.question("\nPayer, what is your name?  ");
  player.setName(name);

  console.log("\nHello " + name);

  while (player.getHP() > 0 || enemy.getHP() > 0) {

    var action = readline.keyIn("\nPress 'W' to walk or 'P' to print status. ").toLowerCase();

    if (action === "p") {
      console.log(player.displayPlayer());
    } 
      else if (action === "w" && enemy.doesEnemyAppear()) {
      
        var attack = readline.keyIn("\nYou are being attacked by a " + enemy.getEnemies() + " Press 'A' to attack or 'R' to run or escape ").toLowerCase();

      if (attack === "a") 
      {
        if (!fight()) {
          break;
        }
      } 
      else 
      {
        if (!run()) {
          break;
        }
      }
    }
  }
}

//function for player to run

function run()
{
  check = Math.floor((Math.random() * 2) + 1)
  if (check === 1 ){
    console.log("\nYou are dead!")
    console.log("You were not able to evade the hit from " + enemy.getCurrentEnemy() + "! ");
    return false;
  }
  else
  {
    console.log("\nGood job, you survived that one. ")
    return true;
  }
}

//function for player to fight










var choice = "";
do {
  console.clear();
  player.reset();
  enemy.reset();

  startGame();
  choise = readline
    .keyIn("\nWould you like to play again? (Y/N) : ")
    .toLowerCase();
} while (choice === "y");

console.log("Thank you for playing : ");
