// Ссылка на условие задачи
// // https://learn.javascript.ru/dom-navigation#vydelite-yacheyki-po-diagonali

const table = document.body.firstElementChild;

for (let i = 0; i < table.rows.length; i++) {
  let row = table.rows[i];
  row.cells[i].style.backgroundColor = 'red';
}
