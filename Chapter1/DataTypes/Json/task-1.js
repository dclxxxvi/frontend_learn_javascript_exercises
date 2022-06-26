// Ссылка на условие задачи
// https://learn.javascript.ru/json#preobrazuyte-obekt-v-json-a-zatem-obratno-v-obychnyy-obekt

const user = {
  name: 'Василий Иванович',
  age: 35
};

const userNew = JSON.parse(JSON.stringify(user));

console.log(userNew);
