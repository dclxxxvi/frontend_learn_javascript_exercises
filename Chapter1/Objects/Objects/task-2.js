// Ссылка на условие задачи
// https://learn.javascript.ru/object#proverka-na-pustotu

function isEmpty(obj) {
  if (Object.keys(obj).length > 0) return false;
  return true;
}
