let correctAnswers = 0;
let incorrectAnswers = 0;

const questions = [
  "Сколько будет 2 + 2?",
  "Сколько будет 2 * 2?",
  "У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?",
  "У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?",
  "Сколько будет 2 + 2 * 2?",
];
const answers = [2 + 2, 2 * 2, 5 - 3 - 1, 10 - 2 - 1 + 5, 2 + 2 * 2];

questions.forEach((question, i) => {
  if (Number(prompt(question.trim())) === answers[i]) {
    correctAnswers++;
    alert(`Ответ Верный`);
  } else {
    incorrectAnswers++;
    alert(`Ответ Неверный`);
  }
});
if (correctAnswers + incorrectAnswers === questions.length) {
  alert(
    `Конец теста! Правильные ответы - ${correctAnswers}; Неправильные ответы - ${incorrectAnswers}.`
  );
}
