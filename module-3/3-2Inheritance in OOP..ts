{
//  Inheritance in OOP.

class CommonClass {
    name:string;
    age:number;
    address:string;
    
    constructor (name:string,age:number,address:string){
    this.name=name;
    this.age=age;
    this.address=address;
    
    }
    
    getSleep(numberOfHours:number){
    console.log(`${this.name} will sleep for ${numberOfHours} hours`);
    }
}



class Student extends CommonClass {
constructor (name:string,age:number,address:string){
super(name,age,address)

}

}
const student =new Student("oliullah",22,"Narsingdi")
// console.log(student1);
student.getSleep(25)








class Teacher extends CommonClass {
 
    designation :string;
    
    constructor (name:string,age:number,address:string,desgntion:string){
    super(name,age,address)
    this.designation=desgntion
    
    }
    
    takeClass (numberOfClass:number){
        console.log(`${this.name} will take ${numberOfClass} calss`);
    }
    
    
    }
    
const teacher = new Teacher("mikel",30,"Dhaka","professor")






// 
}