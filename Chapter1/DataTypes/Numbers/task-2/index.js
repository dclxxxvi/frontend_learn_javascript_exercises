// Ссылка на условие задачи
// https://learn.javascript.ru/number#vvod-chislovogo-znacheniya

function readNumber() {
  let number;

  do {
    number = prompt("Введите число", 0);
  } while (!isFinite(number));

  if (number === null || number === '') return null;

  return +number;
}

alert(`Число: ${readNumber()}`);
