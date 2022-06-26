// Ссылка на условие задачи
// https://learn.javascript.ru/object#umnozhaem-vse-chislovye-svoystva-na-2

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == 'number') {
      obj[key] *= 2;
    }
  }
}

const menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

console.log(menu);
