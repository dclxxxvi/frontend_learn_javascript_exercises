// Ссылка на условие задачи
// https://learn.javascript.ru/keys-values-entries#podschyot-kolichestva-svoystv-obekta

function count(obj) {
  return Object.keys(obj).length;
}

const user = {
  name: 'John',
  age: 30
};

console.log(count(user));
