let age = 18
let firstName = 'Нияз'
let rich = false

age = '18'
firstName = 19
rich = null

alert(age)
alert(firstName)
alert(rich)

console.log('--- Задание #3 ---');

let ageOfPerson1 = 18;
let ageOfPerson2 = '20';
ageOfPerson2 = ageOfPerson1;
console.log(ageOfPerson2, typeof ageOfPerson2);

let nameOfAnimal1 = null;
let nameOfAnimal2 = 'Charlie';
nameOfAnimal2 = nameOfAnimal1;
console.log(nameOfAnimal2, typeof nameOfAnimal2);

const bestProgrammingLanguage1 = 'JavaScript';
const bestProgrammingLanguage2 = 'Java';
console.log('Переменную с const переопределить нельзя');
console.log(bestProgrammingLanguage1, typeof bestProgrammingLanguage1);
console.log(bestProgrammingLanguage2, typeof bestProgrammingLanguage2);

let initialValue1;
let initialValue2 = 0;
initialValue2 = initialValue1;
console.log(initialValue2, typeof initialValue2);

var isJavaScriptProgrammer1 = true;
var isJavaScriptProgrammer2 = false;
console.log('var является устаревшим');

let helloText1 = 'Hello!';
let helloText2 = 'Привет!';
helloText2 = helloText1;
console.log(helloText2, typeof helloText2);