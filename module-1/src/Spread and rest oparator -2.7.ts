{// Spread Oparator
const friendz1 :string[] = ["oli",'koli',"moli"]
const friendz2 :string[] = ["Rahat",'Hasan',"Maruf"]
friendz1.push(...friendz2)
console.log(friendz1);


const teachers1 : {
    chemistry :string,
math:string,
biology:string,
} ={
chemistry :"mohit",
math:"Rasel",
biology:"hasina"

}
const teachers2 ={
chemistry :"mohit2",
math:"Rasel2",
biology:"hasina2"

}

const allTeachers = {...teachers1,...teachers2}

// Rest Oparator

const greetings =(...friendz:string[])=>{
    // console.log(`hi  ${friendz1+friendz2+friendz3}`);
    friendz.map(name=>console.log(  `hi ${name}`))
}
greetings("oli","moli","koli","ubul","chubol")}
