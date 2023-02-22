const body = document.querySelector("body");
const buttons = document.querySelectorAll("button");
const taskItem = document.querySelector(".task-item");

body.addEventListener("keydown", (event) => {
  const key = event.key;
  if (key === "Tab") {
    body.style.background = body.style.background === "" ? "#24292E" : "";
    console.log(taskItem.children);
    Array.from(taskItem.children).forEach(
      (node) => (node.style.color = node.style.color === "" ? "#ffffff" : "")
    );
    buttons.forEach(
      (button) =>
        (button.style.border =
          button.style.border === "" ? "1px solid #ffffff" : "")
    );
  }
});
