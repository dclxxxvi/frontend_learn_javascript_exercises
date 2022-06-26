// Ссылка на условие задачи
// https://learn.javascript.ru/array-methods#sozdat-rasshiryaemyy-kalkulyator

function Calculator() {

  this.methods = {
    '-': (a, b) => a - b,
    '+': (a, b) => a + b
  };

  this.calculate = function (str) {

    let split = str.split(' '),
      a = +split[0],
      operation = split[1],
      b = +split[2]

    if (!this.methods[operation] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[operation](a, b);
  }

  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
}

const powerCalc = new Calculator;

powerCalc.addMethod('*', (a, b) => a * b);
powerCalc.addMethod('/', (a, b) => a / b);
powerCalc.addMethod('**', (a, b) => a ** b);

const result = powerCalc.calculate('2 ** 3');

console.log(result);
