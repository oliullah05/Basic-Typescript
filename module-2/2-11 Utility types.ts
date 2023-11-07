{
    // 
    //  Utility types
    // 1. Pick type
    type Person ={
        name:string,
        age:number,
        email?:string,
        phoneNUmber :number
    }

  type PickName = Pick<Person,"name">   // output string
  type PickAge= Pick<Person,"age">   // output number
  type PickNameAge = Pick<Person,"name" | "age">



  // 2. Omit type  ===   // reverse pick

type ContactInfo = Omit<Person,"name"|"age">



  // 3. Required type

type PersonAllRequired = Required<Person>    //optional email type now required


  // 4. Partial type   === //reverse Required

type PersonAllParsonal = Partial<Person> //requred all property  now optional

   // 5. Readonly type 

const person1 :Person={
  name:"oliullah",
  age:20,
  phoneNUmber:2544
}
person1.name="maruf"  //changeable
console.log(person1);

type PersonReadonly = Readonly<Person>  // all property is now readonly


     // 6. Record type 

// type MyObject = {
//   a:string,
//   b:string
// }
type MyObject = Record<string,string>
const myObject :MyObject={
  a:"aa",
  b:"bb",
  c:"cc"  
}

const emtyObject :Record<string,unknown>={}
    // 
}