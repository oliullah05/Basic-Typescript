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




// smart way to handle funtion 
const isDog =(animal:Animal)=>{
return animal instanceof Dog;

}
const isCat =(animal:Animal)=>{
return animal instanceof Dog;

}


const getAnimal  =(animal:Animal)=>{
if(isDog ){
    animal.makeBark()
}
else if (animal instanceof Cat){
    animal.makeMeaw()
}
else{
    animal.makeSoung()
}
}









    // 
}