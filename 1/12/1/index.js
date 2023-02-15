const student = {
  stack: ['HTML'],
  level: 1,
  improveLevel() {
     return this;
  }
};

student
  .improveLevel()
  .improveLevel()
  .improveLevel();