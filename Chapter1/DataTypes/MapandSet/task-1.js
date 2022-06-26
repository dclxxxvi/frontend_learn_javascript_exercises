// Ссылка на условие задачи
// https://learn.javascript.ru/map-set#filtratsiya-unikalnyh-elementov-massiva

function unique(arr) {
  return [... new Set(arr)];
}

let values = [
  'Hare',
  'Krishna',
  'Hare',
  'Krishna',
  'Krishna',
  'Krishna',
  'Hare',
  'Hare',
  ':-O'
];

console.log(unique(values));
