const dataContainer = document.querySelector("#data-container");


const getFastestLoadedPhoto = (ids) => {
  const photos = ids.map((item) =>
    fetch(`https://jsonplaceholder.typicode.com/photos/${item}`)
  );
  Promise.race(photos)
    .then((response) => {
      loading(true)
      if (!response.ok) {
        throw new Error("Ошибка запроса");
      }
      return response.json();
    })
    .then((data) => {
      dataContainer.insertAdjacentHTML(
        "beforeend",
        `<li class="photo-item">
      <img class="photo-item__image" src="${data.url}">
      <h3 class="photo-item__title">
      ${data.title}
      </h3>
    </li>`
      );
    })
    .catch((error) => console.error(error))
    .finally(() => loading(false));
};

function loading(boolean = false) {
  const loading = document.querySelector("#loading");
  loading.hidden = !boolean;
}

getFastestLoadedPhoto([60, 12, 55]);

