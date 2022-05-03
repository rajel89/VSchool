class Player{
    constructor()
    {
        this.name = "";
        this.hp = 100;
        this.prizeList = [];
    }

    setName (name){
        this.name = name;
    }

    getName(){
        return this.name
    }
    
    getHP(){
        return this.hp;

    }

    randomNum(min, max){
        return Math.floor(Math.random()* (max - min + 1))+ min;
    }

    getprizeList()
    {
        return this.prizeList;
    }

    getAttackHit(){
        var attackHit = this.randomNum(1, 30);
        return attackHit;
    }

    updateHealth(){
        this.hp = this.hp - this.getAttackHit();
        return this.hp;
    }

    playerAttack(){
        while (this.hp > 0) { 
            this.playerAttack();
        }
    }







}

module.exports = Player;


