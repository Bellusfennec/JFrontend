const password = prompt("Введите пароль");
const isLength = password.length >= 3 && password.length <= 30;
const isUppercase = password !== password.toLowerCase();
const isNumber = password.match(/\d+/);

if (isLength && isUppercase && isNumber) {
  alert("Пароль валидный. Добро пожаловать в аккаунт!");
} else {
  alert(
    "Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз."
  );
}
