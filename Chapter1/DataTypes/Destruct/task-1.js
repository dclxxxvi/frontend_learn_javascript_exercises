// Ссылка на условие задачи
// https://learn.javascript.ru/destructuring-assignment#destrukturiruyuschee-prisvaivanie

const user = {
  name: 'John',
  years: 30
};

const { name, years: age, isAdmin = false } = user;

console.log(name);
console.log(age);
console.log(isAdmin);
