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
        console.log("Balance : ₹",this.balance);
    }
    userdetails(){
        console.log("-> Name :",this.name,"\n-> Age :",this.age);
    }
    loan(amount){
        if(amount > 50000){
            console.log("Loan Not Approved");
        }else{
            this.balance += 100000;
            console.log("Loan Approved");
        }
    }
}
const b1 = new BankAccount('Parth',25,25000.00);

b1.userdetails();
b1.addamount(5000);
b1.checkbalance();
b1.withdraw(2000);
b1.checkbalance();
b1.loan(20000);
b1.checkbalance();


/*
class car

car name
car model
car engine type
auto manual
car price
car color
car company
*/

class Car{
    constructor(n,m,e,a,p,c,co){
        this.name = n;
        this.model = m;
        this.engine = e;
        this.auto = a;
        this.price = p;
        this.color = c;
        this.company = co;
    }
    printDetails(){
        console.log("Car Name :",this.name,"\nCar Model :",this.model,"\nEngine Type :",this.engine,"\nAuto/Manual :",this.auto,"\nPrice : ₹",this.price,"\nColor :",this.color,"\nCompany :",this.company);
    }
}
const c1 = new Car('Audi','A8','Petrol','Auto',8000000.00,'Black','Audi');
c1.printDetails();
