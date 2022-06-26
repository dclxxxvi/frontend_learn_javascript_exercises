// Ссылка на условие задачи
// https://learn.javascript.ru/array-methods#skopirovat-i-otsortirovat-massiv

function copySorted(arr) {
  return arr.slice().sort();
}

const arr = ["HTML", "JavaScript", "CSS"];

const sorted = copySorted(arr);

console.log(sorted);
console.log(arr);
