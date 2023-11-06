{
// 
// type assertion

let anything : any ;
anything  ="next level web development";
anything  =222;
// console.log((anything as number).toFixed(2));
// (anything as string). 

// (anything as number).toFixed(2)

const kgToGram =(value : string | number): string|number|undefined=>{
if(typeof(value)==="string"){
    const convertNUmber = parseFloat(value);
    return `the converted value is ${convertNUmber *1000}`;
}
else if(typeof(value)==="number"){
    return value *1000;
}

}

const result1 = kgToGram(1000) as number ;
const result2 = kgToGram("1000") as string;

type CustomError = {
    message:string;
}

try{

}
catch(error){
    console.log((error as CustomError).message);
}



// 
}