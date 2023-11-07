{
    // 
             //    Class and object

// class Animal {
// public   name:string;
// public   species:string;
// public   sound:string;
//   constructor(name:string, species:string, sound:string){
//         this.name=name;
//         this.species=species;
//         this.sound=sound;
//     }

//  public getSound(){
//     console.log(`The ${this.name} Sound ${this.sound}`);
// }



// }









class AnimalSimple {
// public   name:string;
// public   species:string;
// public   sound:string;
      constructor(public name:string, public species:string, public sound:string){
            //   this.name=name;
            //     this.species=species;
            //     this.sound=sound;
        }
    
     public getSound(){
        console.log(`The ${this.name} Sound ${this.sound}`);
    }
    
    
    
    }






const Dog = new AnimalSimple("Mikel","dog","Ghew Ghew")

const Cat = new AnimalSimple ("Jerry","Cat","Meaw Meaw")

Dog.getSound()
Cat.getSound()







    // 
}