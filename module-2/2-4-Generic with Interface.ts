{
    // 
    // Generic with Interface
    interface Developer <T,Y=null> {
    name:string,
    computer:{
        brand:string,
        model:string,
        ReleaseYear :number;
    },
    smartWatch : T,
    bike?:Y
    }



type EmilabWatch ={
    brand:string,
    model:string,
   display:string
}



const poorDeveloper : Developer<EmilabWatch,null> ={
name:"sumon",
computer:{
    brand:"Ryzen 5",
    model:"5600",
    ReleaseYear :2018
},
smartWatch : {
    brand:"Emilab",
    model:"kw66",
    display:"OLED"
}
}






interface AppleWatch {
    brand:string,
    model:string,
    display:string,
    hartTrack:boolean,
    sleepTrack:boolean,
}


interface YamahaBike {
    brand:string,
    engineCapaticy:string
}

const RichDeveloper : Developer<AppleWatch,YamahaBike> ={
name:"Mohit",
computer:{
    brand:"Intel",
    model:"Core i9",
    ReleaseYear :2020
},
smartWatch : {
    brand:"Apple",
    model:"Apple Watch Series 8 Aluminum",
    display:"Retina LTPO OLED, 1000 nits (peak)",
    hartTrack:true,
    sleepTrack:true,

},
bike:{
    brand:"Yamaha",
   engineCapacity :"100cc"
}
}















// 
}












    // 
}