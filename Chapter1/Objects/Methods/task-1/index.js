// Ссылка на условие задачи
// https://learn.javascript.ru/object-methods#sozdayte-kalkulyator

const calculator = {
  sum() {
    return this.value1 + this.value2;
  },

  mul() {
    return this.value1 * this.value2;
  },

  read() {
    this.value1 = +prompt('Значкние1?', 0);
    this.value2 = +prompt('Значение2?', 0);
  }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
