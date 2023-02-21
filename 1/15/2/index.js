const tasks = [];

const form = document.querySelector(".create-task-block");
const tasksList = document.querySelector(".tasks-list");

const span = document.createElement("span");
span.className = "error-message-block";
form.prepend(span);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = event.target[0].value;
  const isRepeat = tasks.some((task) => task.text === text);
  const spanClear = document.querySelectorAll(".error-message-block");
  if (!spanClear.length) form.prepend(span);

  if (!text) {
    span.textContent = "Название задачи не должно быть пустым.";
  } else if (isRepeat) {
    span.textContent = "Задача с таким названием уже существует.";
  } else {
    span.remove();
    const id = new Date().getTime();
    tasksList.insertAdjacentHTML("beforeend", `<p id='${id}'>${text}</p>`);
    tasks.push({ id, text });
  }
});
