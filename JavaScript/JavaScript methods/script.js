const arr = [1, 2, 3, 4, 5];
console.table(arr.filter(num => num >= 3));

const numbers = [3, -1, 7, -8, 5, -3, 9, -6, 2];
console.table(numbers);

console.log("Negative numbers:", numbers.filter(num => num < 0));
console.log("Positive numbers:", numbers.filter(num => num > 0));
console.log("Even numbers:", numbers.filter(num => num % 2 === 0));
console.log("Odd numbers:", numbers.filter(num => num % 2 !== 0));

const isPrime = num => {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
};

console.log("Prime numbers:", numbers.filter(isPrime));