// Ссылка на условие задачи
// https://learn.javascript.ru/array-methods#otsortirovat-polzovateley-po-vozrastu

function sortByAge(arr) {
  arr.sort((a, b) => a.age > b.age ? 1 : -1);
}

const vasya = { name: "Вася", age: 25 };
const petya = { name: "Петя", age: 30 };
const masha = { name: "Маша", age: 28 };

const arr = [vasya, petya, masha];

sortByAge(arr);

console.log(arr[0].name);
console.log(arr[1].name);
console.log(arr[2].name);
