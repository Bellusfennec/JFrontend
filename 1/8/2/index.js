const getSumOfNumbers = (number, type = "odd") => {
  if (!number || typeof number !== "number") return NaN;

  let sum = 0;
  const isOdd = type === "odd" && !(i % 2);
  const isEven = type === "even" && i % 2;
  for (let i = 0; i <= number; i++) {
    if (isOdd) continue;
    if (isEven) continue;
    sum += i;
  }
  return sum;
};

console.log(getSumOfNumbers(10, "odd")); // 25
console.log(getSumOfNumbers(10, "even")); // 30
console.log(getSumOfNumbers(10, "")); // 55
