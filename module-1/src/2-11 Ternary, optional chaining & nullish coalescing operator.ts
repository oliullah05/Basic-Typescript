{

// 2-11 Ternary, optional chaining & nullish

// Ternary Oparator || optinal chaining || nullish coalescing oparator in typeScript
// Ternary Oparator 
const age :number = 144;
if(age>=18){
    console.log("adult");
}
else{
    console.log("babu");
}
const isAdult = age>=18?"adult":"babu"
// console.log({isAdult});

// nullish coalescing  oparator
//  null | undefined => some condition

const isAuthenticated = undefined;

const result1 = isAuthenticated??"Geast user"
const result2 = isAuthenticated?isAuthenticated:"Geast USer 2"
// console.log({result2});


type User = {
name:string,
address:{
    city:string,
    road:string,
    presentAddress :string,
    parmanentAddress?:string
}
}


const user:User={
    name:"oliullah",
    address:{
city:"dhaka",
road:"awesome road",
presentAddress:"dhaka"
    }
}

const permanentAddress = user?.address?.parmanentAddress??"not found permanent adress"
console.log({permanentAddress});










}





















