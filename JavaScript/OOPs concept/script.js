/*OOPs in Javascript ->
    Variable -> Data Member
    Function -> Member Function / Method

pillars of OOPs ->
    encapsulation
    Abstraction
    Inheritance
    Polymorphism
*/

const opElement = document.querySelector('.op');
const body = document.body;

opElement.addEventListener('mouseenter', () => {
    body.style.background = 'linear-gradient(to right, #007074, #00c6ff)'; 
});

opElement.addEventListener('mouseleave', () => {
    body.style.background = 'linear-gradient(to left, #007074, #00c6ff)';  
});


class Car{
    constructor(n,m){
        this.name = n;
        this.model = m;
    }
    printDetails(){
        console.log(this.name,this.model);
    }
}
const c1 = new Car('Audi','A8');
const c2 = new Car('BMW','X5');
c1.printDetails();
c2.printDetails();

class Employee{
    constructor(n,a,s){
        this.name = n;
        this.age = a;
        this.salary = s;
    }
    printempDetails(){
        console.log("Name :",this.name,"| Age :",this.age," | Salary :",this.salary);
    }
}
const e1 = new Employee('Parth',25,25000.00);
const e2 = new Employee('Manav',30,30000.00);
e1.printempDetails();
e2.printempDetails();

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
            console.log("Amount Withdrawn :",amount);
        }
    }
    addamount(amount){
        this.balance += amount;
        console.log("Amount Added :",amount);
    }
    checkbalance(){
        console.log("Current Balance :",this.balance);
    }
    userdetails(){
        console.log("Name :",this.name,"| Age :",this.age);
    }
    loan(amount){
        if(amount > 50000){
            console.log("Loan not approved");
        }else{
            console.log("Loan Approved");
        }
    }
}
const b1 = new BankAccount('Parth',25,25000.00);
const b2 = new BankAccount('Manav',30,30000.00);
b1.withdraw(20000);
b1.addamount(5000);
b1.checkbalance();
b1.userdetails();
b1.loan(40000);