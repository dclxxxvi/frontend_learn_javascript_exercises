// Ссылка на условие задачи
// https://learn.javascript.ru/native-prototypes#dobavit-funktsiyam-metod-f-defer-ms

Function.prototype.defer = function (ms) {
  setTimeout(this, ms);
};

function f() {
  console.log("Hello!");
}

f.defer(1000);
