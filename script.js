


//==== Single Responsobility Principle =============================

class Character {
    #inventory = [];
    #health = 10;

    pickItem(item) {
        this.#inventory.push(item);
    }

    receiveDamage(){
        this.#health -= damage;
    }

    saveCharacter(){
        localStorage.setItem("char", this);
    }

    loadCharacter(){
        
    }
}