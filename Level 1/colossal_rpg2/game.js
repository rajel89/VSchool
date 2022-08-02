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
      
        var attack = readline.keyIn("\nYou are being attacked by a " + enemy.getEnemies() + " Press 'A' to attack or 'R' to run or escape: ").toLowerCase();

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

function fight()
{
  enemyPower = Math.floor((Math.random() * 5) + 1);
  playerPower = Math.floor ((Math.random() * 10) + 1);
  
  if(playerPower <= enemyPower)
  {
    console.log("\nYou are dead!");
    console.log(enemy.getCurrentEnemy() + "'s Attack was too much!");
    console.log("Better Luck Next Time!");
    console.log("Player: " + playerPower + ", Enemy: " + enemyPower);
    return false;
  }
  else
  {
    var playerHealth = player.updateHealth();
    var enemyHealth = enemy.updateHealth();
    var prize = player.getPrize();
    if (playerHealth >= 0 && enemyHealth >= 0)

    {
      console.log("\nAttacked with " + player.getWeapon());
      console.log("Enemy health: " + enemy.getHP());
      console.log("Player health: " + player.getHP());
      console.log("\nGood job! You survived the duel and have won a '"+ prize + "' as a prize ");
      player.addToPrizeList(prize);
      return true;

    }
    else if (playerHealth < 0 && enemyHealth > 0 )
    {
      console.log("\nYou are dead!");
      console.log(enemy.getCurrentEnemy() + "'s Attack was too much!");
      return false;

    }
    else if (playerHealth > 0 && enemyHealth < 0 )
    {
      console.log("Congratuations " + player.getName() + "! You have won the Game!");
      return false;
    }
  }
}


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
