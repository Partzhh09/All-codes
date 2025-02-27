const fruits = ['apple', 'banana', 'orange', 'mango', 'kiwi'];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

fruits.forEach((fruit) => {
    console.log(fruit);
});

const numbers = [1, 2, 3, 4, 5];
numbers.forEach((number) => {
    console.log(number * 2);
    console.log(number% 2 == 0 ? 'Even' : 'Odd');
});

