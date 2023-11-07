{
    // 



     // Conditional types

type a1 =null;
type b1 =undefined;
type x = a1 extends null ? true :false;

type y = a1 extends null ? true : b1 extends undefined ? undefined : any;


// 

type RichMan = {
    car :string,
    bike:string,
    ship:string

}

// car , bike ,ship , bicycle  availeable or not

// type CheckVehicle<T>= T extends "bike"|"car"|"ship" ?true:false;
type CheckVehicle<T>= T extends keyof RichMan ?true:false; //key of

type HasBike = CheckVehicle<"bike">
type HasShip = CheckVehicle<"ship">
type hasBicycle = CheckVehicle<"bicycle">














    // 
}