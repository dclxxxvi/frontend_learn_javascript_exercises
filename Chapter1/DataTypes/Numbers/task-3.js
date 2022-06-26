// Ссылка на условие задачи
// https://learn.javascript.ru/number#beskonechnyy-tsikl-po-oshibke

let i = 0;
while (i < 11) {
  i += 0.2;
  if (i > 9.8 && i < 10.2) alert(i);
}
