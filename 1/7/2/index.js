const clientName = prompt("Введите имя клиента".trim());
let clientSpentForAllTime = prompt(
  "Сколько клиент потратил за все время?".trim()
);
let clientSpentToday = prompt("Сколько клиент потратил сегодня?".trim());
const check = isNaN(clientSpentForAllTime) && isNaN(clientSpentToday);

if (check) {
  alert(
    "Сумма, которую клиент потратил за все время и которую потратил сегодня, должна быть числом! Перезагрузи страницу, чтобы повторить попытку."
  );
} else {
  let discount = 0;

  const lvl1 = clientSpentForAllTime >= 100 && clientSpentForAllTime < 300;
  const lvl2 = clientSpentForAllTime >= 300 && clientSpentForAllTime < 500;
  const lvl3 = clientSpentForAllTime >= 500;

  if (lvl1) {
    discount = 10;
    alert(`Вам предоставляется скидка в ${discount}%!`);
  } else if (lvl2) {
    discount = 20;
    alert(`Вам предоставляется скидка в ${discount}%!`);
  } else if (lvl3) {
    discount = 30;
    alert(`Вам предоставляется скидка в ${discount}%!`);
  }

  clientSpentToday -= (clientSpentToday / 100) * discount;
  clientSpentForAllTime += clientSpentToday;

  alert(
    `Спасибо, ${clientName}! К оплате ${clientSpentToday}$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime}$.`
  );
}
