{
// Union type


type FrontEndDeveloper = "fakibazz developer" | "Good Developer"
type FullStackDeveloper = "frontEnd developer" | "Expart Developer"
type Developer = FrontEndDeveloper|FullStackDeveloper;

const newDeveloper :Developer = "Expart Developer"


type User ={
    name:string,
    email:string,
    gender:"male"|"female",
    bloodGroup :"O+"|"O-"|"AB+"|"AB-"
}

const user :User ={
    name:"oliullah",
    email:"mdolihasan@gmail.com",
    gender:"male",
    bloodGroup :"O+"
}


// Intersection type 

type FrontEndDeveloper2 = {
    skills :string[],
    designation1 :"Front End Developer"
}
type BackEndDeveloper2 = {
    skills :string[],
    designation2 :"Back End Developer"
}
type FullStackDeveloper2 = FrontEndDeveloper2 & BackEndDeveloper2;


const fullStackDeveloper : FullStackDeveloper2 ={
    skills:["node","mongoDb","react"],
    designation1 :"Front End Developer",
    designation2 :"Back End Developer"
}
















}