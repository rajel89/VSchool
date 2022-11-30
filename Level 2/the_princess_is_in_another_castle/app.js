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
    this.hasstar = hasStar;
  }
}
