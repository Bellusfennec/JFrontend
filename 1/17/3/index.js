const dataContainer = document.querySelector(".data-container");
const dataLoading = document.querySelector("#loader");

const renderAlbums = async () => {
  loading(true);
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/albums");
    if (!response.ok) {
      throw new Error("Ошибка запроса");
    }
    const result = await response.json();
    result.map((item) =>
      dataContainer.insertAdjacentHTML("beforeend", `<li>${item.title}</li>`)
    );
  } catch (error) {
    dataContainer.insertAdjacentHTML(
      "beforeend",
      "Произошла ошибка в получении данных об альбомах..."
    );
  } finally {
    loading(false);
  }
};

function loading(boolean = false) {
  const loading = document.querySelector(".loading");
  loading.hidden = !boolean;
}

renderAlbums();
