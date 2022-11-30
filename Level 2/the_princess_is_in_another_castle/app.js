//to start terminal type node app.js

//Create a class for a player that has the following properties:
//"name" of type "String"
//"totalCoins" of type "Number"
//"status" of type "String" (Options are Powered Up, Big, Small, and Dead)
//"hasStar" of type "Boolean" (Is a star active?)

class Player {
  constructor(status, hasStar) {
    this.name = ""; //name is equal to blank to allow for dynamic functionality; to allow for Mario or Luigi to be passed
    this.totalCoins = 0; //every player will start with 0
    this.status = status;
    this.statusOptions = ["Powered Up", "Big", "Small", "Dead"]; //"status" of type "String" (Options are Powered Up, Big, Small, and Dead)
    this.hasStar = hasStar;
  }

  //Has a parameter called namePicked where the names "Mario" or "Luigi" is passed
  setName = () => {
    let namePicked = Math.floor(Math.random() * 2);
    switch (namePicked) {
      case 0:
        this.name = "Mario";
        break;
      case 1:
        this.name = "Luigi";
        break;
    }
  };

  //gotHit of type function - this is called whenever the player is hit by an enemy.
  //gotHit() will set the status property accordingly. (Statuses go from "Powered Up" to "Big" to "Small" to "Dead".)

  gotHit() {
    if (this.hasStar === true) {
      console.log("Your Star protected your! \n");
      this.hasStar = false;
    } else if (this.status === this.statusOptions[0]) {
      //to pass the index value of the tring of statusOptions
      this.status = this.statusOptions[1];
    } else if (this.status === this.statusOptions[1]) {
      this.status = this.statusOptions[2];
    } else if (this.status === this.statusOptions[2]) {
      this.status = this.statusOptions[3];
      this.statDead();
    }
  }

  //gotPowerup of type function - called when a powerup is received and sets the status accordingly.
  //(Statuses go from "Small" to "Big" to "Powered Up". If you are Powered Up and it hits this function, you get a star)

  gotPowerUp() {
    if (this.status === this.statusOptions[0]) {
      console.log(`Congrations! You got a star! \nName:${this.name} \nStatus: ${this.status} \nTotal Coins: ${this.totalCoins} \nYou have a Star \n`);
      this.hasStar = true;
    } else if (this.status === this.statusOptions[1]) {
      this.status = this.statusOptions[0];
    } else if (this.status === this.statusOptions[2]) {
      this.status = this.statusOptions[1];
    }
  }

  //addCoin of function - adds a coin to totalCoins

  addCoin = () => {
    this.totalCoins++;
  };

  //- `print` of type `function` - prints to the console the name, totalCoins, status, and star properties.
  //Make sure you make this look nice such as:
  //- Name: Luigi,
  //- Status: Small, etc, etc

  print = () => {
    if (this.hasStar === true) {
      console.log(`Name: ${this.name} \nstatus: ${this.status} \nTotal Coins: ${this.totalCoins} \nYou have a Star \n`);
    } else {
      console.log(`Name: ${this.name} \nstatus: ${this.status} \nTotal Coins: ${this.totalCoins} \n`);
    }
  };
  statDead = () => {
    console.log(`Game Over, ${this.name}!`);
    clearInterval(randomRange);
  };
}

//put the random range function inside a setInterval function that ends after the player is dead

const player = new Player("Big", false);
player.setName();
const randomRange = setInterval(() => {
  player.print();
  let selectRandom = Math.floor(Math.random() * 2);
  switch (selectRandom) {
    case 0:
      player.gotHit();
    case 1:
      player.gotPowerUp();
      break;

    case 2:
      player.addCoin();
      break;
  }
}, 1000);
