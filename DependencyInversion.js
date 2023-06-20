


//====== Dependency Inversion =================

class DB {

    save(items){
        console.log(`Saved: ${items}`);
    }
}

class MongoDB extends DB {

    save(items){
        console.log(`Saved to Mongo: ${items}`);
    }
}

class ToDoList {
    items = [1, 2, 3];
    db;

    constructor(db){
        this.db = db;
    }

    saveToDB(){
        this.db.save(this.items);
    }
}

const List = new ToDoList(new DB());
List.saveToDB();

const List2 = new ToDoList(new MongoDB());
List2.saveToDB();