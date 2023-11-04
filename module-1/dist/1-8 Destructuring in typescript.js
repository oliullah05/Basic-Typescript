"use strict";
// Object Destructuring 
var user 
// {
//     id:number;
//     name:object;
//     contactNo:string,
//     address:"bangladesh"
// } 
= {
    id: 5,
    name: {
        firstName: "oli",
        middleName: "ullah",
        LastName: "Bhuiyan"
    },
    contactNo: "017091124554",
    address: "bangladesh",
};
// const {contactNo,name:{middleName}}=user;
// MiddleName value change by object destructuring 
var middleName = user.name.middleName;
// arrey destructuring 
var friendz = ["hasan", "akash", "maruf", "rahat", "sobikul", "roni", "abid"];
// const [a,b,bestFriend,d]=friendz;
// console.log(bestFriend);
// to skip a , b ,d
var bestFriend = friendz[2], bakigula = friendz.slice(4);
console.log(bakigula);
