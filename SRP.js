


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


}

class DB {

    save(item){
        localStorage.setItem("char", item);
    }

    load(){

    }
}