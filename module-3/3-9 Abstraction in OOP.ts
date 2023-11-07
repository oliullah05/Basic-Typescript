{
    // Abstraction in OOP  


    // 1.Interface






    // idea
    interface Vehicle1 {
    startEngine():void,
    stopEngine():void,
    move():void
    }

// const vehicle1 :Vehicle1 = {
// name:"cycle",
// model:"2200"
// }



// real implimantion
class Car1 implements Vehicle1 {
    startEngine():void{
        console.log(`i am starting the car`);
    }
    stopEngine(): void {
        console.log(`i am stoping the car`);
    }
    move(): void {
        console.log(`i am moving the car`);
    }
    test(){
        console.log(`i am jast testing`);
    }
}

const toyotaCar = new Car1()
toyotaCar.startEngine()







             // 2. Abstraction


// idea
abstract   class Car2 {
   abstract startEngine():void;
 abstract   stopEngine(): void ;
   abstract move(): void ;
}

class ToyotaCar extends Car2 {
    startEngine(): void {
        console.log("ToyotaCar  is starting");
    }
    stopEngine(): void {
        console.log(`ToyotaCar  is stoping`);
    }
    move(): void {
       return console.log(`ToyotaCar  is moving`);
    }
    test(){
        console.log(`i am jast testing`);
    }
}

console.log(toyotaCar.move());




















    // 
}