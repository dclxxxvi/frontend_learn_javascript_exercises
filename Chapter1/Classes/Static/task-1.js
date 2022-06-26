// Ссылка на условие задачи
// https://learn.javascript.ru/static-properties-methods#klass-rasshiryaet-obekt

class Rabbit extends Object {
  constructor(name) {
    super();
    this.name = name;
  }
}

let rabbit = new Rabbit("Кроль");

console.log(rabbit.hasOwnProperty('name'));
