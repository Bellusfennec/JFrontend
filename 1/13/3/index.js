class Dictionary {
  constructor(name) {
    this.name = name;
    this.words = {};
  }
  add(word, description) {
    const is = Object.values(this.words).filter((item) => item.word === word);
    if (is) this.words = { ...this.words, [word]: { word, description } };
  }
  remove(word) {
    const is = Object.values(this.words).filter((item) => item.word === word);
    if (is) delete this.words[word]
  }
  get() {}
  showAllWords() {}
}

const dictionary = new Dictionary("Толковый словарь");
dictionary.add("JavaScript", "популярный язык программирования");
dictionary.add(
  "Веб-разработчик",
  "Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие"
);

dictionary.remove("JavaScript");
dictionary.showAllWords();
// Веб-разработчик - Человек, который создает новые сервисы и сайты или поддерживает // и дополняет существующие
