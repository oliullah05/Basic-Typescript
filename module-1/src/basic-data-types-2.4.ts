{/* Basic Data Types */


// Primitive Data Types


// 1. string

const myName :string ="oliullah"
// 2. number 
const myRoll :number =2589;
// 3. boolean
const isAttetend :boolean =true;
// 4. undefined
const x:undefined  = undefined ;
// 5. null 
const y:null =null;


// Non Primitive Data Types
// 6. Array 
const Result : number[] =[10,2,5,263,95,2,14]
const studentName :string[] =["sokina","jorina","karina"]

// 7. tuple =>Arrey =>order => type of values
let coOrdinates : [number ,number] = [1,5]
let ageNameTogether :[string,number,boolean]   =["oli",20,true]

// 8. Reference Type Object 
const user :{
    companyName:"Next JS";//type=>literal type ( to unchanged/fixed data)
   readonly companyName2:string;   //r eadonly
    firstName:string;
    middleName ?:string; //optional type using ? sign
    lastName :string;
    isAttend :boolean;
} 
=

{
    companyName:"Next JS",
    companyName2:"Next Js",
    firstName :"Oli",
    middleName:"ullah",
    lastName :"bhuiyan",
    isAttend :true,
}

}

