// Ссылка на условие задачи
// https://learn.javascript.ru/string#sdelat-pervyy-simvol-zaglavnym

function ucFirst(str) {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}

console.log(ucFirst("вася"));
