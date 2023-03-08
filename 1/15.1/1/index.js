class CustomSelect {
  #id;
  #option;
  #currentSelectedOption;
  constructor(id, options) {
    this.#id = id;
    this.#option = options;
    this.#currentSelectedOption = null;
  }
  render(container) {
    console.log(this);

    container.insertAdjacentHTML(
      "beforeend",
      `
      <div class="select-dropdown select-dropdown--${this.#id}">
        <button class="select-dropdown__button select-dropdown__button--${
          this.#id
        }"> 
          <span class="select-dropdown__text select-dropdown__text--${
            this.#id
          }">Выберите элемент</span>
        </button>
        <ul class="select-dropdown__list select-dropdown__list--${
          this.#id
        }"></ul> 
      </div>
      `
    );
    const selectDropdown = document.querySelector(".select-dropdown__list");
    this.#option.map((item) => {
      selectDropdown.insertAdjacentHTML(
        "beforeend",
        `
        <li class="select-dropdown__list-item" data-value="${item.value}">
          ${item.text}
        </li>
        `
      );
    });
    console.log("selectedValue()", this.selectedValue);
  }
  get selectedValue() {
    const item = document.querySelectorAll(".select-dropdown__list-item");
    // item.addEventListener('click', (event) => {
    //   console.log(event);
    // })
    console.log(item);
    return "get";
  }
}

const options = [
  { value: 1, text: "JavaScript" },
  { value: 2, text: "NodeJS" },
  { value: 3, text: "ReactJS" },
  { value: 4, text: "HTML" },
  { value: 5, text: "CSS" },
];

const customSelect = new CustomSelect("123", options);
const mainContainer = document.querySelector("#container");
customSelect.render(mainContainer);
