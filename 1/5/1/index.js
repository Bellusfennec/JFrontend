const myName = "Нияз";
const programmingLanguage = "JavaScript";
const courseCreatorName = "Общество";
const reasonText = "новая сфера деятельности";
const numberOfMonth = 18;

console.log(
  `Всем привет! Меня зовут ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}. Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал(а) ${programmingLanguage} ${numberOfMonth} месяцев(а). Я уверен(а), что пройду данный курс до конца!`
);

console.log('--- Задание #2 ---');

let myInfoText = `Всем привет! Меня зовут ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}. Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал(а) ${programmingLanguage} ${numberOfMonth} месяцев(а). Я уверен(а), что пройду данный курс до конца!`;

myInfoText.replaceAll("JavaScript", "javascript");
myInfoText.replaceAll("курс", "КУРС");

console.log(myInfoText);

console.log(myInfoText[0], myInfoText[myInfoText.length - 1]);
