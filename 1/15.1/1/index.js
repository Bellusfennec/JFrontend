class CustomSelect {
  #id
  #option
  #currentSelectedOption
  constructor(id, options) {
    this.#id = id;
    this.#option = options
    this.#currentSelectedOption = null
  }
  render(container) {
    console.log(this);
    
    container.insertAdjacentHTML(
      "beforeend",
      `<div class="select-dropdown select-dropdown--123">
    <button class="select-dropdown__button select-dropdown__button--123"> 
       <span class="select-dropdown__text select-dropdown__text--123">Выберите элемент</span>
    </button>
   <ul class="select-dropdown__list select-dropdown__list--123"> 
      <li class="select-dropdown__list-item" data-value="1">JavaScript</li>
      <li class="select-dropdown__list-item" data-value="2">NodeJS</li>
      <li class="select-dropdown__list-item" data-value="3">ReactJS</li>
      <li class="select-dropdown__list-item" data-value="4">HTML</li>
      <li class="select-dropdown__list-item" data-value="5">CSS</li> 
   </ul> 
 </div>`
    );
    console.log('selectedValue()', this.selectedValue);
  }
  get selectedValue() {
    const item = document.querySelectorAll('.select-dropdown__list-item')
    // item.addEventListener('click', (event) => {
    //   console.log(event);
    // })
    console.log(item);
    return 'get'
  }
}

const options = [
  { value: 1, text: 'JavaScript' },
  { value: 2, text: 'NodeJS' },
  { value: 3, text: 'ReactJS' },
  { value: 4, text: 'HTML' },
  { value: 5, text: 'CSS' }
];

const customSelect = new CustomSelect('123', options);
const mainContainer = document.querySelector('#container'); 
customSelect.render(mainContainer);