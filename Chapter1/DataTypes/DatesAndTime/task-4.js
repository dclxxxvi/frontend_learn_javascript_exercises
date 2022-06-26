// Ссылка на условие задачи
// https://learn.javascript.ru/date#kakoy-den-mesyatsa-byl-mnogo-dney-nazad

function getDateAgo(date, days) {
  let dateCopy = new Date(date);

  dateCopy.setDate(date.getDate() - days);
  return dateCopy.getDate();
}

let date = new Date(2022, 5, 23);

console.log(getDateAgo(date, 1));
console.log(getDateAgo(date, 2));
console.log(getDateAgo(date, 365));
