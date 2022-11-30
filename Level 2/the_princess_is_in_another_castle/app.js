//to start terminal type node app.js

//Create a class for a player that has the following properties:
//"name" of type "String"
//"totalCoins" of type "Number"
//"status" of type "String" (Options are Powered Up, Big, Small, and Dead)
//"hasStar" of type "Boolean" (Is a star active?)

class player {
  constructor(status, hasstar) {
    this.name = ""; //name is equal to blank to allow for dynamic functionality; to allow for Mario or Luigi to be passed
    this.totalCoins = 0; //every player will start with 0
    this.status = status;//"status" of type "String" (Options are Powered Up, Big, Small, and Dead)
    this.hasStar = hasStar;
  }
}

//Has a parameter called namePicked where the names "Mario" or "Luigi" is passed
setName = () => {
       
    let namePicked = Math.random() * 2;
     switch (namePicked) {
        case 0:
            this.name = "Mario";
            break;
        case 1:
            this.name = "Luigi"
            break;
    } 
}

//gotHit of type function - this is called whenever the player is hit by an enemy. 
//gotHit() will set the status property accordingly. (Statuses go from "Powered Up" to "Big" to "Small" to "Dead".)

gotHit(){

}

//gotPowerup of type function - called when a powerup is received and sets the status accordingly. 
//(Statuses go from "Small" to "Big" to "Powered Up". If you are Powered Up and it hits this function, you get a star)

gotPowerUp(){

}


//addCoin of function - adds a coin to totalCoins


addCoin()


//- `print` of type `function` - prints to the console the name, totalCoins, status, and star properties. 
//Make sure you make this look nice such as:
//- Name: Luigi,
//- Status: Small, etc, etc

print()