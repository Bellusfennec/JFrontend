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

const tasks = [];

const form = document.querySelector(".create-task-block");
const tasksList = document.querySelector(".tasks-list");
let id = null

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = event.target[0].value;
  const id = new Date().getTime();

  tasksList.insertAdjacentHTML(
    "beforeend",
    `<p id='${id}'>${text} <button class='delete-task-button' data-task-id='${id}'>Удалить </button></p>`
  );
  tasks.push({ id, text });
});

body.addEventListener("click", (event) => {
  event.stopPropagation();
  
  const button = event.target.closest(".delete-task-button");
  const confirm = event.target.closest(".delete-modal__confirm-button");
  if (button) {
    modal.classList.toggle("modal-overlay_hidden");
    id = Number(button.dataset.taskId)
  }
  if (confirm && id) {
    console.log(id);
    const index = tasks.findIndex((task) => task.id === id);
    if (index !== -1) {
      tasks.splice(index, 1);
      modal.classList.toggle("modal-overlay_hidden");
      const button = event.target.closest(".delete-task-button");
    }
    console.log(index);
    console.log(tasks);
  }
});
