{
// 
// Function with generics


const createArrey = (param:string):string[]=>{
    return [param]
}
const createArreyWithGeneric = <T>(param:T):T[]=>{
    return [param]
}





const result1 = createArrey("Bangladesh")

const resultGeneric = createArreyWithGeneric<boolean>(true)
const resultGeneric2 = createArreyWithGeneric<string>("Bangladesh")


type User ={id:number,name:string}
// const resultGenericObj = createArreyWithGeneric<{id:number,name:string}>({id:222,name:"Mr. X"})
const resultGenericObj = createArreyWithGeneric<User>({id:222,name:"Mr. X"})

// 
// 
// 
// Function with generics by tuple

const createArreyWithtuple = <T,Q>(param1:T,param2:Q):[T,Q]=>{
    return [param1,param2]
}

const resultGeneric3 = createArreyWithtuple<boolean,number>(true,123)
const resultGeneric4 = createArreyWithtuple<string,{roll:number}>("Bangladesh",{roll:369})


// 
// 

const addCourseToStudent =<T>(studentInfo:T)=>{
    const courseName = "Next Level Web Developer";

return{
...studentInfo,
courseName
}
}
type Student1 ={name:string,email:string,devType:string}
interface Student2 {
    name:string,
email:string,
devType:string,
hasWatch:string}

const student1 = addCourseToStudent<Student1>({name:"oliullah",email:"mdolihasan@gmail.com",devType:"Next Level Developer"})
const student2 = addCourseToStudent<Student2>({name:"Maruf",email:"mdolihasan@gmail.com",devType:"Next Level Developer",hasWatch:"apple watch"})







    // 
}