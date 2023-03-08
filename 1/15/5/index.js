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
  const text = event.target[0].value.trim();
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
      `<div class="task-item" data-task-id='${id}'>
      <div class="task-item__main-container">
          <div class="task-item__main-content">
              <form class="checkbox-form">
                  <input class="checkbox-form__checkbox" type="checkbox" id="task-${id}">
                  <label for="task-${id}"></label>
              </form>
              <span class="task-item__text">
              ${text}
              </span>
          </div>
          <button class="task-item__delete-button default-button delete-button" data-delete-task-id='${id}'>
              Удалить
          </button>
      </div>
  </div>`
    );
    event.target[0].value = "";
    tasks.push({ id, text });
  }
});

body.addEventListener("click", (event) => {
  event.stopPropagation();

  const button = event.target.closest(".task-item__delete-button");
  const confirm = event.target.closest(".delete-modal__confirm-button");
  const cancel = event.target.closest(".delete-modal__cancel-button");
  if (button) {
    modal.classList.toggle("modal-overlay_hidden");
    id = Number(button.dataset.deleteTaskId);
  }
  if (cancel) {
    modal.classList.toggle("modal-overlay_hidden");
  }
  if (confirm && id) {
    const index = tasks.findIndex((task) => task.id === id);
    if (index !== -1) {
      tasks.splice(index, 1);
      modal.classList.toggle("modal-overlay_hidden");
      const button = document.querySelectorAll(".task-item__delete-button");
      button[index].closest(".task-item").remove();
    }
  }
});

const setting = {
  theme: "light",
  light: {
    background: "",
    color: "",
    border: "",
  },
  dark: {
    background: "#24292E",
    color: "#ffffff",
    border: "1px solid #ffffff",
  },
};

body.addEventListener("keydown", (event) => {
  if (event.key === "Tab") {
    event.preventDefault();
    if (setting.theme === "light") {
      changeTheme("dark");
      setting.theme = "dark";
    } else {
      changeTheme("light");
      setting.theme = "light";
    }
  }
});

function changeTheme(theme = light) {
  const buttons = document.querySelectorAll("button");
  const taskItem = document.querySelectorAll(".task-item");

  body.style.background = setting[theme].background;
  if (tasks.length) {
    Array.from(taskItem).forEach(
      (node) => (node.style.color = setting[theme].color)
    );
  }
  buttons.forEach((button) => (button.style.border = setting[theme].border));
}
