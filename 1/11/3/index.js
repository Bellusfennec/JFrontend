const addDays = (date, days) => {
  const msDays = days * 24 * 60 * 60 * 1000;
  const newDate = new Date(new Date(date).getTime() + msDays);
  let day = newDate.getDate();
  let month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();

  day = day < 10 ? "0" + day : day;
  month = month < 10 ? "0" + month : month;

  return day + "." + month + "." + year;
};
