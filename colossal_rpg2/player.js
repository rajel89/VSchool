class Player {
  constructor() {
    this.name = "";
    this.hp = 100;
    this.prizeList = [];
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  getHP() {
    return this.hp;
  }

  randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getprizeList() {
    return this.prizeList;
  }

  getAttackHit() {
    var attackHit = this.randomNum(1, 30);
    return attackHit;
  }

  updateHealth() {
    this.hp = this.hp - this.getAttackHit();
    return this.hp;
  }

  playerAttack() {
    while (this.hp > 0) {
      this.playerAttack();
    }
  }

  getPrize() {
    var prize = ["Apple", "Bandage", "Potion"];
    var randomPrize = this.randomNum(0, 2);
    var newPrize = prize[randomPrize];
    return newPrize;
  }

  displayPlayer() {
    console.log(`Name: ${this.name}, HP: ${this.hp}, \nItems: ${this.prizeList}` );
  }

  addToPrizeList(prize) {
    this.prizeList.push(prize);
  }

  getWeapon() {
    var power = ["Sword", "Bow and Arrow", "Fart Canon"];
    var randomPower = this.randomNum(0, 2);
    var newPower = power[randomPower];
    return newPower;
  }

  reset() {
    this.name = "";
    this.hp = 100;
    this.prizeList = [];
  }
}

module.exports = Player;
