class CustomSelect {
  #id;
  #options;
  #currentSelectedOption;
  constructor(id, options) {
    this.#id = id;
    this.#options = options;
    this.#currentSelectedOption = {};
  }
  render(container) {
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
    const selectDropdownList = document.querySelector(".select-dropdown__list");
    this.#options.map((item) => {
      selectDropdownList.insertAdjacentHTML(
        "beforeend",
        `
        <li class="select-dropdown__list-item" data-value="${item.value}">
          ${item.text}
        </li>
        `
      );
    });

    const selectDropdownButton = document.querySelector(
      ".select-dropdown__button"
    );
    const selectDropdownListItem = [
      ...document.querySelectorAll(".select-dropdown__list-item"),
    ];
    const selectDropdownText = document.querySelector(".select-dropdown__text");

    selectDropdownButton.addEventListener("click", () => {
      
      selectDropdownList.classList.toggle("active");
    });

    selectDropdownList.addEventListener("click", (event) => {
      const [selected] = this.#options.filter(
        (option) => option.value === Number(event.target.dataset.value)
      );
      this.#currentSelectedOption = selected;
      selectDropdownText.textContent = this.#currentSelectedOption.text;
      selectDropdownList.classList.toggle("active");
      selectDropdownListItem.map((item) => {
        if (item.classList.contains("selected")) {
          item.classList.remove("selected");
        }
      });
      event.target.classList.add("selected");
    });
    window.addEventListener('click', (event) => {
      const body = document.querySelector('body')
      if (body === event.target && selectDropdownList.classList.contains("active")) {
        selectDropdownList.classList.toggle("active");
      }
    })
  }
  get selectedValue() {
    return this.#currentSelectedOption;
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
