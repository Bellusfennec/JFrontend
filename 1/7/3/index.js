const password = prompt("Введите пароль");
let isValid = false;
let isLength = password.length >= 3 && password.length <= 30;
let isUppercase = password !== password.toLowerCase();
let isNumber = password.match(/\d+/);

if (isLength && isUppercase && isNumber) {
  alert("Пароль валидный. Добро пожаловать в аккаунт!");
} else {
  alert(
    "Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз."
  );
}
