const coffees = ["Latte", "Cappuccino", "Americano"];
const prices = [1.5, 1, 2];

const updatedPrices = prices.map((price) => price * 2);
if (updatedPrices)
  coffees.forEach((coffee, i) =>
    alert(`Кофе ${coffee} сейчас стоит ${updatedPrices.at(i)} евро.`)
  );
