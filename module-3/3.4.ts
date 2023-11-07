{
    // Type guard using instance of

class Animal {
    name:string;
    species:string;
    constructor(name:string,species:string){
        this.name=name,
        this.species=species
    }
    makeSoung(){
        console.log(`i am making sound`);
    }
}


class Dog extends Animal{
    constructor(name:string,species:string){
        super(name,species)
    }
    makeBark(){
        console.log(`i am berking`);
    }
}


class Cat extends Animal {
constructor(name:string,species:string){
    super(name,species)
}
makeMeaw (){
    console.log(`i am meawing`);
}
}


const dog = new Dog("Kabila","Dog")
dog.makeBark()
const cat = new Cat("Mikel","Cat")
cat.makeMeaw()





const getAnimal  =(animal:Animal)=>{
if(animal instanceof Dog){
    animal.makeBark()
}
}









    // 
}