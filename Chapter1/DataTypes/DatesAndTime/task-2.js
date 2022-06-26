// Ссылка на условие задачи
// https://learn.javascript.ru/date#pokazhite-den-nedeli

function getWeekDay(date) {
  let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

  return days[date.getDay()];
}

let date = new Date(2022, 5, 28);
console.log(getWeekDay(date));
