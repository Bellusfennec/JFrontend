class Dictionary {
  #name;
  #words;
  constructor(name) {
    this.#name = name;
    this.#words = {};
  }
  add(word, description) {
    if (!this.#words[word]) this._addNewWord(word, { word, description });
  }
  remove(word) {
    if (this.#words[word]) delete this.#words[word];
  }
  get(word) {
    if (this.#words[word]) return this.#words[word];
  }
  showAllWords() {
    for (const key in this.#words) {
      console.log(`${key} - ${this.#words[key].description}`);
    }
  }
  get mainName() {
    return this.#name;
  }
  set mainName(value) {
    this.#name = value;
  }
  get allWords() {
    return Object.keys(this.#words).join(" и ");
  }
  _addNewWord(wordKey, wordObj) {
    this.#words = {
      ...this.#words,
      [wordKey]: wordObj,
    };
  }
}

class HardWordsDictionary extends Dictionary {
  #words;
  #name;
  constructor(name) {
    super(name);
    this.#name = name;
    this.#words = {};
  }
  add(word, description) {
    if (!this.#words[word])
      this._addNewWord(word, { word, description, isDifficult: true });
  }
}
const hardWordsDictionary = new HardWordsDictionary("Сложные слова");

hardWordsDictionary.add(
  "дилетант",
  "Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями."
);

hardWordsDictionary.add(
  "неологизм",
  "Новое слово или выражение, а также новое значение старого слова."
);

hardWordsDictionary.add(
  "квант",
  "Неделимая часть какой-либо величины в физике."
);

hardWordsDictionary.remove("неологизм");

hardWordsDictionary.showAllWords();

console.log(hardWordsDictionary.mainName); // Сложные слова
hardWordsDictionary.mainName = "Новый Словарь";
console.log(hardWordsDictionary.mainName); // Новый Словарь
console.log(hardWordsDictionary.allWords); // выводит объект в котором есть слова
// дилетант и квант
