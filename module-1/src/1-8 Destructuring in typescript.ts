// Object Destructuring 
const user 
// {
//     id:number;
//     name:object;
//     contactNo:string,
//     address:"bangladesh"
// } 
= {
    id :5,
    name:{
        firstName:"oli",
       middleName:"ullah",
       LastName:"Bhuiyan"
    },
    contactNo:"017091124554",
    address:"bangladesh",

}


// const {contactNo,name:{middleName}}=user;

// MiddleName value change by object destructuring 
const {name:{middleName}}=user


// arrey destructuring 

const friendz = ["hasan","akash","maruf","rahat","sobikul","roni","abid"]

// const [a,b,bestFriend,d]=friendz;
// console.log(bestFriend);


// to skip a , b ,d
const [,,bestFriend,,...bakigula]=friendz;
console.log(bakigula);