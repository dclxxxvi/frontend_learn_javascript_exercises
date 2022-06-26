// Ссылка на условие задачи
// https://learn.javascript.ru/function-prototype#sozdayte-novyy-obekt-s-pomoschyu-uzhe-suschestvuyuschego


// Правильно
function UserTrue(name) {
  this.name = name;
}

let userTrue = new UserTrue('John');
let userTrue2 = new userTrue.constructor('Pete');

console.log(userTrue2.name);


// Не правильно
function UserFalse(name) {
  this.name = name;
}
UserFalse.prototype = {};

let userFalse = new UserFalse('John');
let userFalse2 = new userFalse.constructor('Pete');

console.log(userFalse2.name);
