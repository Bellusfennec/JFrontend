const coffees = ["Latte", "Cappuccino", "Americano"];

const coffeeName = prompt("Поиск кофе по названию:").trim();

if (coffeeName) {
  const foundIndex = coffees.findIndex((coffee) => {
    return coffee.toLowerCase() === coffeeName.toLocaleLowerCase();
  });

  if (foundIndex !== -1)
    alert(
      `Держите ваш любимый кофе ${coffees.at(foundIndex)}. Он ${
        foundIndex + 1
      }-й по популярности в нашей кофейне.`
    );
}
