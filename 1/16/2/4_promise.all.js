const dataContainer = document.querySelector("#data-container");
const dataLoading = document.querySelector("#loader");

function getUsersByIds(array) {
  const requests = array.map((item) => {
    return fetch(`https://api.github.com/user/${item}`);
  });
  Promise.all(requests)
    .then((responses) => {
      dataLoading.hidden = false;
      const results = responses.map((response) => {
        if (!response.ok) {
          throw new Error("Ошибка запроса");
        }
        return response.json();
      });
      return Promise.all(results);
    })
    .then((data) =>
      data.map((item) => {
        dataContainer.insertAdjacentHTML(
          "beforeend",
          `<li><a href="#">${item.login}</a></li>`
        );
      })
    )
    .catch((error) => console.error(error))
    .finally(() => (dataLoading.hidden = true));
}

getUsersByIds([5, 6, 2, 1]);
