{

// nullable type

const searchName =(text:string | null)=>{
    if(text){
        console.log("searching");
    }
    else{
        console.log("not found anything");
    }
}
searchName(null)


// unknown typeOf
const getSpeedInMetterPerSecound =(value:unknown)=>{
    if(typeof (value )==="number"){
       const converted = (value*1000)/3600;
       console.log(`your speed is ${converted} ms-1`);
    }
  else  if(typeof(value)==="string"){
        const [speed,unit] = value.split(" ")
      const convertNumber = parseFloat(speed)
      const converted = (convertNumber*1000)/3600;
      console.log(`your speed is ${converted}${unit}`);
    }
    else{
        console.log(`wrong input`);
    }
    // }
}

getSpeedInMetterPerSecound(1200)
getSpeedInMetterPerSecound("12000 kmh-1")
getSpeedInMetterPerSecound(null)

// never type 

const genarateError =(value:string):never=>{
    throw new Error(value)
  
    
}
genarateError("error is really pain")






}