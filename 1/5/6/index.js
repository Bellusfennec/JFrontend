let userText = prompt('Введите текст');

userText.trim()

let wordFromText = prompt('Введите слово из текста');

wordFromText.trim()

let indexOfWord = userText.indexOf(wordFromText)
let string = userText.substring(0, indexOfWord)

alert(`Результат: ${string}`)