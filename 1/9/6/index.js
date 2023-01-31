const numbers = [10, 4, 100, -5, 54, 2];

let sum1 = 0;
for (let i = 0; i < numbers.length; i++) sum1 += numbers[i] ** 3;

let sum2 = 0;
for (const num of numbers) sum2 += num ** 3;

let sum3 = 0;
numbers.forEach((num) => (sum3 += num ** 3));

const accNumbers = numbers.reduce((acc, num) => (acc += num ** 3), 0);
