const body = document.querySelector("body");
body.innerHTML =
  '<form class="create-user-form"><label> Имя  <input type="text" name="userName" placeholder="Введите ваше имя" /></label><label>  Пароль  <input type="password" name="password" placeholder="Придумайте Пароль"  /></label><button type="submit">Подтвердить</button></form>';
const from = document.createElement("form");
from.className = "create-user-form";
body.append(from);
const labelName = document.createElement("label");
const labelPassword = document.createElement("label");
labelName.textContent = "Имя";
labelPassword.textContent = "Пароль";
from.append(labelName);
from.append(labelPassword);
const inputName = document.createElement("input");
const inputPassword = document.createElement("input");
inputName.setAttribute("type", "text");
inputName.setAttribute("name", "userName");
inputName.setAttribute("placeholder", "Введите ваше имя");
inputPassword.setAttribute("type", "password");
inputPassword.setAttribute("name", "password");
inputPassword.setAttribute("placeholder", "Придумайте Пароль");
labelName.append(inputName);
labelPassword.append(inputPassword);
const button = document.createElement("button");
button.setAttribute("type", "submit");
button.textContent = "Подтвердить";
from.append(button);