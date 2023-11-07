{
    // Getter and Setter

class BankAccount {
public  readonly  id:number;
 public name:string;
protected _balance:number;
    constructor(id:number,name:string,_balance:number){
        this.id=id,
        this.name=name,
        this._balance=_balance
    }

// addDeposit(amount:number){
//     return this._balance=this._balance+amount
// }
// get_balance(){
//     return this._balance
// }

                              // getter

get Balance(){
    return this._balance
}
                            // setter
set Deposit (amount:number){
   this._balance=this._balance+amount
}



}


const poorAccount = new BankAccount(111,"Mr. Poor",50)
// // poorAccount._balance=222;
// poorAccount.addDeposit(20000000)
// const my_balance = poorAccount.get_balance()
// console.log(my_balance);
poorAccount.Deposit=50
const myBalance = poorAccount.Balance  // funtion use like property
console.log(myBalance);








class StudentAccount extends BankAccount{
   
constructor(id:number,name:string,balance:number){
    super(id,name,balance)
}
test(){
    this._balance
}
}
    // 
}