class Dictionary {
  constructor(name) {
    this.name = name;
    this.words = {};
  }
  add(word, description) {
    if (!this.words[word])
      this.words = { ...this.words, [word]: { word, description } };
  }
  remove(word) {
    if (this.words[word]) delete this.words[word];
  }
  get(word) {
    if (this.words[word]) return this.words[word];
  }
  showAllWords() {
    for (const key in this.words) {
      console.log(`${key} - ${this.words[key].description}`);
    }
  }
}

const dictionary = new Dictionary("Толковый словарь");
dictionary.add("JavaScript", "популярный язык программирования");
dictionary.add(
  "Веб-разработчик",
  "Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие"
);
dictionary.get("JavaScript");
dictionary.remove("JavaScript");
dictionary.showAllWords();
// Веб-разработчик - Человек, который создает новые сервисы и сайты или поддерживает // и дополняет существующие
