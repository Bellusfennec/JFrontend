// const javaScriptDescription =
//   "JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.";
const javaScriptDescription =
  "JavaS";

const halfJavaScriptDescription = javaScriptDescription
  .substring(0, halfText(javaScriptDescription))
  .replaceAll("a", "A")
  .replaceAll("а", "А")
  .replaceAll(" ", "")
  .repeat(3);

console.log(
  halfJavaScriptDescription[halfText(halfJavaScriptDescription)],
  halfJavaScriptDescription);

function halfText(text) {
  return Math.floor((text.length - 1) / 2);
}
