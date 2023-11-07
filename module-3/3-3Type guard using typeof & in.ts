{
    // Type guard using typeof & in


    // typeof==>type gard
type Alphanumeric =number|string;

const sum = (param1:Alphanumeric,param2:Alphanumeric):Alphanumeric=>{
if(typeof param1==="number"&& typeof param2 ==="number"){
    return param1+param2
}
else{
    return param1.toString()+param2.toString()
}
}

const result1 = sum(2,3)
const result2 = sum("2",3)
console.log(result1);
console.log(result2);





// in gurd ===> type gurd

type NormalUser ={
name:string
}

type AdminUser ={
    name:string,
    role:string
}

const getUser =(user :NormalUser|AdminUser)=>{

   if("role" in user){
    console.log(`${user.name} role is ${user.role}`);
   }
   else{
    console.log(`${user.name} role is genarel`);

   }
}

const normalUser :NormalUser={
    name:"oliullah"
}
const adminUser:AdminUser={
    name:"Mr. Admin",
    role:"admin"
}


getUser(normalUser)
getUser(adminUser)







    // 
}