// Ссылка на условие задачи
// https://learn.javascript.ru/array-methods#peremeshayte-massiv

function shuffle(arr) {
  arr.sort(() => Math.random() - 0.5);
}

const arr = [1, 2, 3];

shuffle(arr);

console.log(arr);
