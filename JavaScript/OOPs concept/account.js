/*
class BankAccount

withdraw()
addamount()
checkbalance()
userdetails()
loan()

*/

class BankAccount{
    constructor(n,a,b){
        this.name = n;
        this.age = a;
        this.balance = b;
    }
    withdraw(amount){
        if(amount > this.balance){
            console.log("Insufficient Balance");
        }else{
            this.balance -= amount;
            console.log("Amount Withdrawn Successfully");
        }
    }
    addamount(amount){
        this.balance += amount;
        console.log("Amount Added Successfully");
    }
    checkbalance(){
        console.log("Balance : ",this.balance);
    }
    userdetails(){
        console.log("Name :",this.name,"| Age :",this.age);
    }
    loan(amount){
        if(amount > 50000){
            console.log("Loan Not Approved");
        }else{
            console.log("Loan Approved");
        }
    }
}
const b1 = new BankAccount('Parth',25,25000.00);

b1.addamount(5000);
b1.checkbalance();
b1.withdraw(2000);
b1.checkbalance();
b1.userdetails();
b1.loan(20000);