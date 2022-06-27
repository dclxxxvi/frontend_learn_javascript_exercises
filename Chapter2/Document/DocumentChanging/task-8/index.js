// Ссылка на условие задачи
// https://learn.javascript.ru/modifying-document#sortirovka-tablitsy

let sortedRows = Array.from(table.rows)
  .slice(1)
  .sort((rowA, rowB) => rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1);

table.tBodies[0].append(...sortedRows);
