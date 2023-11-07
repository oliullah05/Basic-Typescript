{
    // Encapsulation in OOP

class BankAccount {
public  readonly  id:number;
 public name:string;
protected _balance:number;
    constructor(id:number,name:string,_balance:number){
        this.id=id,
        this.name=name,
        this._balance=_balance
    }

addDeposit(amount:number){
    return this._balance=this._balance+amount
}
 private get_balance(){
    return this._balance
}
getHiddenMethod(){
    return this.get_balance()
}
}


const poorAccount = new BankAccount(111,"Mr. Poor",20)
// poorAccount._balance=222;
poorAccount.addDeposit(20000000)
const my_balance = poorAccount.get_balance()
console.log(my_balance);




class StudentAccount extends BankAccount{
   
constructor(id:number,name:string,balance:number){
    super(id,name,balance)
}
test(){
    this.
}
}
    // 
}