// Ссылка на условие задачи
// https://learn.javascript.ru/number#sluchaynoe-tseloe-chislo-ot-min-do-max

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

console.log(randomInteger(1, 3));
