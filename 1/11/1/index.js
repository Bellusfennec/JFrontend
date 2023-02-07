const getDateFormat = (date, separator = ".") => {
  const fullDate = new Date(date);
  let day = fullDate.getDate();
  let month = fullDate.getMonth() + 1;
  const year = fullDate.getFullYear();

  day = day < 10 ? "0" + day : day;
  month = month < 10 ? "0" + month : month;

  return day + separator + month + separator + year;
};
