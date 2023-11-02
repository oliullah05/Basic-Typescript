// Learning Function 
// 1. Normal Function
function sum255(num1:number,num2:number,num3:number):number{
return num1+num2+num3;

}


const sumArrow =(num1:number,num2:number,num3:number=7):number=> num1+num2+num3;

// Object=>funtion > method
const poorUser = {
name:"oli",
balance :0,
addBalence(balance:number):number{
return this.balance +balance;
},
addBalence2(balance:number){
return `this is his balence now ${this.balance +balance}`;
},

}
// Function in map

const arr:number[] = [1,2,3,4,5,6,7]
const arrSqure:number[] = arr.map((element:number):number=>element*element)



