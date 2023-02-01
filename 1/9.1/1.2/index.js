const showSuccessMessage = (message) => console.log(message);
const showErrorMessage = (message) => console.error(message);

const checkTextOnErrorSymbol = (text, errorSymbol, successCallback, errorCallback) => {
  let isSymbol = false
  for (let i = 0; i < text.length; i++) {
    if (text[i] !== errorSymbol) continue;
    if (!isSymbol) isSymbol = true
    errorCallback(`Найден запрещенный символ "${errorSymbol}" под индексом ${i}`);
  }
  if (!isSymbol) successCallback("В данном тексте нет запрещенных символов");
};

const text = "Привет! Как дела! Давно мы с тобой не виделись.";
checkTextOnErrorSymbol(text, "а", showSuccessMessage, showErrorMessage);
