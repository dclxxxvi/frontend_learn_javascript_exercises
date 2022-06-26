// Ссылка на условие задачи
// https://learn.javascript.ru/array-methods#ostavit-unikalnye-elementy-massiva

function unique(arr) {
  return [... new Set(arr)];
}

let strings = [
  'кришна',
  'кришна',
  'харе',
  'харе',
  'харе',
  'харе',
  'кришна',
  'кришна',
  ':-O'
];

console.log(unique(strings));
