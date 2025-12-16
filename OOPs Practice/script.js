// let animal ={
//     eats:true
// }
// let rabbit = {
//     jumps:true
// }
// Object.setPrototypeOf(rabbit,animal);

class Animal {
    constructor(name) {
        this.name = name;
        console.log("Class is created...")
    }
    eats() {
        console.log("Kha raha hoo...")
    }
    jumps() {
        console.log("kood raha hoon...")
    }
}

let a = new Animal("Bunny");
console.log(a.eats())
console.log(a.jumps())

class Lion extends Animal {
    constructor(name) {
        super(name);
        this.name=name;
    }
        r(){
            console.log("Roarrrrr......")
        }
       eats() {
            console.log("kha rha hoon...Roar....")
        }
    
}

let l = new Lion("Shera");