{
    // 
              // normal type

const arreyOfNUmbers :number[] = [1,2,3,4,5,6]
// const arreyOfStrings:string[] =["1","2","3","4","5","6"]
const arreyOfStrings:string[] =arreyOfNUmbers.map(number=>number.toString())

console.log(arreyOfStrings);




// Mapped types

type AreaNumber ={
    width:number,
    height:number
}

type Height = AreaNumber["height"]   //look up type

// type AreaString ={
//     width:string,
//     height:string
// }

// type areaString = {                                           //using hardcore map in type
//     [key in "width" | "height"] :string;
// }
type AreaString = {                                           //using map in type (keyof)
    [key in keyof AreaNumber] :boolean;
}

type AreaStringDynamic<T> = {                                           //using map in type (keyof)
    [key in keyof T] :T[key];   //MOST IMPORTANT
}

const area1 :AreaStringDynamic<{height:string,width:number}> ={
    height :"100",
    width:50
}




    // 
}