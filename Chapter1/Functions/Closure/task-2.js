// Ссылка на условие задачи
// https://learn.javascript.ru/closure#filtratsiya-s-pomoschyu-funktsii

// Фильтр inBetween
function inBetween(a, b) {
  return function (x) {
    return x >= a && x <= b;
  };
}

let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.filter(inBetween(3, 6)));

// Фильтр inArray
function inArray(arr) {
  return function (x) {
    return arr.includes(x);
  };
}

let array = [1, 2, 3, 4, 5, 6, 7];
console.log(array.filter(inArray([1, 2, 10])));
