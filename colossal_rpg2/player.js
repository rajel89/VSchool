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
    


}

module.exports = Player;