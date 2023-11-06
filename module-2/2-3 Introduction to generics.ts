{
    // 
    // Introduction to generics



// const rollNumbers : number[]= [1,2,3,4,565]
const rollNumbers : Array<number>= [1,2,3,4,565] //by generics



// const friendz : string[]=["oliullah","maruf,","rahat"]
 const friendz : Array<string>=["oliullah","maruf,","rahat"] //by generics


// const isFRiendz :boolean[]=[true,false,true]
const isFRiendz :Array<boolean>=[true,false,true] //by generics






// GenericType

// type GenericType<param> = Array<param>
type GenericType<T> = Array<T>

const rollNumbers2 : GenericType<number>= [1,2,3,4,565]

const friendz2 : GenericType<string>=["oliullah","maruf,","rahat"]

const isFRiendz3 :GenericType<boolean>=[true,false,true]


// GenericType apply in arrey of object

const user :GenericType<{name:string,age:number}> =[
    {
        name:"oliullah",
        age:20
    },
    {
        name:"maruf",
        age:22
    },
    {
        name:"hasan",
        age:18
    },
]



// GenericType apply in tuple
type GenericTuple<X,Y> = [X,Y]

const moreFriendz: GenericTuple<string,string>= ["akash","abid"]

const userWithINfo :GenericTuple<number,{name:string,gmail:string}> =[1234,{name:"oliullah",gmail:"mdolihsan@gmail.com"}]





    // 
}