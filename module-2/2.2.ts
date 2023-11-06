{
    // 
    // Interface, type vs interface


type User1 ={
    name:string,
    age:number
}
interface User2 {
    name:string,
    age:number
}

const user1 :User1 ={
    name:"oliullah",
    age:20

}

const user2 :User2={
    name:"oliullah",
    age:20
}

type RollNumber = number;
const rollNumber : RollNumber =20; // interface can't do this bcz inteface doest have =

// add role by using type 
type UserWithRoll1 = User2 & {role:number}
const user3  :UserWithRoll1 ={
    name:"oliullah",
    age:20,
    role:14

}

// add role by using interface
interface UserWithRoll2 extends User2 {
role:number
}
const user4  :UserWithRoll2 ={
    name:"oliullah",
    age:20,
    role:14

}

// declare arrey type by type

type Roll1 = number[];
const roll1 :Roll1 =[1,2, 3,4,5]

// declare arrey type by interface


interface Roll2 {
    [index:number]:number;
}

const roll2 : Roll2 = [1,2,3,4,5,6]


// declare function type by type

type Sum =(num1:number,num2:number)=>number

const sum :Sum =(num1,num2)=>num1+num2;

// declare function type by interface

interface Sum2 {
    (num1:number,num2:number):number
}

const sum2 :Sum2 =(num1,num2)=>num1+num2;


    // 
}