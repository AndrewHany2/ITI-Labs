class Account {
    constructor(public Acc_no:string="default value",public Balance:number=1500) {    
    }
    debitAmount(){

    }
    creditAmout(){

    }
    getBalance():number{
        return this.Balance
    }
}
interface IAccount{
    Date_of_opening:Date;
    addCustomer();
    removeCustomer();
}
class Current_Account extends Account implements IAccount{
     Date_of_opening:Date;
    constructor(public Interest_rate:number) {
        super()
    }
    addCustomer(){}
    removeCustomer(){}
}
class Saving_Account extends Account implements IAccount {
    Date_of_opening:Date;
    constructor(public Min_Balance:number) {
        super()
    }
    addCustomer(){}
    removeCustomer(){}
}