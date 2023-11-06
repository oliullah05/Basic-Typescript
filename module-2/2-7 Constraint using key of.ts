{
    // 
// Constraint using key of

type Vehicle = {
    bike:string,
    car:string,
    ship:string
}

type Owner = "bike" | "car"| "ship" //manually
 type Owner2 = keyof Vehicle;
 const person1 :Owner = "ship"
 const person2 :Owner2 = "bike" //using key of



const user ={
    name:"oliullah",
    age:20,
    address:"Narsingdi"
}
const car={
    brand:"Toyota",
   year :2020
}

// user["age"]  // 20


// const getObjectValue = <X,Y extends "name"|"age"|"adress">(obj:X,key:Y)=>{
//     return obj[key];
// }

// const result1 = getObjectValue(user,'age')

const getObjectValue = <X,Y extends keyof X>(obj:X,key:Y)=>{
    return obj[key];
}

const result1 = getObjectValue(user,'age')
const result2 = getObjectValue(car,"brand")
    // 
}