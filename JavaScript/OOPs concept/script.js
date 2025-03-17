/*OOPs in Javascript ->
    Variable -> Data Member
    Function -> Member Function / Method

pillars of OOPs ->
    encapsulation
    Data Abstraction
    Inheritance
    Polymorphism
*/
class Car{
    constructor(n,m){
        this.name = n;
        this.model = m;
    }
}
const c1 = new Car('Audi','A8');
const c2 = new Car('BMW','X5');
console.log(c1,c2);