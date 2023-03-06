const body = document.querySelector("body");

let openModal = false;
body.insertAdjacentHTML(
  "beforeend",
  `<div class="modal-overlay modal-overlay_hidden">
<div class="delete-modal">
    <h3 class="delete-modal__question">
        Вы действительно хотите удалить эту задачу?
    </h3>
    <div class="delete-modal__buttons">
        <button class="delete-modal__button delete-modal__cancel-button">
            Отмена
        </button>
        <button class="delete-modal__button delete-modal__confirm-button">
            Удалить
        </button>
    </div>
</div>
</div>`
);
const modal = document.querySelector(".modal-overlay");
let id = null;
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
    tasksList.insertAdjacentHTML(
      "beforeend",
      `<p class="task" id='${id}'>${text} <button class='delete-task-button' data-task-id='${id}'>Удалить </button></p>`
    );
    tasks.push({ id, text });
  }
});

body.addEventListener("click", (event) => {
  event.stopPropagation();

  const button = event.target.closest(".delete-task-button");
  const confirm = event.target.closest(".delete-modal__confirm-button");
  if (button) {
    modal.classList.toggle("modal-overlay_hidden");
    id = Number(button.dataset.taskId);
  }
  if (confirm && id) {
    console.log(id);
    const index = tasks.findIndex((task) => task.id === id);
    if (index !== -1) {
      tasks.splice(index, 1);
      modal.classList.toggle("modal-overlay_hidden");
      const button = document.querySelectorAll(".delete-task-button");
      button[index].closest("p").remove();
    }
  }
});

body.addEventListener("keydown", (event) => {
  const key = event.key;
  const buttons = document.querySelectorAll("button");
  const taskItem = document.querySelectorAll(".task");

  if (key === "Tab") {
    body.style.background = body.style.background === "" ? "#24292E" : "";

    if (tasks.length) {
      Array.from(taskItem).forEach((node) => {
        console.log(node.style.color);
        node.style.color = node.style.color === "" ? "#ffffff" : "";
      });
    }

    buttons.forEach(
      (button) =>
        (button.style.border =
          button.style.border === "" ? "1px solid #ffffff" : "")
    );
  }
});
