const questions = [
  "JavaScript появился в 1995 году?",
  "Спецификация JavaScript называется ECMAScript?",
  "JavaScript был создан за 1 месяц?",
];
const answers = ["Да", "Да", "Нет"];

questions.forEach((question, i) => {
  confirm(question) ? alert(`Верно`) : alert(answers[i]);
});
