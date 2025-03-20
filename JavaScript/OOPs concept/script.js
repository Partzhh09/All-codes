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

