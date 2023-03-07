const dataContainer = document.querySelector("#data-container");
const loading = document.querySelector("#loading");

const getFastestLoadedPhoto = (ids) => {
  const photos = ids.map((item) =>
    fetch(`https://jsonplaceholder.typicode.com/photos/${item}`)
  );
  Promise.race(photos)
    .then((response) => {
      loading.hidden = false;
      if (!response.ok) {
        throw new Error("Ошибка запроса");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
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
    .finally(() => (loading.hidden = true));
};

getFastestLoadedPhoto([60, 12, 55]);
