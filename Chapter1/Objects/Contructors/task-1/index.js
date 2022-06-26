// Ссылка на условие задачи
// https://learn.javascript.ru/constructor-new#sozdayom-accumulator

function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function () {
    this.value += +prompt('Сколько нужно добавить?', 0);
  };

}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);
