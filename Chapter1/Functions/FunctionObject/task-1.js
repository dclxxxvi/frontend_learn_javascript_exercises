// Ссылка на условие задачи
// https://learn.javascript.ru/function-object#ustanovka-i-umenshenie-znacheniya-schyotchika

function makeCounter() {
  let count = 0;

  function counter() {
    return count++;
  }

  counter.set = value => count = value;

  counter.decrease = () => count--;

  return counter;
}

