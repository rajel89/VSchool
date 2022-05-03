class Enemy {
  constructor() {
    this.hp = 100;
    this.name = "";
  }

  getHP() {
    return this.hp;
  }

  randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getAttackHit(){
      var attackHit = this.randomNum(1, 50);
      return attackHit;
  }

  getCurrentEnemy()
  {
      return this.name;
  }


  getEnemies(){
      var enemy = ["Snake", "Dragon", "Goblin", "Lion"];
      var randomEnemy = this.randomNum(0, 3);
      var nameEnemy = enemy[randomEnemy];
      this.name = nameEnemy;
      return nameEnemy;
  }

  updateHealth(){
      this.hp = this.hp - this.getAttackHit();
      return this.hp;
  }


  enemyHit(){
    while (this.hp > 0) {
        enemyHit();
    }
  }












}

module.exports = Enemy;
