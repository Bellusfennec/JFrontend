const getSumOfNumbers = (number, type = "odd") => {
  if (!number || typeof number !== "number") return NaN;

  let sum = 0;
  for (let i = 0; i <= number; i++) {
    if (type === "odd" && !(i % 2)) continue;
    if (type === "even" && i % 2) continue;
    sum += i;
  }
  return sum;
};

console.log(getSumOfNumbers(10, "odd")); // 25
console.log(getSumOfNumbers(10, "even")); // 30
console.log(getSumOfNumbers(10, "")); // 55
