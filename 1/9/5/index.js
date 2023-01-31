const clientsEstimations = [];

const askClientToGiveEstimation = () => {
  for (let i = 0; i < 5; i++) {
    const rating = Number(prompt("Как вы оцениваете нашу кофейню от 1 до 10?"));
    if (!rating || isNaN(rating)) continue;
    rating.trim();
    if (rating > 0 && rating <= 10) clientsEstimations.push(rating);
  }

  const goodEstimations = clientsEstimations.filter((rating) => rating > 5);
  const notGoodEstimations = clientsEstimations.filter((rating) => rating <= 5);

  alert(
    `Всего положительных оценок: ${goodEstimations.length}; Всего отрицательных оценок: ${notGoodEstimations.length}.`
  );
};

askClientToGiveEstimation();
