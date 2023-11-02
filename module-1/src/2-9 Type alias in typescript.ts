{
// Type alias in object


type User ={
    name:string,
    age:number,
    gender:string,
    contactNo ?:string,
    address:string
}



const user1 : User ={
    name:"oliullah",
    age:15,
    gender:"male",
    contactNo :"01475253214534",
    address:"Dhaka , Bangladesh"
}

const user2 :User ={
    name:"oliullah2",
    age:152,
    gender:"male2",
    address:"Dhaka , Bangladesh2"  
}

const user3 : User ={
    name:"oliullah23",
    age:1523,
    gender:"male23",
    address:"Dhaka , Bangladesh23"  
}

type UserName = string;
type IsAdmin = boolean;
const userName :UserName = "oli"
const isAdmin : IsAdmin = false;



// Type alias in function
type Add = (num4:number,num2:number)=>number;
const sum :Add = (num1,num2)=>num1+num2;













}