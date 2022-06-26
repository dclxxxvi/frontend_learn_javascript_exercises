// Ссылка на условие задачи
// https://learn.javascript.ru/date#den-nedeli-v-evropeyskoy-numeratsii

function getLocalDay(date) {

  let day = date.getDay();

  if (day == 0) {
    day = 7;
  }

  return day;
}

let date = new Date(2022, 5, 28);
console.log(getLocalDay(date));
