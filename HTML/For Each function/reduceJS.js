const numbers = [1, 2, 3, 4, 5];

//without reduce method
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
}
console.log("Without Reduce Method", sum);

//with reduce method
const sum2 = numbers.reduce((acc, number) => acc + number, 0);
console.log('Reduce Method SUM :', sum2);

//with the help of maximum number
const max = numbers.reduce((max, number) => (number > max ? number : max), 0);
console.log('Max Number :', max);

//with the help of minimum number
const min = numbers.reduce((min, number) => (number < min ? number : min), numbers[0]);
console.log('Min Number :', min);

//Product of all Even number using reduce method without if else
const product = numbers.reduce((product, number) => (number % 2 === 0 ? product * number : product), 1);
console.log('Product of all Even Number :', product);

//Date of birth using reduce method without if else
