const dataContainer = document.querySelector("#data-container");
const dataLoading = document.querySelector("#loader");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    dataLoading.hidden = false;
    if (!response.ok) {
      throw new Error("Ошибка запроса");
    }
    return response.json();
  })
  .then((data) =>
    data.map((item) => {
      dataContainer.insertAdjacentHTML(
        "beforeend",
        `<li><a href="#">${item.username}</a></li>`
      );
    })
  )
  .catch((error) => {
    console.error(error);
  })
  .finally(() => (dataLoading.hidden = true));
