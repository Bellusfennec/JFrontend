const dataContainer = document.querySelector("#data-container");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Ошибка запроса");
    }
    return response.json()
  })
  .then((data) => data.map(item => {

    dataContainer.insertAdjacentHTML('beforeend', `<li><a href="#">${item.username}</a></li>`)
  }))
  .catch((error) => console.error(error));
