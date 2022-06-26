// Ссылка на условие задачи
// https://learn.javascript.ru/array-methods#filtratsiya-po-diapazonu

function filterRange(arr, a, b) {
  return arr.filter(item => a <= item && item <= b);
}

const arr = [5, 3, 8, 1];
const filtered = filterRange(arr, 1, 4);

console.log(filtered);
console.log(arr);
