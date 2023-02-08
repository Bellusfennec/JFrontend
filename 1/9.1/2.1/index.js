const goals = [8, 1, 1, 3, 2, -1, 5];

const numberOfGoals = [...goals].sort().at(-1);
const number = [...goals].indexOf(numberOfGoals) + 1;
alert(
  `Самый результативный матч был под номером ${number}. В нем было забито ${numberOfGoals} гол(ов).`
);

const repeatGoals = goals.filter(
  (goal, index, self) => goal > 0 && self.indexOf(goal) !== index
);
const minimalGoals = Math.min(...repeatGoals);
const repeatMinimalGoals = goals.filter((goal) => goal === minimalGoals);
const numbersGames = goals
  .map((goal, i) => {
    if (goal === minimalGoals) return i + 1;
  })
  .filter(Boolean);
alert(
  `Самые не результативные матчи были под номерами ${numbersGames}. В каждом из них было забито по ${minimalGoals} мячу(а).`
);

const sumGoals = [...goals].reduce((acc, goal) => {
  if (goal <= 0) return acc;
  return acc + goal;
}, 0);
alert(`Общее количество голов за сезон равно ${sumGoals}`);

const isLose = goals.some((goal) => goal === -1);
isLose
  ? alert(`Были автоматические поражения: да`)
  : alert(`Были автоматические поражения: нет`);

const victoryGames = goals.filter((goal) => goal >= 0);
const averageCountGoals = (sumGoals / victoryGames.length).toFixed(1);
alert(`Среднее количество голов за матч равно ${averageCountGoals}`);

const sortGoals = [...goals].sort();
alert(sortGoals);
