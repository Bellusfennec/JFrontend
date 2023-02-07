const addDays = (date, days) => {
  return convertMsToDays(nextBirthdayDate) - convertMsToDays(new Date());
};

function convertMsToDays(ms) {
  return Math.round(ms / 1000 / 60 / 60 / 24);
}

getDaysBeforeBirthday(new Date("November 11, 2023"))
