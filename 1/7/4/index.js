const numbers = [10, 4, 100, -5, 54, 2];
let sum = 0;

// Через цикл for
for (let i = 0, num = 0; i < numbers.length; i += 1) {
  console.log("for", numbers[i]);
  num = numbers[i] ** 3;
  console.log("**for", numbers[i]);
  sum += num;
}
console.log(sum); // 1158411

// Через цикл for of
console.log("numbers", numbers);
sum = 0;
for (let num of numbers) {
  console.log("for of", num);
  num = num ** 3;
  console.log("**for of", num);
  sum += num;
}
console.log(sum); // 1003904306910622800